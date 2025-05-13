// career.js

// Select all toggle buttons
const toggleButtons = document.querySelectorAll('.toggle-btn');

// Add event listeners to each button
toggleButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Get the career detail div associated with the clicked button
    const careerDetail = button.nextElementSibling;
    
    // Toggle the display of the career detail section
    if (careerDetail.style.display === "block") {
      careerDetail.style.display = "none";
      button.textContent = "Read More";
    } else {
      careerDetail.style.display = "block";
      button.textContent = "Read Less";
    }
  });
});
