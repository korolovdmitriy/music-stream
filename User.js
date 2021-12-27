'use strict'

function User (name, email, password, playlists, track, subscription) {
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
    this.__playlists.map(playlist => playlist.playAll());
};

User.prototype.findPlaylist = function (id) {
    for (var i = 0; i < this.__playlists.length; i++) {
        if (this.__playlists[i].__id === id) {
            return this.__playlists[i];
        };
    };
    return null;
};

User.prototype.addPlaylist = function (playlist) {
    if (!this.findPlaylist(playlist.__id) && this.__subscription.__status) { 
    this.__playlists.push(playlist);
    };   
};

User.prototype.removePlaylistById = function (id) {
    for (var i = 0; i < this.__playlists.length; i++) {
        if (this.__playlists[i].__id === id) {
            this.__playlists.splice(i, 1);
        };
    };
};

User.prototype.findTrackById = function (id) {
    for (var i = 0; i < this.__playlists.length; i++) {
        if (this.__playlists[i].findTrackById(id)) {
            return this.__playlists[i];
        };
    };
    return null;
};

User.prototype.playTrack = function () {
    this.__track.play();
};

User.prototype.addTrackToPlaylist = function (id, track) {
    for (var i = 0; i < this.__playlists.length; i++) {
        if (this.__playlists[i].findTrackById(id)) {
            this.__playlists[i].__tracks.push(track);
            return;
        }
    }
    return null;
};

User.prototype.removeTrackFromPlaylist = function (playlistId, trackId) {
    this.__playlists.map(playlist => {
        if (playlist.findTrackById(playlistId)) {
            playlist.removeTrackById(trackId);
        };
    });
};

User.prototype.changeSubscription = function () {
    this.__subscription.changeStatus();
};