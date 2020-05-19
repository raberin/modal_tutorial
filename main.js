// Get modal element
let modal = document.getElementById("simpleModal");
// Get open modal button
let modalBtn = document.getElementById("modalBtn");
// Get close button
// This gets a collection -- Array specify what index
let closeBtn = document.getElementsByClassName("closeBtn")[0];

// Function to open modal
let openModal = () => {
  modal.style.display = "block";
};

// Function to close modal
let closeModal = () => {
  modal.style.display = "none";
};

// Function to close modal if outside click
let outsideClick = (event) => {
  if (event.target == modal) closeModal();
};

// Listen for a open click
modalBtn.addEventListener("click", openModal);
// Listen for a close click
closeBtn.addEventListener("click", closeModal);
// Outisde click
window.addEventListener("click", outsideClick);
