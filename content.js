console.log("Extension");

const badge = document.createElement("div");

badge.innerText = "Extension Active";

badge.style.position = "fixed";
badge.style.bottom = "10px";
badge.style.right = "10px";
badge.style.background = "black";
badge.style.color = "white";
badge.style.padding = "8px";
badge.style.borderRadius = "8px";
badge.style.zIndex = "999999";

document.body.appendChild(badge);