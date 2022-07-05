// const puppeteer = require('puppeteer');

// (async () => {
//     try {
//         const browser = await puppeteer.launch({headless: true, executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"});
//         const page = await browser.newPage();
//         await page.goto('http://localhost:5500/');
//         await page.screenshot({path: 'example.png'});

//         await browser.close();
//     } catch (err) {
//         console.log(err);
//     }
// })();

// const { default: percySnapshot } = require("@percy/puppeteer");
// const PercyScript = require("@percy/script");

// PercyScript.run(async (page, percySnapshot) => {
//     await page.goto("http://localhost:5500/");
//     percySnapshot("hompage");
// })

(async () => {
    const puppeteer = require('puppeteer');
    const { percySnapshot } = require('@percy/puppeteer');
    const httpServer = require('http-server');

    const server = httpServer.createServer()
    const PORT = '8000';
    server.listen(PORT);

    const URL= 'http:/localhost:${PORT}/assets';

    const browser = await puppeteer.launch({
        args: ["--no-sandbox", "--headless"],
    });

    const page = await browser.newPage();
    await page.goto('http://localhost/5500', { waitUntil: 'networkidle2' });
    await percySnapshot(page, 'Example Site');

    await page.goto('http://localhost/5500/1', { waitUntil: 'networkidle2' });
    await percySnapshot(page, 'Example Site 1');

    await page.goto('http://localhost/5500/2', { waitUntil: 'networkidle2' });
    await percySnapshot(page, 'Example Site 2');
 
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto('http://localhost/5500', { waitUntil: 'networkidle2' });
//   await percySnapshot(page, 'Example Site');

//   await browser.close();
})();


// // import Percy from '@percy/core'


// // await percy.start()

// // percy.snapshot({
// //     name: 'Snapshot 1',
// //     url: 'http://localhost:5500',
// //     domSnapshot: domSnapshot,
// //     clientInfo: 'my-sdk',
// //     environmentInfo: 'my-lib'
// //   })