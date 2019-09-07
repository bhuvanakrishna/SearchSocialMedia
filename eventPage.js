var contextMenuItem = {
    "id": "main",
    "title": "Search In",
    "contexts": ["selection"]
};


var contextMenuSubItem1 = {
    "parentId": "main",
    "title": "Facebook (login required)",
    "contexts": ["selection"],
    "id": "f",
    // "onclick": function (info, tab) {
    //     facebookfunction(info.selectionText);
    // }
};

var contextMenuSubItem2 = {
    "parentId": "main",
    "title": "Twitter",
    "contexts": ["selection"],
    "id": "t",
};

var contextMenuSubItem3 = {
    "parentId": "main",
    "title": "Instagram Tags",
    "contexts": ["selection"],
    "id": "i",
};

var contextMenuSubItem4 = {
    "parentId": "main",
    "title": "Youtube",
    "contexts": ["selection"],
    "id": "y",
};

function facebookfunction(select) {
    var link = "https://www.facebook.com/search/top/?q=" + select;

    window.open(link);
}

function twitterfunction(select) {
    var link = "https://twitter.com/search?q=" + select;

    window.open(link);
}

function instagramfunction(select) {
    var link = "https://www.instagram.com/explore/tags/" + select + "/";

    window.open(link);
}

function youtubefunction(select) {
    var link = "https://www.youtube.com/results?search_query=" + select;

    window.open(link);
}

window.onload = () => {

    chrome.contextMenus.create(contextMenuItem);

    chrome.contextMenus.create(contextMenuSubItem4);

    chrome.contextMenus.create(contextMenuSubItem1);

    chrome.contextMenus.create(contextMenuSubItem2);

    chrome.contextMenus.create(contextMenuSubItem3);

}



chrome.contextMenus.onClicked.addListener(function (xyz) {

    if (xyz.menuItemId == "f") facebookfunction(xyz.selectionText);

    if (xyz.menuItemId == "t") twitterfunction(xyz.selectionText);

    if (xyz.menuItemId == "i") instagramfunction(xyz.selectionText);

    if (xyz.menuItemId == "y") youtubefunction(xyz.selectionText);

    // while using eventpages we cannot call functions directly from the variable
})