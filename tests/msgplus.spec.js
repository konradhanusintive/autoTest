import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://www.msgplus.tv/");
  await page.goto("https://www.msgplus.tv/welcome");
  await page.getByRole("button", { name: "Close" }).click();
  await page.getByPlaceholder("Email address").click();
  await page.getByPlaceholder("Email address").fill("msg-vip2@yopmail.com");
  await page.getByRole("button", { name: "Login / Register" }).click();
  await page.getByPlaceholder("Password").click();
  await page.getByPlaceholder("Password").fill("Password1");
  await page.getByRole("button", { name: "SIGN IN" }).click();
  await page.getByRole("button", { name: "LIVE" }).click();
  await page.getByRole("button", { name: "MSG", exact: true }).click();
  await page.getByRole("button", { name: "LIVE" }).click();
  await page.getByRole("button", { name: "MSGSN", exact: true }).click();
  await page.getByRole("button", { name: "LIVE" }).click();
  await page.getByRole("button", { name: "MSG2" }).click();
  await page.getByRole("button", { name: "LIVE" }).click();
  await page.getByRole("button", { name: "MSGSN2" }).click();
  await page.getByRole("button", { name: "TEAMS" }).click();
  await page.getByRole("button", { name: "NY Knicks Knicks" }).click();
  await page.getByRole("button", { name: "NY Rangers Rangers" }).click();
  await page.getByRole("button", { name: "NY Islanders Islanders" }).click();
  await page.getByRole("button", { name: "NJ Devils Devils" }).click();
  await page
    .locator(
      ".HeroBannerindicatorsstyles__DotsWrapper-sc-kbse8r-0 > button:nth-child(3)"
    )
    .click();
  await page
    .locator(
      ".HeroBannerindicatorsstyles__DotsWrapper-sc-kbse8r-0 > button:nth-child(4)"
    )
    .click();
  await page
    .locator(
      ".HeroBannerindicatorsstyles__DotsWrapper-sc-kbse8r-0 > button:nth-child(5)"
    )
    .click();
  await page.locator("button:nth-child(6)").click();
  await page.locator("button:nth-child(7)").click();
  await page.getByRole("link", { name: "SEE ALL" }).click();
  await page.getByRole("button", { name: "Back" }).click();
  await page.getByRole("button", { name: "SCHEDULE" }).click();
  await page.getByRole("button", { name: "GAMES" }).click();
  await page.getByRole("button", { name: "CHANNELS" }).click();
  await page.getByRole("button", { name: "GAMES" }).click();
  await page.getByRole("button", { name: "NY Knicks Knicks" }).click();
  await page.getByRole("button", { name: "NY Rangers Rangers" }).click();
  await page.getByRole("button", { name: "NY Islanders Islanders" }).click();
  await page.getByRole("button", { name: "NJ Devils Devils" }).click();
  await page.getByRole("button", { name: "ALL TEAMS" }).click();
  await page.getByRole("button", { name: "Apr" }).click();
  await page.getByRole("button", { name: "May" }).click();
  await page.getByRole("button", { name: "Jun" }).click();
  await page.getByRole("button", { name: "Jul" }).click();
  await page.getByRole("button", { name: "Aug" }).click();
  await page.getByRole("button", { name: "Sep" }).click();
  await page.getByRole("button", { name: "Oct" }).click();
  await page.getByRole("button", { name: "Nov" }).click();
  await page.getByRole("button", { name: "Dec" }).click();
  await page.getByRole("button", { name: "Jan" }).click();
  await page.getByRole("button", { name: "ODDS" }).click();
  await page
    .locator(
      ".Navigationstyles__Settings-sc-zgrium-7 > .NavigationItemstyles__Item-sc-4015dd-0"
    )
    .click();
  await page.getByRole("tab", { name: "SUBSCRIPTION AND HISTORY" }).click();
  await page.getByRole("tab", { name: "MANAGE TV PROVIDER" }).click();
  const page1Promise = page.waitForEvent("popup");
  await page.getByRole("tab", { name: "FAQ" }).click();
  const page1 = await page1Promise;
  await page.getByRole("tab", { name: "CONTACT US" }).click();
  const page2Promise = page.waitForEvent("popup");
  await page.getByRole("tab", { name: "TERMS OF USE" }).click();
  const page2 = await page2Promise;
  const page3Promise = page.waitForEvent("popup");
  await page.getByRole("tab", { name: "PRIVACY POLICY" }).click();
  const page3 = await page3Promise;
  const page4Promise = page.waitForEvent("popup");
  await page.getByRole("tab", { name: "NOTICE TO CA RESIDENTS" }).click();
  const page4 = await page4Promise;
  const page5Promise = page.waitForEvent("popup");
  await page.getByRole("tab", { name: "YOUR PRIVACY CHOICES" }).click();
  const page5 = await page5Promise;
  await page.getByRole("tab", { name: "SIGN OUT" }).click();
  await page.getByRole("button", { name: "SIGN OUT OF THIS ACCOUNT" }).click();
  await page.getByRole("button", { name: "Sign out", exact: true }).click();
});
