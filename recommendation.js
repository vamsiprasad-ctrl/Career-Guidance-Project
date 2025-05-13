const form = document.getElementById("careerForm");
const result = document.getElementById("recommendationResult");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const selectedSubjects = Array.from(
    document.querySelectorAll("input[type='checkbox']:checked")
  ).map((cb) => cb.value);

  let recommendation = "We recommend you explore: ";

  if (selectedSubjects.includes("Coding")) {
    recommendation += "Software Engineering, Web Development, or AI/ML.";
  } else if (selectedSubjects.includes("Science")) {
    recommendation += "Engineering, Medicine, or Research.";
  } else if (selectedSubjects.includes("Commerce")) {
    recommendation += "CA, CS, or B.Com with Finance.";
  } else if (selectedSubjects.includes("Art")) {
    recommendation += "Design, Animation, or Fine Arts.";
  } else {
    recommendation += "General career counseling for personalized guidance.";
  }

  result.style.display = "block";
  result.textContent = recommendation;
});
