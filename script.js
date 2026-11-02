
// MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("show");

    const isOpen = navLinks.classList.contains("show");
    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.textContent = isOpen ? "✕" : "☰";
});

// CLOSE MOBILE MENU AFTER CLICKING A LINK

document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("show");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    });
});

// MENU CATEGORY FILTER

const filterButtons = document.querySelectorAll(".filter-btn");
const foodCards = document.querySelectorAll(".food-card");

filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        // Remove active class from all buttons
        filterButtons.forEach(function (btn) {
            btn.classList.remove("active");
        });

        // Activate clicked button
        button.classList.add("active");

        const category = button.dataset.category;

        // Filter food cards
        foodCards.forEach(function (card) {

            if (
                category === "all" ||
                card.dataset.category === category
            ) {
                card.classList.remove("hidden");
            } else {
                card.classList.add("hidden");
            }

        });

    });

});

// AUTOMATIC FOOTER YEAR

document.getElementById("year").textContent =
    new Date().getFullYear();
