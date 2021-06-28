import {
  PolymerElement,
  html,
} from "https://unpkg.com/@polymer/polymer/polymer-element.js";

// Define the class for a new element called custom-element
class ComponerExample extends PolymerElement {
  static get template() {
    return html` <h1>Hello World</h1> `;
  }
}
// Register the new element with the browser
customElements.define("componer-example", ComponerExample);
