export default class Popovers {
  constructor(parentEl, title, text) {
    this.parentEl = parentEl;
    this.title = title;
    this.text = text;
  }

  get htmlElement() {
    return `
    <p class="title-popup">${this.title}</p>
    <p class="text-popup">${this.text}</p>
    `;
  }

  bindToDOM() {
    // console.log(this.title);
    const elPopup = document.createElement('div');
    elPopup.className = 'popup';
    elPopup.innerHTML = this.htmlElement;
    this.parentEl.appendChild(elPopup);
  }
}