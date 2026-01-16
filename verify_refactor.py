import asyncio
from playwright.async_api import async_playwright
import os

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        try:
            print("Navigating to homepage...")
            await page.goto("http://localhost:3000")

            # Wait for initial load
            await page.wait_for_timeout(2000)

            # Set viewport to desktop
            await page.set_viewport_size({"width": 1280, "height": 800})

            # Scroll down slowly to trigger animations
            print("Scrolling to trigger animations...")
            total_height = await page.evaluate("document.body.scrollHeight")
            viewport_height = 800
            current_scroll = 0

            while current_scroll < total_height:
                current_scroll += viewport_height
                await page.mouse.wheel(0, viewport_height)
                await page.wait_for_timeout(500) # Wait for animation to start/finish

            # Scroll back to top or just take full page screenshot now that animations triggered?
            # Actually, `viewport={{ once: true }}` means once triggered, they stay.
            # So scrolling down once should be enough.

            # Wait a bit more for final settle
            await page.wait_for_timeout(1000)

            # Desktop Screenshot
            print("Taking desktop screenshot...")
            await page.screenshot(path="verification_desktop.png", full_page=True)

            # Mobile check
            print("Checking mobile view...")
            page_mobile = await browser.new_page(
                viewport={"width": 375, "height": 667},
                user_agent="Mozilla/5.0 (iPhone; CPU iPhone OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1 Mobile/15E148 Safari/604.1"
            )
            await page_mobile.goto("http://localhost:3000")

            # Scroll mobile
            total_height_mobile = await page_mobile.evaluate("document.body.scrollHeight")
            current_scroll_mobile = 0
            while current_scroll_mobile < total_height_mobile:
                current_scroll_mobile += 600
                await page_mobile.mouse.wheel(0, 600)
                await page_mobile.wait_for_timeout(500)

            await page_mobile.wait_for_timeout(1000)
            print("Taking mobile screenshot...")
            await page_mobile.screenshot(path="verification_mobile.png", full_page=True)

            print("Verification screenshots captured.")

        except Exception as e:
            print(f"Error: {e}")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(run())
