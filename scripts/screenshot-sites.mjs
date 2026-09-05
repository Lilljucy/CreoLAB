// One-off helper: run with `node scripts/screenshot-sites.mjs` to refresh the
// third-party site screenshots used in the web-design carousel on the homepage.
import puppeteer from "puppeteer-core";

const CHROME_PATH = process.env.CHROME_PATH || "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

const TARGETS = [
  {
    url: "https://tastethejourney.creolab-design.hr/",
    out: new URL("../public/web-dizajn/05-taste-the-journey.jpg", import.meta.url),
  },
];

// Landmark text to scroll to for each extra vinarija-soldo.hr section screenshot.
const SOLDO_SECTIONS = [
  { label: "hero", text: null, out: "04-vinarija-soldo.jpg" },
  { label: "vina", text: "Izdvajamo", out: "06-vinarija-soldo-vina.jpg" },
  { label: "o nama", text: "Naša priča", out: "07-vinarija-soldo-onama.jpg" },
  { label: "zasto soldo", text: "Zašto Soldo", out: "08-vinarija-soldo-zasto.jpg" },
  { label: "kontakt", text: "Kontaktirajte nas", out: "09-vinarija-soldo-kontakt.jpg" },
];

async function screenshotSoldo(page) {
  console.log("Screenshotting https://vinarija-soldo.hr/index.html (multiple sections)");
  await page.goto("https://vinarija-soldo.hr/index.html", { waitUntil: "networkidle0", timeout: 30000 });

  const ageGate = await page.$("#age-gate-yes");
  if (ageGate) {
    await ageGate.click();
    await new Promise((r) => setTimeout(r, 1000));
  }
  const cookieAccept = await page.$("#cookie-accept");
  if (cookieAccept) {
    await cookieAccept.click();
    await new Promise((r) => setTimeout(r, 500));
  }

  for (const { label, text, out } of SOLDO_SECTIONS) {
    if (text) {
      const found = await page.evaluate((needle) => {
        const all = Array.from(document.querySelectorAll("body *"));
        const el = all.find((e) => e.children.length === 0 && e.textContent?.trim() === needle);
        if (!el) return false;
        el.scrollIntoView({ block: "center" });
        return true;
      }, text);
      if (!found) {
        console.log(`  (landmark "${text}" not found for ${label}, skipping)`);
        continue;
      }
    } else {
      await page.evaluate(() => window.scrollTo(0, 0));
    }
    await new Promise((r) => setTimeout(r, 1500));
    const out_ = new URL(`../public/web-dizajn/${out}`, import.meta.url);
    await page.screenshot({ path: out_, type: "jpeg", quality: 88 });
    console.log(`  saved ${label} -> ${out_}`);
  }
}

async function main() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: "new",
    args: ["--no-sandbox", "--disable-gpu"],
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 1080 });

  await screenshotSoldo(page);

  for (const { url, out } of TARGETS) {
    console.log(`Screenshotting ${url}`);
    try {
      await page.goto(url, { waitUntil: "networkidle0", timeout: 30000 });

      // tastethejourney shows a splash/loading animation before the real content
      await new Promise((r) => setTimeout(r, 3500));

      await page.screenshot({ path: out, type: "jpeg", quality: 88 });
      console.log(`  saved -> ${out}`);
    } catch (err) {
      console.error(`  FAILED: ${err.message}`);
    }
  }

  await browser.close();
}

main();
