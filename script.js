// To save the registered emails
let emails = [];
// Referencing the error text and the email input for future use
let errorText = document.getElementById("error-text");
let emailInput = document.getElementById("email");

document.getElementById("subscribe-btn").addEventListener("click", (event) => {
  // Prevent the form from reloading the page
  event.preventDefault();
  let email = document.getElementById("email").value;

  let isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,3}$/.test(email);

  if (isValidEmail) {
    // Go to next step
    // Check if user already registered
    // You can also use array.filter
    let registered = emails.includes(email);

    if (!registered) {
      // Successful Registration
      emails.push(email);
      // Showing the success popup
      document.getElementById("main").style.display = "none";
      document.getElementById("success").style.display = "block";
    } else {
      // Error behavior
      showError("Already Registered");
    }
  } else {
    // Error behavior
    showError("Invalid Email");
  }
});

// Since the error behavior is being repeated we define it as a function
function showError(msg) {
  errorText.innerText = msg;
  errorText.style.display = "block";
  emailInput.classList.add("email-invalid");
}

// Adding "input" event to the form listener allows you to know if any input was updated
// In this case removing the error when the user writes in the input
document.getElementById("form").addEventListener("input", () => {
  errorText.style.display = "none";
  emailInput.classList.remove("email-invalid");
});

// Instead of adding eventlistener, you can define the function and add "onclick" to the HTML button
const dismiss = (msg) => {
  console.log(msg);
  document.getElementById("success").style.display = "none";
  document.getElementById("main").style.display = "flex";
};
