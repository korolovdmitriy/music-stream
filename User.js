"use strict";

class User {
  #name;
  #email;
  #password;
  #playlists;
  #subscription;

  constructor(name, email, password, playlists, subscription) {
    this.#name = name;
    this.#email = email;
    this.#password = password;
    this.#playlists = playlists;
    this.#subscription = subscription;
  }

  get name() {
    return this.#name;
  }

  get email() {
    return this.#email;
  }

  set email(newEmail) {
    this.#email = newEmail;
  }

  get password() {
    return this.#password;
  }

  set password(newPassword) {
    this.#password = newPassword;
  }

  get subscription() {
    return this.#subscription.status;
  }

  playAll() {
    this.#playlists.forEach((playlist) => playlist.playAll());
  }

  findPlaylist(id) {
    return this.#playlists.find((playlist) => playlist.id === id) || null;
  }

  addPlaylist(playlist) {
    if (!this.findPlaylist(playlist.id) && this.#subscription.status) {
      this.#playlists.push(playlist);
    }
  }

  addPlaylistAsync(playlist, callback) {
    setTimeout(
      function () {
        let error;
        if (!this.findPlaylist(playlist.id) && this.#subscription.status) {
          this.#playlists.push(playlist);
        } else {
          error = new Error("Something went wrong :(");
        }
        callback(error);
      }.bind(this),
      1000
    );
  }

  addPlaylistAsyncAsync(playlist) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!this.findPlaylist(playlist.id) && this.subscription) {
          this.#playlists.push(playlist);
          resolve("Playlist added");
        } else {
          reject(new Error("Something went wrong :("));
        }
      }, 1000);
    });
  }

  removePlaylistById(id) {
    this.#playlists.forEach((playlist, index) => {
      if (playlist.id === id) {
        this.#playlists.splice(index, 1);
      }
    });
  }

  findTrackById(id) {
    const playlist = this.#playlists.find((playlist) =>
      playlist.findTrackById(id)
    );
    if (playlist) {
      return playlist.findTrackById(id);
    }
    return null;
  }

  addTrackToPlaylist(playlistId, track) {
    const playlist = this.findPlaylist(playlistId);
    if (playlist) {
      playlist.addTrack(track);
    }
  }

  removeTrackFromPlaylist(playlistId, trackId) {
    const playlist = this.findPlaylist(playlistId);
    if (playlist) {
      playlist.removeTrackById(trackId);
    }
  }

  changeSubscription() {
    this.#subscription.changeStatus();
  }
}
