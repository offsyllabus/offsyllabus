import { supabaseAdmin } from "./supabase";

export const ZONES = ["marketing", "business", "design", "tech", "zone5"] as const;
export type Zone = (typeof ZONES)[number];

export const SEATS_PER_ZONE = 5;
export const TOTAL_SEATS = 25;

export type ZoneCount = { zone: Zone; seatsTaken: number };

export type SeatSummary = {
  totalSeatsTaken: number;
  totalSeatsAvailable: number;
  soldOut: boolean;
  zones: Record<Zone, { seatsTaken: number; seatsAvailable: number; full: boolean }>;
};

export async function getSeatSummary(): Promise<SeatSummary> {
  const { data, error } = await supabaseAdmin.rpc("get_seat_counts");

  if (error) {
    throw new Error(`Failed to load seat counts: ${error.message}`);
  }

  const counts = (data ?? []) as ZoneCount[];
  const countsByZone = new Map(counts.map((c) => [c.zone, c.seatsTaken]));

  const zones = {} as SeatSummary["zones"];
  let totalSeatsTaken = 0;

  for (const zone of ZONES) {
    const seatsTaken = countsByZone.get(zone) ?? 0;
    totalSeatsTaken += seatsTaken;
    zones[zone] = {
      seatsTaken,
      seatsAvailable: Math.max(SEATS_PER_ZONE - seatsTaken, 0),
      full: seatsTaken >= SEATS_PER_ZONE,
    };
  }

  return {
    totalSeatsTaken,
    totalSeatsAvailable: Math.max(TOTAL_SEATS - totalSeatsTaken, 0),
    soldOut: totalSeatsTaken >= TOTAL_SEATS,
    zones,
  };
}

export async function createPendingBooking(input: {
  name: string;
  email: string;
  phone: string;
  zone: Zone;
}) {
  const summary = await getSeatSummary();

  if (summary.soldOut) {
    throw new Error("SOLD_OUT");
  }
  if (summary.zones[input.zone].full) {
    throw new Error("ZONE_FULL");
  }

  const { data, error } = await supabaseAdmin
    .from("bookings")
    .insert({
      name: input.name,
      email: input.email,
      phone: input.phone,
      zone: input.zone,
      payment_status: "pending",
    })
    .select("id")
    .single();

  if (error) {
    throw new Error(`Failed to create booking: ${error.message}`);
  }

  return data.id as string;
}