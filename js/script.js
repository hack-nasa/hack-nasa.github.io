const sleep = ms => new Promise(($) => setTimeout($, ms));

class HackNASA extends HTMLElement {
  constructor() {
    super();
  }
  async connectedCallback() {
    this.setText(0);

    for (let i = 1; i <= 100; i++) {
      await sleep(1000);
      this.setText(i);
    }

    this.textContent += `<br />Hacked NASA!`;
  }
  setText(percentage) {
    this.textContent = `Hacking Nasa...<br />${percentage}%`;
  }
}

customElements.define("hack-nasa", HackNASA);
