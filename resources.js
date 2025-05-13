// Select all toggle buttons
const toggleButtons = document.querySelectorAll('.toggle-btn');

// Add event listeners to each button
toggleButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Get the resource detail div associated with the clicked button
    const resourceDetail = button.nextElementSibling;

    // Toggle the display of the resource detail section
    if (resourceDetail.style.display === "block") {
      resourceDetail.style.display = "none";
      button.textContent = "Read More";
    } else {
      resourceDetail.style.display = "block";
      button.textContent = "Read Less";
    }
  });
});
