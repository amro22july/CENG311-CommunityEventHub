// Search function for filtering event names in real time
function searchEvents() {
    let input = document.getElementById("search-bar").value.toLowerCase();
    let events = document.querySelectorAll("#event-list li");

    // Show/hide each event based on whether it matches the search input
    events.forEach(event => {
        event.style.display = event.textContent.toLowerCase().includes(input) ? "" : "none";
    });
}

// Add validation to the event registration form
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("eventForm");
    if (form) {
        form.addEventListener("submit", function (event) {
            let name = document.getElementById("name").value.trim();
            let email = document.getElementById("email").value.trim();
            let date = document.getElementById("event-date").value.trim();

            // If any field is empty, prevent submission
            if (!name || !email || !date) {
                alert("Please fill in all fields.");
                event.preventDefault();
            } else {
                alert("✅ Registration successful!");
            }
        });
    }
});