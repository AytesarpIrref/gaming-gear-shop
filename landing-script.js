const navbar = document.querySelector("nav");
window.addEventListener("scroll", function () {
  const distance = window.scrollY;
  if (distance >= 200) {
    navbar.classList.add("bg-dark");
  } else {
    navbar.classList.remove("bg-dark");
  }
  console.log(distance);
});
