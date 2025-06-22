document.getElementById("subscribeForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const consent = document.getElementById("consent").checked;

  if (!name || !email || !consent) {
    document.getElementById("message").textContent = "Please complete all fields.";
    document.getElementById("message").style.color = "red";
    return;
  }

  document.getElementById("message").textContent = `Thanks for subscribing, ${name}!`;
  document.getElementById("message").style.color = "green";

  document.getElementById("subscribeForm").reset();
});
