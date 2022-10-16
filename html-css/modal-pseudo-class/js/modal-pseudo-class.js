/* Get the dialog */
const dialog = document.querySelector("dialog");

/* The Button to opens the dialog */
const openButton = document.querySelector(".openButton");

/* The Button to closes the dialog */
const closeButton = document.querySelector(".closeButton");

/* Open The dialog */
openButton.onclick = function () {
  dialog.showModal();
};

/* Close the dialog */
closeButton.onclick = function () {
  dialog.close();
};
