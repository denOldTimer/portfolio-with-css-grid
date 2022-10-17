const toggleBtn = document.querySelector(".icon");
const nav = document.querySelector("nav");
const menu = document.querySelector(".menu");

toggleBtn.addEventListener("click", () => {
  // console.log("click");
  nav.style.transition = "transform 250ms ease-in-out";
  document.body.classList.toggle("nav-is-open");
});

menu.addEventListener("click", () => {
  nav.style.transition = "0ms";
  document.body.classList.remove("nav-is-open");
});
