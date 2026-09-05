// One-off helper: run with `node scripts/screenshot-sites.mjs` to refresh the
// third-party site screenshots used in the web-design carousel on the homepage.
import puppeteer from "puppeteer-core";

const CHROME_PATH = process.env.CHROME_PATH || "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const SETTLE_MS = 1500;

async function dismissGates(page) {
  const ageGate = await page.$("#age-gate-yes");
  if (ageGate && (await ageGate.boundingBox())) {
    await ageGate.click();
    await new Promise((r) => setTimeout(r, 1000));
  }
  const cookieAccept = await page.$("#cookie-accept");
  if (cookieAccept && (await cookieAccept.boundingBox())) {
    await cookieAccept.click();
    await new Promise((r) => setTimeout(r, 500));
  }
}

async function scrollToText(page, text) {
  return page.evaluate((needle) => {
    // Skip elements inside a fixed/sticky header — those never actually move the page.
    const all = Array.from(document.querySelectorAll("body *"));
    const el = all.find((e) => {
      if (e.children.length !== 0 || e.textContent?.trim() !== needle) return false;
      const style = getComputedStyle(e);
      return style.position !== "fixed" && style.position !== "sticky" && !e.closest("header");
    });
    if (!el) return false;
    el.scrollIntoView({ block: "center" });
    return true;
  }, text);
}

async function scrollByPx(page, px) {
  await page.evaluate((y) => window.scrollTo(0, y), px);
}

async function shoot(page, outName) {
  await new Promise((r) => setTimeout(r, SETTLE_MS));
  const out = new URL(`../public/web-dizajn/${outName}`, import.meta.url);
  await page.screenshot({ path: out, type: "jpeg", quality: 88 });
  console.log(`  saved -> ${out}`);
}

// Each entry: { url, gate: true = run dismissGates after nav, scrollTo?: landmark text, out }
const SOLDO_SHOTS = [
  { url: "https://vinarija-soldo.hr/index.html", gate: true, scrollTo: null, out: "04-vinarija-soldo-pocetna.jpg" },
  { url: "https://vinarija-soldo.hr/index.html", gate: false, scrollTo: "Zašto Soldo", out: "06-vinarija-soldo-zasto.jpg" },
  { url: "https://vinarija-soldo.hr/o-nama.html", gate: true, scrollTo: null, out: "07-vinarija-soldo-onama.jpg" },
  { url: "https://vinarija-soldo.hr/vina.html", gate: true, scrollTo: null, out: "08-vinarija-soldo-vina.jpg" },
  { url: "https://vinarija-soldo.hr/vina.html", gate: false, scrollY: 1080, out: "09-vinarija-soldo-vina-detalj.jpg" },
  { url: "https://vinarija-soldo.hr/kontakt.html", gate: true, scrollTo: null, out: "10-vinarija-soldo-kontakt.jpg" },
];

async function main() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: "new",
    args: ["--no-sandbox", "--disable-gpu"],
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 1080 });

  console.log("Screenshotting vinarija-soldo.hr (multiple real pages)");
  let lastUrl = null;
  for (const { url, gate, scrollTo, scrollY, out } of SOLDO_SHOTS) {
    if (url !== lastUrl) {
      await page.goto(url, { waitUntil: "networkidle0", timeout: 30000 });
      lastUrl = url;
      if (gate) await dismissGates(page);
      await page.evaluate(() => window.scrollTo(0, 0));
    }
    if (scrollTo) {
      const found = await scrollToText(page, scrollTo);
      if (!found) {
        console.log(`  (landmark "${scrollTo}" not found on ${url}, screenshotting top instead)`);
        await page.evaluate(() => window.scrollTo(0, 0));
      }
    } else if (scrollY) {
      await scrollByPx(page, scrollY);
    } else {
      await page.evaluate(() => window.scrollTo(0, 0));
    }
    await shoot(page, out);
  }

  console.log("Screenshotting https://tastethejourney.creolab-design.hr/");
  try {
    await page.goto("https://tastethejourney.creolab-design.hr/", { waitUntil: "networkidle0", timeout: 30000 });
    // shows a splash/loading animation before the real content
    await new Promise((r) => setTimeout(r, 3500));
    await shoot(page, "05-taste-the-journey.jpg");
  } catch (err) {
    console.error(`  FAILED: ${err.message}`);
  }

  await browser.close();
}

main();
