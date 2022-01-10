"use strict";

class Track extends TrackData {
  #title;
  #id;
  #state;
  constructor({ genre, rate, title, id }) {
    super(genre, rate);
    this.#title = title;
    this.#id = id;
    this.#state = false;
  }

  get title() {
    return this.#title;
  }

  set title(newTitle) {
    this.#title = newTitle;
  }

  get id() {
    return this.#id;
  }

  set id(newId) {
    this.#id = newId;
  }

  get state() {
    return this.#state;
  }

  play() {
    this.#state = true;
  }

  stop() {
    this.#state = false;
  }
}
