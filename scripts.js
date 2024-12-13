document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".slider img");
    let currentIndex = 0;

    function showNextImage() {
        images[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add("active");
    }

    images[0].classList.add("active"); // Show the first image initially
    setInterval(showNextImage, 3000); // Change image every 3 seconds
});



    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent actual form submission
        const confirmation = confirm("Your booking has been successfully confirmed! Do you want to see more offers?");
        if (confirmation) {
            window.location.href = "offers.html"; // Redirect to an offers page (optional)
        } else {
            alert("Thank you for booking with us!");
        }
    });

