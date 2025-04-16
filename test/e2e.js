const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('http://127.0.0.1:5500/index.html');

  // Test: Cards load
  const cards = await page.locator('.card').count();
  console.log(cards >= 3 ? "Pass: Cards loaded" : "Fail: No cards");

  await browser.close();
})();