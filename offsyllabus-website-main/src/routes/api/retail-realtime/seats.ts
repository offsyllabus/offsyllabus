import { createFileRoute } from "@tanstack/react-router";
import { getSeatSummary } from "@/server/retail-realtime";

export const Route = createFileRoute("/api/retail-realtime/seats")({
  server: {
    handlers: {
      GET: async () => {
        try {
          const summary = await getSeatSummary();
          return Response.json(summary);
        } catch (err) {
          console.error("[api/retail-realtime/seats]", err);
          return Response.json(
            { error: "Could not load seat availability" },
            { status: 500 }
          );
        }
      },
    },
  },
});