chrome.tabs.onUpdated.addListener(async function (tabId, changeInfo, tab) {
  if (changeInfo.status !== "complete") {
    return;
  }
  if (tab.url && tab.url.indexOf("https://feedly.com/i/") >= 0) {
    const message = { type: "hoge" };
    try {
      await chrome.tabs.sendMessage(tabId, message, (res) => {
        console.log(res);
      });
    } catch (e) {
      console.log(e);
    }
  }
});
