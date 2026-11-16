import { readFileSync } from "node:fs";
import { join } from "node:path";

// Cjenik usluga u strojno čitljivom obliku — Odluka NN 101/2026 (točka IV. polja, VI. naziv datoteke).

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
const TIMESTAMP = "16.11.2026_17-20";

export const CSV_FILENAME = [OBLIK, ADRESA, OZNAKA, BROJ_POHRANE, TIMESTAMP].join("_") + ".csv";

// Datoteka se poslužuje doslovno kako je Iva dostavila (data/cjenik.csv): stupci Grupa*, Naziv*, Vrsta*,
// Interna šifra, Marka, Cijena*, ..., Sidrena cijena, Sidrena cijena na dan, ..., Dostupnost (zarez, točka kao decimalni znak).
export function buildPriceCsv(): string {
  return readFileSync(join(process.cwd(), "data", "cjenik.csv"), "utf8");
}

export function csvResponse(): Response {
  return new Response(buildPriceCsv(), {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `inline; filename="${CSV_FILENAME}"`,
    },
  });
}
