class Componer {
  component;
  ready;
  #readyCallback;
  constructor() {
    this.ready = new Promise(resolve => this.#readyCallback = resolve);
  }

  _triggerReady() {
    console.log("Componer Ready!");
    this.#readyCallback();
  }
}

window.componer = new Componer();
