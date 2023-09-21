// function validateEmail(email) {
//     const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//     return emailRegex.test(email);
//   }
  
  
//   // Add an event listener to the email input field for real-time validation
//   const emailInput = document.getElementById('email');
  
//   emailInput.addEventListener('blur', function () {
//     const email = emailInput.value;
//     const isValid = validateEmail(email);
  
//     if (isValid) {
//       clearError('emailError');
//     } else {
//       displayError('emailError', 'Please enter a valid email address.');
//     }
//   });

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

  // Lägg till eventlyssnare när sidan laddas
  document.addEventListener("DOMContentLoaded", function () {
      const firstNameInput = document.getElementById("firstName");
      const lastNameInput = document.getElementById("lastName");
      const phoneNumberInput = document.getElementById("phoneNumber");
      const emailInput = document.getElementById("email");
      const messageInput = document.getElementById("message");
  
      firstNameInput.addEventListener("blur", validateFirstName);
      lastNameInput.addEventListener("blur", validateLastName);
      phoneNumberInput.addEventListener("blur", validatePhoneNumber);
      emailInput.addEventListener("blur", validateEmail);
      messageInput.addEventListener("blur", validateMessage);
  });

    // Valideringsfunktioner för varje fält
    
    function validateFirstName() {
        const firstNameInput = document.getElementById("firstName");
     

        if (firstNameInput.value.trim() === "") {
            displayError("firstNameError", "First name is required");
        } else if (!/^[A-Za-z]+$/.test(firstNameInput.value.trim())) {
            displayError("firstNameError", "First name can only contain letters");
        } else {
            clearError("firstNameError");
        }
    }

    function validateLastName() {
        const lastNameInput = document.getElementById("lastName");
       

        if (lastNameInput.value.trim() === "") {
            displayError("lastNameError", "Last name is required");
          } else if (!/^[A-Za-z]+$/.test(lastNameInput.value.trim())) {
            displayError("lastNameError", "Last name can only contain letters");
        } else {
            clearError("lastNameError");
        }
    }

    function validatePhoneNumber() {
      const phoneNumber = document.getElementById("phoneNumber").value.trim();
    
      if (phoneNumber === "") {
          displayError("phoneNumberError", "Phonenumber is required");
        } else if (!/^\d{1,10}$/.test(phoneNumber)) {
          displayError("phoneNumberError", "Phonenumber must be max 10 digits");
      } else {
          clearError("phoneNumberError");
      }
  }

  function validateEmail() {
    const emailInput = document.getElementById("email");
  

    if (emailInput.value.trim() === "") {
        displayError("emailError", "Email is required");
    } else {
        clearError("emailError");
    }
}

function validateMessage() {
  const messageInput = document.getElementById("message");


  if (messageInput.value.trim() === "") {
      displayError("messageError", "Message is required");
  } else {
      clearError("messageError");
  }
}




