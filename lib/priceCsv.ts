import { priceGroups } from "./pricing";

// Cjenik usluga u strojno čitljivom obliku — Odluka o objavi cjenika proizvoda i usluga
// kao mjera izravne kontrole cijena (NN 101/2026), točka IV. (polja) i VI. (naziv datoteke).
// Odluka NE propisuje redoslijed stupaca, razdjelnik ni kodiranje.

// Točka VI. + službeni primjer Ministarstva za uslužni objekt:
//   servis_Vukovarska 20 Osijek_U-03_015_01.10.2026_07:45
// oblik objekta _ adresa _ oznaka objekta _ broj pohrane _ datum i vrijeme slanja.
// Obrt s jednim poslovnim prostorom bez internih oznaka smije koristiti npr. P-01, NP ili 01 (pojašnjenje MINGO).
// Odstupanja od primjera zbog sigurnih naziva datoteka/URL-a: razmaci u adresi → "-", bez dijakritika,
// a dvotočka u vremenu zamijenjena crticom (dvotočka nije dopuštena u nazivima datoteka na Windowsu).
const OBLIK = "servis";
const ADRESA = "Marije-Juric-Zagorke-9-Pozega";
const OZNAKA = "U-01";
// Redni broj poslane/generirane datoteke u evidenciji obrta (povećati za 1 pri svakoj novoj objavi).
const BROJ_POHRANE = "001";
// Datum i vrijeme objave cjenika (DD.MM.YYYY_HH-MM). Mijenja se pri svakoj izmjeni cijena.
const TIMESTAMP = "16.11.2026_17-14";

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
