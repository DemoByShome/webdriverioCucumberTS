import { Given, Then } from '@wdio/cucumber-framework';
import { browser } from '@wdio/globals';

Given(`I load the browser and open the {string}`, async function(url: string) {
    await browser.url(url)
    await browser.maximizeWindow()
});

Then(`I should be able to see {string}`, async function(headerString: string) {
    const header = await $('.heading')    
    expect(await header.getText()).toEqual(headerString)
});