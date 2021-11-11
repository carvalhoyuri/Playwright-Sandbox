# Playwright Sandbox
<p align=center>
<img src="https://pbs.twimg.com/profile_images/1318604600677527552/stk8sqYZ_400x400.png" alt="Playwright Logo" width="200"/> 
</p>

<p align=center>⚠️ Work in Progress ⚠️</p>

This repository was made in order to study and explore the functionalities of [Playwright](https://playwright.dev/).  Aiming it's implementation on End-to-End tests.

## Usage

    npm -i -D playwright
    
This installs Playwright and browser binaries for Chromium, Firefox and WebKit. Once installed, you can `require` Playwright in a Node.js script and automate web browser interactions.

To run your tests, assuming that test files are in the `tests` directory.

    npx playwright test
    
Playwright Test just ran a test using Chromium browser, in a headless manner. To use headed browser:

    npx playwright test --headed
