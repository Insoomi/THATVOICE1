/* =================================================================
   THATVOICE - Main JavaScript File
   ================================================================= */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navigation Toggle
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // Generic Form Submission Handling with Client-Side Feedback
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Simple validation check
      let isValid = true;
      const requiredInputs = form.querySelectorAll('[required]');
      
      requiredInputs.forEach(input => {
        if (!input.value.trim()) {
          isValid = false;
          input.style.borderColor = '#d9534f';
        } else {
          input.style.borderColor = '#ccc';
        }
      });

      if (!isValid) {
        alert('Please fill in all required fields before submitting.');
        return;
      }

      // Display success notice (Frontend only placeholder until backend email service is connected)
      let alertBox = form.querySelector('.form-alert');
      if (!alertBox) {
        alertBox = document.createElement('div');
        alertBox.className = 'form-alert';
        alertBox.style.marginTop = '15px';
        alertBox.style.padding = '12px';
        alertBox.style.backgroundColor = '#dff0d8';
        alertBox.style.color = '#3c763d';
        alertBox.style.borderRadius = '4px';
        form.appendChild(alertBox);
      }
      
      alertBox.textContent = 'Thank you! Your submission has been received successfully.';
      form.reset();
    });
  });
});