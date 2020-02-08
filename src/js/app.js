import Popovers from './Popovers.js';

const elementButton = document.getElementById('button');
const addPopup = new Popovers(document.body, 'Popover title', 'And here`s some amazing content. It`s very engaging. Right?');
addPopup.bindToDOM();

elementButton.addEventListener('click', () => {
  addPopup.positionPopup(elementButton);
});


// const validateCardForm = new Popovers(document.body);
// validateCardForm.bindToDOM();
