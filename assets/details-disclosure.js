class DetailsDisclosure extends HTMLElement {
  constructor() {
    super();
    this.mainDetailsToggle = this.querySelector('details');

    this.addEventListener('mouseenter', this.onMouseEnter);
    this.addEventListener('mouseleave', this.onFocusOut.bind(this));
    this.mainDetailsToggle.addEventListener('focusout', this.onFocusOut.bind(this));
  }

  onMouseEnter(event) {
    this.mainDetailsToggle.setAttribute('open', "")

    const summaryElement = openDetailsElement.querySelector('summary');
    openDetailsElement.removeAttribute('open');
    summaryElement.focus();
  }

  onFocusOut() {
    setTimeout(() => {
      if (!this.contains(document.activeElement)) this.close();
    })
  }

  close() {
    this.mainDetailsToggle.removeAttribute('open')
  }
}

customElements.define('details-disclosure', DetailsDisclosure);
