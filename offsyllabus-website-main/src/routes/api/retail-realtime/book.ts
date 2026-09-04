        import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { ZONES, createPendingBooking } from "@/server/retail-realtime";

const bookingSchema = z.object({
  name: z.string().trim().min(2, "Name is too short"),
  email: z.string().trim().email("Invalid email"),
  phone: z.string().trim().min(10, "Invalid phone number"),
  zone: z.enum(ZONES),
});

export const Route = createFileRoute("/api/retail-realtime/book")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let body: unknown;
        try {
          body = await request.json();
        } catch {
          return Response.json({ error: "Invalid JSON body" }, { status: 400 });
        }

        const parsed = bookingSchema.safeParse(body);
        if (!parsed.success) {
          return Response.json(
            { error: "Invalid input", details: parsed.error.flatten() },
            { status: 400 }
          );
        }

        try {
          const bookingId = await createPendingBooking(parsed.data);
          return Response.json({
            bookingId,
            status: "pending",
          });
        } catch (err) {
          const message = err instanceof Error ? err.message : "Unknown error";

          if (message === "SOLD_OUT") {
            return Response.json({ error: "SOLD_OUT" }, { status: 409 });
          }
          if (message === "ZONE_FULL") {
            return Response.json({ error: "ZONE_FULL" }, { status: 409 });
          }

          console.error("[api/retail-realtime/book]", err);
          return Response.json(
            { error: "Could not create booking" },
            { status: 500 }
          );
        }
      },
    },
  },
});