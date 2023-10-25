document.addEventListener('DOMContentLoaded', (event) => {
    // Get the elements
    const moreSkills = document.getElementById("more-skills");
    const showMoreButton = document.getElementById("show-more-button");
  
    // Add click event to the button
    showMoreButton.addEventListener('click', () => {
      if (moreSkills.style.display === "none") {
        moreSkills.style.display = "block";
        showMoreButton.innerHTML = "Show Less";
      } else {
        moreSkills.style.display = "none";
        showMoreButton.innerHTML = "Show More";
      }
    });
  });
  