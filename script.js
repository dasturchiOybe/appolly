const downloud = document.querySelector(".downloud");
const times = document.querySelector(".times");
const bgModal = document.querySelector(".modalBg");
downloud.addEventListener("click", () => {
  document.querySelector(".modal").style.display = "flex";
  bgModal.classList.remove("hidden");
});
bgModal.addEventListener("click", () => {
  document.querySelector(".modal").style.display = "none";
  bgModal.classList.add("hidden");
  document.querySelector("aside").classList.remove("sur");
});
document.addEventListener("keydown", (e) => {
  if (e.key == "Escape") {
    document.querySelector(".modal").style.display = "none";
    bgModal.classList.add("hidden");
  }
});

const menuOpen = document.querySelector(".bottomNav svg");
const menuClose = document.querySelector("aside img");
menuOpen.addEventListener("click", () => {
  document.querySelector("aside").classList.add("sur");
  bgModal.classList.remove("hidden");
});
menuClose.addEventListener("click", () => {
  document.querySelector("aside").classList.remove("sur");
  bgModal.classList.add("hidden");
});