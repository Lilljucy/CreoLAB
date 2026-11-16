import { priceGroups } from "./pricing";

// Cjenik usluga u strojno čitljivom obliku — Odluka o objavi cjenika proizvoda i usluga
// kao mjera izravne kontrole cijena (NN 101/2026), točka IV. (polja) i VI. (naziv datoteke).
// Odluka NE propisuje redoslijed stupaca, razdjelnik ni kodiranje.

// Točka VI.: oblik prodajnog objekta, adresa, oznaka objekta, broj pohrane, vremenska oznaka slanja.
// ⚠ "oznaka" i "broj pohrane" su pretpostavljene vrijednosti — uskladiti s onim što obrt koristi.
const OBLIK = "usluge";
const ADRESA = "Marije-Juric-Zagorke-9-Pozega";
const OZNAKA = "1";
const BROJ_POHRANE = "1";
// Vrijeme zadnje izmjene/objave cjenika (YYYYMMDD-HHMM). Mijenja se pri svakoj promjeni cijena.
const TIMESTAMP = "20261116-1156";

export const CSV_FILENAME = [OBLIK, ADRESA, OZNAKA, BROJ_POHRANE, TIMESTAMP].join("_") + ".csv";

const money = (n: number) => n.toFixed(2).replace(".", ",");
const esc = (v: string) => (/[";\r\n]/.test(v) ? `"${v.replace(/"/g, '""')}"` : v);

export function buildPriceCsv(): string {
  const rows: string[][] = [
    ["naziv_usluge", "maloprodajna_cijena_eur", "posebni_oblik_prodaje", "naziv_posebnog_oblika_prodaje", "sidrena_cijena_eur"],
    ...priceGroups.flatMap((g) =>
      g.items.map((it) => [it.name.hr, money(it.price), "NE", "", money(it.priceOnDate)]),
    ),
  ];
  return "﻿" + rows.map((r) => r.map(esc).join(";")).join("\r\n") + "\r\n";
}

export function csvResponse(): Response {
  return new Response(buildPriceCsv(), {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `inline; filename="${CSV_FILENAME}"`,
    },
  });
}
