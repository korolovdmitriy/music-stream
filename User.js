"use strict";

function User(name, email, password, playlists, track, subscription) {
  this.__name = name;
  this.__email = email;
  this.__password = password;
  this.__playlists = playlists;
  this.__track = track;
  this.__subscription = subscription;
}

User.prototype.getName = function () {
  return this.__name;
};

User.prototype.getEmail = function () {
  return this.__email;
};
User.prototype.setEmail = function (newEmail) {
  this.__email = newEmail;
};

User.prototype.getPassword = function () {
  this.__password;
};
User.prototype.setPassword = function (newPassword) {
  this.__password = newPassword;
};

User.prototype.getSubscription = function () {
  return this.__subscription;
};

User.prototype.playAll = function () {
  this.__playlists.forEach(function (playlist) {
    playlist.playAll();
  });
};

User.prototype.findPlaylist = function (id) {
  for (var i = 0; i < this.__playlists.length; i++) {
    if (this.__playlists[i].getId() === id) {
      return this.__playlists[i];
    }
  }
  return null;
};

User.prototype.addPlaylist = function (playlist) {
  if (!this.findPlaylist(playlist.getId()) && this.__subscription.getStatus()) {
    this.__playlists.push(playlist);
  }
};

User.prototype.addPlaylistAsync = function (playlist, callback) {
  setTimeout(
    function () {
      var error;
      if (
        !this.findPlaylist(playlist.getId()) &&
        this.__subscription.getStatus()
      ) {
        this.__playlists.push(playlist);
      } else {
        error = new Error("Something went wrong :(");
      }
      callback(error);
    }.bind(this),
    1000
  );
};

User.prototype.removePlaylistById = function (id) {
  for (var i = 0; i < this.__playlists.length; i++) {
    if (this.__playlists[i].getId() === id) {
      this.__playlists.splice(i, 1);
    }
  }
};

User.prototype.findTrackById = function (id) {
  for (var i = 0; i < this.__playlists.length; i++) {
    var track = this.__playlists[i].findTrackById(id);
    if (track) {
      return track;
    }
  }
  return null;
};

User.prototype.addTrackToPlaylist = function (playlistId, track) {
  for (var i = 0; i < this.__playlists.length; i++) {
    if (this.__playlists[i].getId() === playlistId) {
      this.__playlists[i].addTrack(track);
      return;
    }
  }
  return null;
};

User.prototype.removeTrackFromPlaylist = function (playlistId, trackId) {
  this.__playlists.forEach(function (playlist) {
    if (playlist.findTrackById(playlistId)) {
      playlist.removeTrackById(trackId);
    }
  });
};

User.prototype.changeSubscription = function () {
  this.__subscription.changeStatus();
};
