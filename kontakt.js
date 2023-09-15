function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return emailRegex.test(email);
  }
  
  // Function to display validation error messages
  function displayError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
  }
  
  // Function to clear validation error messages
  function clearError(elementId) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = '';
  }
  
  // Add an event listener to the email input field for real-time validation
  const emailInput = document.getElementById('email');
  
  emailInput.addEventListener('blur', function () {
    const email = emailInput.value;
    const isValid = validateEmail(email);
  
    if (isValid) {
      clearError('emailError');
    } else {
      displayError('emailError', 'Please enter a valid email address.');
    }
  });
  
  // Add an event listener to the form to prevent submission if the email is not valid
//   const form = document.getElementById('myForm');
  
//   form.addEventListener('submit', function (event) {
//     const email = emailInput.value;
//     const isValid = validateEmail(email);
  
//     if (!isValid) {
//       event.preventDefault(); // Prevent form submission
//       displayError('emailError', 'Please enter a valid email address.');
//     }
//   });       
