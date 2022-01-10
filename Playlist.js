"use strict";

class Playlist {
  #tracks;
  #title;
  #id;
  constructor(tracks, title, id) {
    this.#tracks = tracks;
    this.#title = title;
    this.#id = id;
  }

  get tracks() {
    return this.#tracks;
  }

  get title() {
    return this.#title;
  }

  get id() {
    return this.#id;
  }

  get currentTrack() {
    return this.#tracks.find((track) => track.state) || null;
  }

  playAll() {
    this.#tracks.forEach((track) => track.play());
  }

  addTrack(track) {
    this.#tracks.push(track);
  }

  findTrackById(id) {
    return this.#tracks.find((track) => track.id === id) || null;
  }

  removeTrackById(id) {
    this.#tracks.forEach((track, index) => {
      if (track.id === id) {
        this.#tracks.splice(index, 1);
      }
    });
  }
}
