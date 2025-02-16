// JavaScript to load the navbar and highlight the active page
document.addEventListener("DOMContentLoaded", () => {
    const navbarHTML = `
      <div class="wrap">
        <h1 class="site-title"><a href="Home.html" rel="home">
          <img src="https://www.1944.in/wp-content/themes/bonoboz/images/logo.png"
            alt="1944 The Hocco Kitchen" width="200">
        </a></h1>
        <nav id="site-navigation" class="main-navigation" aria-label="Top Menu">
          <button type="button" id="toggle-menu"><span class="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </span></button>
          <div class="menu-main-container">
            <ul id="menu-main" class="main-menu">
              <li class="menu-item"><a href="About_Us.html">About Us</a></li>
              <li class="menu-item"><a href="Food.html">Food</a></li>
              <li class="menu-item"><a href="Store_Locator.html">Store Locator</a></li>
              <li class="menu-item"><a href="Contact_Us.html">Contact Us</a></li>
            </ul>
          </div>
        </nav>
      </div>
    `;

    // Insert the navbar into the placeholder
    document.getElementById("masthead").innerHTML = navbarHTML;

    // Highlight the active page
    const currentURL = window.location.pathname.toLowerCase();
    const menuItems = document.querySelectorAll("#menu-main a");

    menuItems.forEach((item) => {
        const itemHref = item.getAttribute("href").toLowerCase();

        // Ensure exact match for the active page
        if (currentURL.includes(itemHref)) {
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }
    });

    // Mobile Menu Toggle
    const toggleMenu = document.getElementById("toggle-menu");
    const menuContainer = document.querySelector(".menu-main-container");

    toggleMenu.addEventListener("click", () => {
        menuContainer.classList.toggle("active"); // Show/Hide menu on mobile
    });
});
