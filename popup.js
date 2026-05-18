const btn = document.getElementById("btn");
const output = document.getElementById("output");

btn.addEventListener("click", async () => {

const [tab] = await chrome.tabs.query({
    active: true,
    currentWindow: true
});

output.innerText = `Current URL:

${tab.url}`;

});