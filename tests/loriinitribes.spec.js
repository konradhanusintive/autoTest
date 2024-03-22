import { test, expect } from "@playwright/test";

test("loriini", async ({ page }) => {
  await page.goto("https://www.google.pl/");
  await page.goto("http://loriinitribes.pl/");
  await page
    .frameLocator("iframe")
    .getByRole("button", { name: "Create a profile" })
    .click();
  await page.frameLocator("iframe").locator('input[type="text"]').click();
  await page
    .frameLocator("iframe")
    .locator('input[type="text"]')
    .fill("konrad.hanus@gmail.com");
  await page.frameLocator("iframe").locator('input[type="text"]').press("Tab");
  await page
    .frameLocator("iframe")
    .getByTestId("text-input-outlined")
    .nth(1)
    .fill("123123");
  await page
    .frameLocator("iframe")
    .getByTestId("text-input-outlined")
    .nth(2)
    .fill("1");
  await page
    .frameLocator("iframe")
    .getByTestId("text-input-outlined")
    .nth(2)
    .click();
  await page
    .frameLocator("iframe")
    .getByTestId("text-input-outlined")
    .nth(2)
    .fill("123123");
  await page
    .frameLocator("iframe")
    .getByRole("checkbox", { name: "󰄱" })
    .click();
  await page
    .frameLocator("iframe")
    .getByRole("button", { name: "Create profile" })
    .click();
  await page
    .frameLocator("iframe")
    .getByText(" Email address is already in")
    .click();
});
