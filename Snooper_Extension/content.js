window.onload = function(){
    var web = window.location.href;
    var hostname = (new URL(web)).hostname;
    var link;

    if (hostname.includes("www.")) {
        link = hostname.substring(4);
    }
    else {
        link = hostname;
    }

    chrome.storage.sync.set({'value': link}, function(){
        alert("The URL of this page is: " + link + " hostname: " + hostname);
    });
}