'use strict'

function Playlist (tracks, title, id) {
    this.__tracks = tracks;
    this.__title = title;
    this.__id = id;
}

Playlist.prototype.getTracks = function () {
    return this.__tracks;
};

Playlist.prototype.playAll = function () {
    this.__tracks.map(function (track) {
        track.play();
    });
};

Playlist.prototype.currentTrack = function () {
    for (var i = 0; i < this.__tracks.length; i++) {
        if (this.__tracks[i].getState()) {
            return this.__tracks[i].getId();
        };
    };
};

Playlist.prototype.addTrack = function (track) {
    this.__tracks.push(track);
};

Playlist.prototype.findTrackById = function (id) {
    for (var i = 0; i < this.__tracks.length; i++) {
        if (this.__tracks[i].__id === id) {
           return this.__tracks[i];
        };
    };
    return null;
};

Playlist.prototype.removeTrackById = function (id) {
    for (var i = 0; i < this.__tracks.length; i++) {
        if (this.__tracks[i].__id === id) {
            this.__tracks.splice(i, 1);
        };
    };
};

