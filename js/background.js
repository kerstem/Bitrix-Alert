class Background{
    constructor() {
        chrome.runtime.onInstalled.addListener(() => this.tabs());
        chrome.tabs.onUpdated.addListener((tabId) => this.tab(tabId));
    }
    tab(tabId) {
        tab = chrome.tabs.get((tabId) => {
            console.log(tab.url);
            chrome.scripting.executeScript({target: {tabId: tabId},files: ['./alert.js']})
        });
    }
    tabs() {
        chrome.tabs.query({}, (tabs) => {
            tabs.forEach((tab) => {
                this.tab(tab.url);
            })
        });
    }
}

new Background()