chrome.action.onClicked.addListener(async tab => {
  const items = await chrome.readingList.query({ url: tab.url });
  if (items.length < 1) {
    chrome.readingList.addEntry({
      title: tab.title,
      url: tab.url,
      hasBeenRead: false
    });
  }
});
