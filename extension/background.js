chrome.browserAction.onClicked.addListener(function (tab) { //Fired when User Clicks ICON
 // Inspect whether the place where user clicked matches with our list of URL
        chrome.tabs.executeScript(null, {file: "content.js"}
    , function () { // Execute your code
            console.log("Script Executed .. "); // Notification on Completion
        });
    
});