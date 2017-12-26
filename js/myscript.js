// alert(document.domain); 
chrome.runtime.sendMessage(document.getElementsByTagName('title')[0].innerText);