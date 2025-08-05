document.getElementById("registrationForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let isValid = true;

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const age = document.getElementById("age");
  const eventType = document.getElementById("eventType");
  const terms = document.getElementById("terms");

  // Reset error messages
  document.querySelectorAll(".error").forEach(el => el.textContent = '');
  document.querySelectorAll("input, select").forEach(el => el.classList.remove("invalid"));

  // Full Name Validation
  if (!/^[a-zA-Z\s]+$/.test(name.value)) {
    document.getElementById("nameError").textContent = "Please enter a valid name.";
    name.classList.add("invalid");
    isValid = false;
  }

  // Email Validation
  if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.value)) {
    document.getElementById("emailError").textContent = "Invalid email format.";
    email.classList.add("invalid");
    isValid = false;
  }

  // Phone Validation
  if (!/^\d{10}$/.test(phone.value)) {
    document.getElementById("phoneError").textContent = "Phone must be 10 digits.";
    phone.classList.add("invalid");
    isValid = false;
  }

  // Age Validation
  if (parseInt(age.value) < 18 || age.value === "") {
    document.getElementById("ageError").textContent = "Age must be 18 or older.";
    age.classList.add("invalid");
    isValid = false;
  }

  // Event Type
  if (eventType.value === "") {
    document.getElementById("eventError").textContent = "Please select an event type.";
    eventType.classList.add("invalid");
    isValid = false;
  }

  // Terms and Conditions
  if (!terms.checked) {
    document.getElementById("termsError").textContent = "You must accept the terms.";
    isValid = false;
  }

  // Submit if valid
  if (isValid) {
    alert("Registration successful!");
    document.getElementById("registrationForm").reset();
  }
});
