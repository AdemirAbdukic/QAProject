const {PlaywrightTestConfig} = require('@playwright/test');

const config = {
    retries: 1,
    timeout: 10000,
    // reporter: './reporter.js',
    use: {
        baseURL: "https://the-internet.herokuapp.com",
        headless: false,
        viewport: {width: 1280, height: 720},
        video: "off",
        screenshot: "only-on-failure",
        trace: "on"  
    },
    projects: [
        {
            name:'Chrome',
            use: {browserName: 'chromium'}
        },
        {
            name:'Firefox',
            use: {browserName: 'firefox'}
        },
        {
            name:'Webkit',
            use: {browserName: 'webkit'}
        }
    ]
}

module.exports = config;