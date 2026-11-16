import { csvResponse } from "@/lib/priceCsv";

export const dynamic = "force-static";

// Kratki alias; službena adresa datoteke je /cjenici/<naziv-datoteke>.csv
export function GET() {
  return csvResponse();
}
