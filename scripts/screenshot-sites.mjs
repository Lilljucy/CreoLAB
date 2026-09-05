// One-off helper: run with `node scripts/screenshot-sites.mjs` to refresh the
// third-party site screenshots used in the web-design carousel on the homepage.
import puppeteer from "puppeteer-core";

const CHROME_PATH = process.env.CHROME_PATH || "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

const TARGETS = [
  {
    url: "https://vinarija-soldo.hr/index.html",
    out: new URL("../public/web-dizajn/04-vinarija-soldo.jpg", import.meta.url),
  },
  {
    url: "https://tastethejourney.creolab-design.hr/",
    out: new URL("../public/web-dizajn/05-taste-the-journey.jpg", import.meta.url),
  },
];

async function main() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: "new",
    args: ["--no-sandbox", "--disable-gpu"],
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 1080 });

  for (const { url, out } of TARGETS) {
    console.log(`Screenshotting ${url}`);
    try {
      await page.goto(url, { waitUntil: "networkidle0", timeout: 30000 });

      // vinarija-soldo.hr has an 18+ age-gate overlay, then a cookie banner
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
