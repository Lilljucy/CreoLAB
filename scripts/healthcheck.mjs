// Run with: node scripts/healthcheck.mjs [baseUrl]
// Default target is the live production site; pass http://localhost:3000 to check a local dev server instead.
import puppeteer from "puppeteer-core";

const BASE_URL = process.argv[2] || "https://creolab-design.com";
const CHROME_PATH = process.env.CHROME_PATH || "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

const LOCALES = ["hr", "en", "de"];
const ROUTES = ["", "/portfolio", "/portfolio/platinum-grupa", "/kontakt", "/privatnost"];

async function checkPage(page, url, results) {
  const consoleErrors = [];
  const httpFailures = [];

  const onConsole = (msg) => {
    if (msg.type() === "error") consoleErrors.push(msg.text());
  };
  const onResponse = (res) => {
    if (res.status() >= 400) httpFailures.push(`${res.status()} ${res.url()}`);
  };
  const onPageError = (err) => consoleErrors.push(`PAGE ERROR: ${err.message}`);

  page.on("console", onConsole);
  page.on("response", onResponse);
  page.on("pageerror", onPageError);

  let status = null;
  try {
    const response = await page.goto(url, { waitUntil: "networkidle0", timeout: 30000 });
    status = response ? response.status() : null;
    await new Promise((r) => setTimeout(r, 500));
  } catch (err) {
    results.push({ url, ok: false, reason: `navigation failed: ${err.message}` });
    page.off("console", onConsole);
    page.off("response", onResponse);
    page.off("pageerror", onPageError);
    return;
  }

  page.off("console", onConsole);
  page.off("response", onResponse);
  page.off("pageerror", onPageError);

  const ok = status === 200 && consoleErrors.length === 0 && httpFailures.length === 0;
  results.push({ url, ok, status, consoleErrors, httpFailures });
}

async function main() {
  console.log(`\nCREOCHECK — checking ${BASE_URL}\n`);

  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: "new",
    args: ["--no-sandbox", "--disable-gpu"],
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 1000 });

  const results = [];
  for (const locale of LOCALES) {
    for (const route of ROUTES) {
      const url = `${BASE_URL}/${locale}${route}`;
      await checkPage(page, url, results);
    }
  }

  await browser.close();

  const failed = results.filter((r) => !r.ok);
  for (const r of results) {
    const mark = r.ok ? "OK  " : "FAIL";
    console.log(`${mark} ${r.url}${r.status ? ` (${r.status})` : ""}`);
    if (!r.ok) {
      if (r.reason) console.log(`     ${r.reason}`);
      if (r.httpFailures?.length) console.log(`     HTTP: ${r.httpFailures.join(", ")}`);
      if (r.consoleErrors?.length) console.log(`     Console: ${r.consoleErrors.join(" | ")}`);
    }
  }

  console.log(`\n${results.length - failed.length}/${results.length} pages OK`);
  if (failed.length > 0) {
    console.log(`${failed.length} page(s) FAILED — see details above.\n`);
    process.exitCode = 1;
  } else {
    console.log("All good.\n");
  }
}

main();
