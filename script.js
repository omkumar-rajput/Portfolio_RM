function sendMessage() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  alert("Thank you, " + name + ". Your message has been received!");
  return false; // Prevent actual form submission
}
