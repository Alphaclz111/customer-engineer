const urlParams = new URLSearchParams(window.location.search);
const customerId = urlParams.get("key1");
const customerEmail = urlParams.get("key2");
const nameDisplay = document.getElementById("nameDisplay");
const emailDisplay = document.getElementById("emailDisplay");

if (customerId !== null && customerEmail !== null) {
  console.log("working with customer");
  nameDisplay.innerText = `Name: ${customerId}`;
  emailDisplay.innerText = `Email: ${customerEmail}`;
}

function handleSubmit(event) {
  event.preventDefault();

  let nameValue = event.target.name.value;
  let emailValue = event.target.email.value;
  const url =
    "https://alphaclz111.github.io/customer-engineer/?key1=" +
    nameValue +
    "&key2=" +
    emailValue;
  window.open(url, "_self");
}
