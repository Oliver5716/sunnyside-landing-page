const toggleButton = document.querySelector(".toggle-menu");
const navbarLinks = document.querySelector(".nav-links");
const hideBottomContainer = document.querySelector(".header-bottom-container");

toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
    hideBottomContainer.classList.toggle("hide-bottom-container");
});
