import { test } from "@playwright/test";

test.describe("Test Group", () => {
  test("SelectOption(): used for dropdown box with select tagname", async ({ page }) => {
      await page.goto("https://the-internet-5chk.onrender.com//");
      let dropdown = page.getByText('Dropdown');
      dropdown.click();
      let simpleDropdown = page.locator("//select[@id='dropdown']");
      // await simpleDropdown.selectOption('1');
      // await simpleDropdown.selectOption({ index:2 })
      await simpleDropdown.selectOption({ label: 'option 1' })
      await page.waitForTimeout(2000);
  });


  test("test case2", async ({ page }) => {});

  test("test case3", async ({ page }) => {});
});
 