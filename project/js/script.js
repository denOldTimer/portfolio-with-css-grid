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

  const modalOpen = (_) => {
    modal.style.visibility = "visible";
    modal.style.animation = "modalFadeIN 500ms forwards";
  };

  const modalClose = (_) => {
    //modal.style.visibility = "hidden";
    modal.removeEventListener("animationend", modalClose);
  };

  const closeBtn = modal.firstElementChild;

  closeBtn.addEventListener("click", () => {
    modal.style.animation = "modalFadeOUT 500ms forwards";
    modal.addEventListener("animationend", modalClose);
  });

  //The esc-key abort functionality
  document.addEventListener("keydown", (e) => {
    console.log(e.key);
    if (!e.key === "Escape") return;
    modal.style.animation = "modalFadeOUT 500ms forwards";
    modal.addEventListener("animationend", modalClose);
  });

  modalOpen();
});
