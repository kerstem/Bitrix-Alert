//определяет вкладку с битром в хроме, вырубает автодискард для нее и загружать скрипт

class Background{
    constructor() {
        this.targets = [];
        chrome.runtime.onInstalled.addListener(() => this.onAll());
        chrome.tabs.onUpdated.addListener((tabId) => this.onUpdated(tabId));
        chrome.tabs.onRemoved.addListener((tabId) => this.onRemoved(tabId));
        setInterval(() => this.update(), 60000)
    }
    onUpdated(tabId) {
        chrome.tabs.get(tabId, (tab) => {
            if (tab.url.includes("https://supersmoke.ru/bitrix/admin/sale_order.php") == true) {
                if (this.targets.indexOf(tabId) == -1) {
                    chrome.tabs.update(tabId, { autoDiscardable: false });
                    this.targets.push(tabId);
                    console.log(`Добавил вкладку ${tabId} в цели`);
                    console.log(this.targets)
                }
            }
            else {
                if (this.targets.includes(tabId)) {
                    this.targets.splice(tabId)
                }
            }
        });
    }
    onAll() {
        chrome.tabs.query({}, (tabs) => {
            tabs.forEach((tab) => {
                this.onUpdated(tab.id);
            })
        });
    }
    onRemoved(tabId) {
        if (this.targets.indexOf(tabId) != -1) {
            this.targets.splice(tabId)
        }
    }
    update() {
        console.log('Начал проверку');
        this.targets.forEach((tabId) => {
            chrome.tabs.get((tabId), () => {
                chrome.tabs.reload(tabId);
                chrome.scripting.executeScript({ target: { tabId: tabId }, files: ["/js/main.js"] });
                console.log(`Загрузил скрипт во вкладку ${tabId}`)
            })
        })
    }
}

new Background()