chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status !== "complete") {
    return;
  }
  if (tab.url && tab.url.indexOf("https://feedly.com/i/") >= 0) {
    const message = { type: "addArticleLink" };
    chrome.tabs.sendMessage(tabId, message, null);
  }
});
