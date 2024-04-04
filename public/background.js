chrome.action.onClicked.addListener((tab) => {
    chrome.tabs.create({ url: "https://base-woad.vercel.app/sign-in" });
});