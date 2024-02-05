// Define constants for better readability and easier modification
const SLIDE_INTERVAL = 3000; // Interval between slides in milliseconds
let slideIndex = 0; // Initialize slide index

// Function to display the slides
function showSlides() {
  // Get all slide elements
  const slides = document.querySelectorAll('.slide');
  
  // Hide all slides
  slides.forEach(slide => {
    slide.style.display = 'none';
  });
  
  // Increment slide index
  slideIndex++;
  
  // Reset slide index if it exceeds the number of slides
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  
  // Display the current slide
  slides[slideIndex - 1].style.display = 'block';
  
  // Set timeout for next slide
  setTimeout(showSlides, SLIDE_INTERVAL);
}

// Function to navigate to the previous or next slide
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Start the slideshow when the page loads
window.onload = function() {
  showSlides(); // Start the slideshow
};

// Add event listeners for previous and next buttons
document.querySelector('.prev').addEventListener('click', function() {
  plusSlides(-1); // Navigate to the previous slide
});

document.querySelector('.next').addEventListener('click', function() {
  plusSlides(1); // Navigate to the next slide
});

