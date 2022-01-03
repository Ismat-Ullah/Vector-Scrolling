let glass_container = document.getElementById("self_container");
let myIntro = document.getElementById("myIntro");
let header = document.querySelector("header");
// let snipet1 = document.getElementById("snipet1");
//   let grassy = document.getElementById("grassy");
//   let btn = document.getElementById("btn");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  self_container.style.marginTop = value + 5 + "px";
  myIntro.style.right = value + 1 + "px";
  // snipet1.style.right = value + 1 + "px";
  // header.style.left=value+.3+"px";
  // btn.style.marginTop = value + 1.5 + "px";
});
