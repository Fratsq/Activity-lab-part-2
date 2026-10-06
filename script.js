<<<<<<< HEAD
// ========================================
// 1. WELCOME MESSAGE
// ========================================

const helloButton = document.getElementById("helloButton");
const welcomeMessage = document.getElementById("welcomeMessage");

helloButton.addEventListener("click", function () {

    welcomeMessage.textContent =
        "Hello! Thank you for visiting my personal website. I hope you enjoy exploring my portfolio!";

});


// ========================================
// 2. SHOW / HIDE ABOUT ME
// ========================================

const aboutButton = document.getElementById("aboutButton");
const moreAbout = document.getElementById("moreAbout");

aboutButton.addEventListener("click", function () {

    if (moreAbout.classList.contains("hidden")) {

        moreAbout.classList.remove("hidden");
        aboutButton.textContent = "Read Less";

    } else {

        moreAbout.classList.add("hidden");
        aboutButton.textContent = "Read More";

    }

});


// ========================================
// 3. CHANGE THEME
// ========================================

const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {

        themeButton.textContent = "Light Theme";

    } else {

        themeButton.textContent = "Dark Theme";

    }

});


// ========================================
// 4. DISPLAY CURRENT DATE AND TIME
// ========================================

function updateDateTime() {

    const now = new Date();

    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    };

    const date = now.toLocaleDateString("en-US", options);

    const time = now.toLocaleTimeString("en-US");

    document.getElementById("dateTime").textContent =
        date + " | " + time;

}

// Update immediately
updateDateTime();

// Update every second
setInterval(updateDateTime, 1000);


// ========================================
// 5. INTERACTIVE CONTACT FORM
// ========================================

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {

    // Prevent the page from refreshing
    event.preventDefault();

    const name = document.getElementById("name").value;

    formMessage.textContent =
        "Thank you, " + name + "! Your message has been received.";

    // Clear the form
    contactForm.reset();

});
=======
// ========================================
// 1. SIDEBAR NAVIGATION (one page at a time)
// ========================================

const pages = document.querySelectorAll(".page");
const navLinks = document.querySelectorAll(".nav-link");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const menuButton = document.getElementById("menuButton");

function showPage(id) {

    // If the link does not match a page, go back to Home
    if (!document.getElementById(id)) {
        id = "home";
    }

    pages.forEach(function (page) {
        page.classList.toggle("active", page.id === id);
    });

    navLinks.forEach(function (link) {
        const isActive = link.dataset.page === id;
        link.classList.toggle("active", isActive);

        if (isActive) {
            link.setAttribute("aria-current", "page");
        } else {
            link.removeAttribute("aria-current");
        }
    });

    window.scrollTo(0, 0);
    closeMenu();

}

// Works with the browser's back/forward buttons too
window.addEventListener("hashchange", function () {
    showPage(location.hash.slice(1));
});

// Show the right page when the site first loads
showPage(location.hash.slice(1) || "home");


// ========================================
// 2. MOBILE MENU
// ========================================

function openMenu() {
    sidebar.classList.add("open");
    overlay.classList.add("show");
    menuButton.setAttribute("aria-expanded", "true");
}

function closeMenu() {
    sidebar.classList.remove("open");
    overlay.classList.remove("show");
    menuButton.setAttribute("aria-expanded", "false");
}

menuButton.addEventListener("click", openMenu);
overlay.addEventListener("click", closeMenu);

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeMenu();
    }
});


// ========================================
// 3. WELCOME MESSAGE
// ========================================

const helloButton = document.getElementById("helloButton");
const welcomeMessage = document.getElementById("welcomeMessage");

helloButton.addEventListener("click", function () {

    welcomeMessage.textContent =
        "Hello! Thank you for visiting my personal website. I hope you enjoy exploring my portfolio!";

});


// ========================================
// 4. SHOW / HIDE ABOUT ME
// ========================================

const aboutButton = document.getElementById("aboutButton");
const moreAbout = document.getElementById("moreAbout");

aboutButton.addEventListener("click", function () {

    if (moreAbout.classList.contains("hidden")) {

        moreAbout.classList.remove("hidden");
        aboutButton.textContent = "Read Less";

    } else {

        moreAbout.classList.add("hidden");
        aboutButton.textContent = "Read More";

    }

});


// ========================================
// 5. CHANGE THEME (remembered next visit)
// ========================================

const themeButton = document.getElementById("themeButton");

function applyTheme(isDark) {

    document.body.classList.toggle("dark-theme", isDark);

    // The button shows the theme you will switch TO
    themeButton.textContent = isDark ? "Light mode" : "Dark mode";

}

// Load saved theme
let savedTheme = null;
try {
    savedTheme = localStorage.getItem("theme");
} catch (error) {
    // Storage not available, use the default theme
}

applyTheme(savedTheme === "dark");

themeButton.addEventListener("click", function () {

    const isDark = !document.body.classList.contains("dark-theme");

    applyTheme(isDark);

    try {
        localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch (error) {
        // Ignore if storage is not available
    }

});


// ========================================
// 6. DISPLAY CURRENT DATE AND TIME
// ========================================

function updateDateTime() {

    const now = new Date();

    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    };

    const date = now.toLocaleDateString("en-US", options);

    const time = now.toLocaleTimeString("en-US");

    document.getElementById("dateTime").textContent =
        date + " | " + time;

}

// Update immediately
updateDateTime();

// Update every second
setInterval(updateDateTime, 1000);


// ========================================
// 7. INTERACTIVE CONTACT FORM
// ========================================

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {

    // Prevent the page from refreshing
    event.preventDefault();

    const name = document.getElementById("name").value;

    formMessage.textContent =
        "Thank you, " + name + "! Your message has been received.";

    // Clear the form
    contactForm.reset();

});
>>>>>>> 81ec1c5 (initial commit)
