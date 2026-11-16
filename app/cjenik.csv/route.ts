import { priceGroups } from "@/lib/pricing";

export const dynamic = "force-static";

// Strojno čitljiv cjenik (CSV, UTF-8 s BOM-om, zarez kao separator, točka kao decimalni znak).
// Generira se iz lib/pricing.ts pa je uvijek identičan cjeniku na stranici.
const esc = (v: string) => (/[",\n]/.test(v) ? `"${v.replace(/"/g, '""')}"` : v);
const eur = (n: number) => n.toFixed(2);

export function GET() {
  const rows = [
    ["kategorija", "usluga", "cijena_eur", "datum_cijene_na_dan", "cijena_na_dan_eur"],
    ...priceGroups.flatMap((g) =>
      g.items.map((it) => [g.title.hr, it.name.hr, eur(it.price), it.date, eur(it.priceOnDate)]),
    ),
  ];
  const body = "﻿" + rows.map((r) => r.map(esc).join(",")).join("\r\n") + "\r\n";
  return new Response(body, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": 'inline; filename="cjenik-creolab.csv"',
    },
  });
}
