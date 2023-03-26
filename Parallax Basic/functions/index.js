let sky = document.getElementById("sky");
let mountain_behind = document.getElementById("mountain_behind");
let text = document.getElementById("text");
let btn = document.getElementById("btn");
let mountain_front = document.getElementById("mountain_front");
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
  const value = window.scrollY;
  sky.style.left = value * 0.25 + "px";
  mountain_behind.style.top = value * 0.5 + "px";
  text.style.marginRight = value * 4 + "px";
  text.style.marginTop = value * 1.5 + "px";
  btn.style.marginTop = value * 1.5 + "px";
 header.style.top = value * 0.7 + "px";
});
