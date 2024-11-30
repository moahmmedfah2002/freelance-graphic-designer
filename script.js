// Dynamically update expertise and handle button click
document.addEventListener('DOMContentLoaded', () => {
    const expertiseElement = document.getElementById('expertise');
    
  
    // Array of expertise to cycle through
    const expertiseList = ['Web Developer', 'UI/UX Designer', 'Frontend Engineer', 'Creative Technologist'];
    let index = 0;
  
    // Cycle through expertise every 3 seconds
    setInterval(() => {
      index = (index + 1) % expertiseList.length;
      expertiseElement.textContent = expertiseList[index];
    }, 3000);
  
    
  });
  