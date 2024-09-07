// Select all tab links and tab contents
let tabLinks = document.querySelectorAll(".tab-links");
let tabContents = document.querySelectorAll(".tab-contents");

// Add click event listener to each tab link
tabLinks.forEach(function (tabLink) {
  tabLink.addEventListener("click", function () {
    // Remove active-link class from all tab links
    tabLinks.forEach((link) => link.classList.remove("active-link"));

    // Remove active-tab class from all tab contents
    tabContents.forEach((content) => content.classList.remove("active-tab"));

    // Add active-link class to the clicked tab link
    tabLink.classList.add("active-link");

    // Show the corresponding tab content
    const targetId = tabLink.getAttribute("data-target");
    document.getElementById(targetId).classList.add("active-tab");
  });
});

let sidemenu = document.getElementById("sidemenu");
let openmenu = document.getElementsByClassName("fa-bars")[0]; // Target the first .fa-bars element
let closemenu = document.getElementsByClassName("fa-xmark")[0]; // Target the first .fa-xmark element

// Event listener for opening the menu
openmenu.addEventListener("click", function () {
  sidemenu.style.right = "0"; // Move the menu to the right (visible)
  // openmenu.style.display = "none"; // Hide the open button
  // closemenu.style.display = "block"; // Show the close button
});

// Event listener for closing the menu
closemenu.addEventListener("click", function () {
  sidemenu.style.right = "-200px"; // Move the menu out of view (hidden)
  // openmenu.style.display = "block"; // Show the open button again
  // closemenu.style.display = "none"; // Hide the close button
});

// Backend: The form data store in google sheet

const scriptURL =
  "https://script.google.com/macros/s/AKfycbyMMgcAcy3QJZfZ6TM3B8a0eyRo1_XRdzpypQWcFx4RSZEqEYGwZ8WWxcBgWZMzQzWo/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message sent successfully";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
