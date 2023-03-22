// (function (a, b, c, d, e, f, g) { e['ire_o'] = c; e[c] = e[c] || function () { (e[c].a = e[c].a || []).push(arguments) }; f = d.createElement(b); g = d.getElementsByTagName(b)[0]; f.async = 1; f.src = a; g.parentNode.insertBefore(f, g); })('https://utt.impactcdn.com/A2788006-de3d-4011-a57c-c4737e79de0365535.js', 'script', 'ire', document, window); ire('identify', { customerid: '' /*INSERT key1*/, customeremail: '' /*INSERT key2*/ });

// function handleSubmit(event) {
//   event.preventDefault();

//   const nameInput = document.getElementById("name");
//   const emailInput = document.getElementById("email");
//   const messageInput = document.getElementById("message");

//   const name = nameInput.value;
//   const email = emailInput.value;
//   const message = messageInput.value;

//   window.location(
//     // `https://alphaclz111.github.io/customer-engineer/key1=${name}&key2=${email}`
//     // `https://alphaclz111.github.io/customer-engineer/?key1=${name}&key2=${email}`
//     `https://localhost:5500/index/?key1=${name}&key2=${email}`
//   );

//   // Do something with the name, email, and message data, such as sending it to a server or displaying it on the page
//   console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);

//   // Display the submitted data in the display container
//   const nameDisplay = document.getElementById("nameDisplay");
//   const emailDisplay = document.getElementById("emailDisplay");

//   nameDisplay.innerText = `Name: ${name}`;
//   emailDisplay.innerText = `Email: ${email}`;

//   (function (a, b, c, d, e, f, g) {
//     e["ire_o"] = c;
//     e[c] =
//       e[c] ||
//       function () {
//         (e[c].a = e[c].a || []).push(arguments);
//       };
//     f = d.createElement(b);
//     g = d.getElementsByTagName(b)[0];
//     f.async = 1;
//     f.src = a;
//     g.parentNode.insertBefore(f, g);
//   })(
//     "https://utt.impactcdn.com/A2788006-de3d-4011-a57c-c4737e79de0365535.js",
//     "script",
//     "ire",
//     document,
//     window
//   );
//   ire("identify", { customerid: name, customeremail: email });

//   // Reset the form after submission
//   event.target.reset();
// }

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
    "http://localhost:5500/index.html?key1=" +
    nameValue +
    "&key2=" +
    emailValue;
  window.open(url, "_self");
}
