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
      const messageTextarea = document.getElementById("message");
  
      firstNameInput.addEventListener("blur", validateFirstName);
      lastNameInput.addEventListener("blur", validateLastName);
      phoneNumberInput.addEventListener("blur", validatePhoneNumber);
      emailInput.addEventListener("blur", validateEmail);
      messageTextarea.addEventListener("blur", validateMessage);
  });

    // Valideringsfunktioner för varje fält
    
    function validateFirstName() {
        const firstNameInput = document.getElementById("firstName");
     

        if (firstNameInput.value === "") {
            displayError("firstNameError", "First name is required");
        } else if (!/^[A-Za-z]+$/.test(firstNameInput.value)) {
            displayError("firstNameError", "First name can only contain letters");
        } else {
            clearError("firstNameError");
        }
    }

    function validateLastName() {
        const lastNameInput = document.getElementById("lastName");
       

        if (lastNameInput.value === "") {
            displayError("lastNameError", "Last name is required");
          } else if (!/^[A-Za-z]+$/.test(lastNameInput.value)) {
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
    const emailInput= document.getElementById("email");

    if (emailInput.value === "") {
        displayError("emailError", "Email is required");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
        displayError("emailError", "Invalid email format");
    } else {
        clearError("emailError");
    }
}

function validateMessage() {
  const messageTextarea = document.getElementById("message");

  if (messageTextarea.value === "") {
      displayError("messageError", "Message is required");
  } else {
      clearError("messageError");
  }
}




