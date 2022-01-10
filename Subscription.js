"use strict";

class Subscription {
  #status;
  constructor() {
    this.#status = false;
  }

  get status() {
    return this.#status;
  }

  changeStatus() {
    this.#status = !this.#status;
  }
}
