// Wait until the entire document is loaded
document.addEventListener("DOMContentLoaded", function () {
    // Injects the same navigation bar HTML into all pages using the 'navbar' div
    document.getElementById("navbar").innerHTML = `
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="events.html">Events</a></li>
                <li><a href="register.html">Register</a></li>
                <li><a href="gallery.html">Gallery</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </nav>
    `;
});