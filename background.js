chrome.browserAction.onClicked.addListener(function(tab) {

  chrome.history.search({
      'text': '',              // Return every history item....
      'startTime': 0  // that was accessed less than one week ago.
    },
    function(historyItems) {
        console.log(historyItems);

        r = Math.random() * historyItems.length;
        var url = historyItems[ Math.round(r)]['url'];
        chrome.tabs.create({"url" : url});
      }
     );

});




