// JavaScript to load the navbar and highlight the active page
document.addEventListener("DOMContentLoaded", () => {
    const footerHTML = `
        <div class="wrap">
            <div class="footer-logo">
                <a href="https://www.1944.in/" rel="home">
                    <img src="https://www.1944.in/wp-content/themes/bonoboz/images/logo.png" alt="1944 The Hocco Kitchen"
                        width="200">
                </a>
            </div>
            <div class="footer-address">
                <p>
                    <strong>Corporate Address</strong><br>
                    HRPL Restaurants Private Limited<br>
                    12th &amp; 13th Floor, Elanza Vertex,<br>
                    Sindhubhavan Road, Bodakdev, Ahmedabad - 380064
                </p>
                <p>Phone: <a href="tel:+918460084600">+91 8460084600</a></p>
                <p>Email: <a href="mailto:letstalk@hocco.in">letstalk@hocco.in</a></p>
                <ul class="social">
                    <li><a href="https://www.facebook.com/1944thehoccokitchen/" target="_blank">
                            <img src="https://www.1944.in/wp-content/themes/bonoboz/images/facebook.svg" alt="facebook">
                        </a></li>
                    <li><a href="https://www.instagram.com/1944thehoccokitchen/" target="_blank">
                            <img src="https://www.1944.in/wp-content/themes/bonoboz/images/instagram.svg" alt="instagram">
                        </a></li>
                </ul>
            </div>
            <div class="footer-bottom clear">
                <ul class="footerlinks">
                    <li><a href="../HTML/About_Us.html">About Us</a></li>
                    <li><a href="../HTML/Store_Locator.html">Store-Locator</a></li>
                    <li><a href="../HTML/Contact_Us.html">Contact Us</a></li>
                </ul>
                <div class="site-info">© 2025 Copyright HRPL RESTAURANTS PRIVATE LIMITED All Rights Reserved.</div>
            </div>
        </div>
      `;

    // Insert the navbar into the placeholder
    document.getElementById("colophon").innerHTML = footerHTML;
});