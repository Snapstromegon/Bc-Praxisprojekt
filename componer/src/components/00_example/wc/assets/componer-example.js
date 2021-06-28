const template = document.createElement("template");
template.innerHTML = `
  <h1>Hello World</h1>
`;

class ComponerExample extends HTMLElement {
  constructor() {
    super(); // always call super() first in the constructor.
    let shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

console.log("hi")

customElements.define("componer-example", ComponerExample);
