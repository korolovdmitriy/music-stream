'use strict';

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

    playAll() {
    this.#tracks.forEach(track => track.play());
    }
    
    currentTrack() {
        return this.#tracks.find(track => track.state) || null;
    }

    addTrack(track) {
        this.#tracks.push(track);
    }
    
    findTrackById(id) {
        return this.#tracks.find(track => track.id === id) || null;
    } 

    removeTrackById(id) {
        this.#tracks.forEach((track, index) => {
            if (track.id === id) {
                this.#tracks.splice(index, 1);
            }
        });        
    }
    
}





// =========================================================
// function Playlist (tracks, title, id) {
//     this.__tracks = tracks;
//     this.__title = title;
//     this.__id = id;
// }

// Playlist.prototype.getTracks = function () {
//     return this.__tracks;
// };

// Playlist.prototype.getTitle = function () {
//     return this.__title;
// };

// Playlist.prototype.getId = function () {
//     return this.__id;
// };

// Playlist.prototype.playAll = function () {
//     this.__tracks.forEach(function (track) {
//         track.play();
//     });
// };

// Playlist.prototype.currentTrack = function () {
//     for (var i = 0; i < this.__tracks.length; i++) {
//         if (this.__tracks[i].getState()) {
//             return this.__tracks[i].getId();
//         }
//     };
// };

// Playlist.prototype.addTrack = function (track) {
//     this.__tracks.push(track);
// };

// Playlist.prototype.findTrackById = function (id) {
//     for (var i = 0; i < this.__tracks.length; i++) {
//         if (this.__tracks[i].getId() === id) {
//            return this.__tracks[i];
//         }
//     };
//     return null;
// };

// Playlist.prototype.removeTrackById = function (id) {
//     for (var i = 0; i < this.__tracks.length; i++) {
//         if (this.__tracks[i].getId() === id) {
//             this.__tracks.splice(i, 1);
//         }
//     };
// };

