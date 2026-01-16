import time
from playwright.sync_api import sync_playwright

def test_chat_widget():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        # Use a mobile-like viewport
        context = browser.new_context(viewport={"width": 375, "height": 667})
        page = context.new_page()

        try:
            print("Navigating to home page...")
            page.goto("http://localhost:3000", wait_until="networkidle")

            # Wait for the chat bubble to appear
            print("Waiting for chat bubble...")
            chat_button = page.wait_for_selector('button[aria-label="Toggle Chat"]')

            # Take screenshot of closed state
            print("Taking screenshot of closed state...")
            page.screenshot(path="verification/chat_closed.png")

            # Click the chat bubble
            print("Clicking chat bubble...")
            chat_button.click()

            # Wait for the chat window to open
            print("Waiting for chat window...")
            page.wait_for_selector('.fixed.bottom-4.right-4.z-50.w-\\[90vw\\]', state="visible")

            # Wait for n8n script to load and render the iframe/content
            # The chat content is inside the container.
            # Since we can't fully load the external script in some environments (if blocked),
            # we check if the container is present and visible.
            # In this environment, external scripts *should* load unless blocked.

            # We'll wait a bit for the script to fetch and render
            time.sleep(3)

            print("Taking screenshot of open state...")
            page.screenshot(path="verification/chat_open.png")

        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    test_chat_widget()
