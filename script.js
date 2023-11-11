const navBtn = document.getElementById("nav-manu");
const navbar = document.getElementById("navbar");

navBtn.onclick = () => {
  if (navbar.classList.contains("nav-active")) {
    navbar.classList.remove("nav-active");
  } else {
    navbar.classList.add("nav-active");
  }
};
