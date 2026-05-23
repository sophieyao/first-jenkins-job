import { test } from "@playwright/test";

test("Getting the title of the page", async ({ page }) => {
  await page.goto("https://practice.cydeo.com");

  await page.waitForTimeout;
  let actualTitle = await page.title();
  console.log(actualTitle);
});


test("Getting the URL of the page", async ({ page }) => {
    await page.goto("https://practice.cydeo.com");

    await page.waitForTimeout;
    let actualURL = await page.url();
    console.log(actualURL);
});

test("Set the window size", async ({ page }) => {
    await page.goto("https://practice.cydeo.com");
    await page.waitForTimeout(3000);
    await page.setViewportSize({ width: 1850, height: 1080 });
});