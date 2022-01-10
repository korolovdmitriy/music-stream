"use strict";

class TrackData {
  #genre;
  #rate;
  constructor(genre, rate) {
    this.#genre = genre;
    this.#rate = rate;
  }

  get genre() {
    return this.#genre;
  }

  set genre(newGenre) {
    this.#genre = newGenre;
  }

  get rate() {
    return this.#rate;
  }

  set rate(newRate) {
    this.#genre = newRate;
  }
}
