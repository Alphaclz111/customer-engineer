const urlParams = new URLSearchParams(window.location.search);
const customerId = urlParams.get("key1");
const customerEmail = urlParams.get("key2");
const nameDisplay = document.getElementById("nameDisplay");
const emailDisplay = document.getElementById("emailDisplay");

(function (a, b, c, d, e, f, g) {
  e["ire_o"] = c;
  e[c] =
    e[c] ||
    function () {
      (e[c].a = e[c].a || []).push(arguments);
    };
  f = d.createElement(b);
  g = d.getElementsByTagName(b)[0];
  f.async = 1;
  f.src = a;
  g.parentNode.insertBefore(f, g);
})(
  "https://utt.impactcdn.com/A2788006-de3d-4011-a57c-c4737e79de0365535.js",
  "script",
  "ire",
  document,
  window
);
ire("identify", { customerid: customerId, customeremail: customerEmail });

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
