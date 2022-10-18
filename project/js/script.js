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

//NOTE: ---- MODAL FUNCTIONALITY

const portfolioContainer = document.querySelector(".portfolio__items");
portfolioContainer.addEventListener("click", (e) => {
  //console.log(e);
  e.preventDefault();

  const modalToggle = e.target.closest(".portfolio__link");
  //console.log(modalToggle);
  if (!modalToggle) return;

  const modalId = modalToggle.target;
  //console.log(modalId);
  if (modalId === "") return;
  const modal = document.getElementById(modalId);
  if (!modal) return;
  modal.style.display = "block";
});

const closeBtn = document.querySelector(".modal__btn-close");
console.log(closeBtn);
closeBtn.addEventListener("click", () => {
  const modal = closeBtn.parentNode;
  modal.style.display = "none";
});
