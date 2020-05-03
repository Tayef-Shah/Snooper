window.onload = function(){
    chrome.storage.sync.set({'value': window.location.href}, function(){
        alert("The URL of this page is: " + window.location.href);
    });
}