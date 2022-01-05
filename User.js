'use strict';

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
        this.#playlists.forEach(playlist => playlist.playAll());
    }

    findPlaylist(id) {
        return this.#playlists.find(playlist => playlist.id === id) || null;
    }

    addPlaylist(playlist) {
        if (!this.findPlaylist(playlist.id) && this.#subscription.status) {
            this.#playlists.push(playlist);
        }
    }

    addPlaylistAsync(playlist, callback) {
        setTimeout(function() {
            let errorSubscription;
            let data;
            if (this.subscription) {
                this.#playlists.push(playlist);
                data = 'Congratulations! Your new playlist has been added to your account!';
            } else {
                errorSubscription = new Error('You are have not Subscription');
            };
            callback(errorSubscription, data);
        }.bind(this), 1000);
    };
    
    removePlaylistById(id) {
        this.#playlists.forEach((playlist, index) => {
            if (playlist.id === id) {
                this.#playlists.splice(index, 1);
            };
        });
    }

    findTrackById(id) {
        const playlist = this.#playlists.find(playlist => playlist.findTrackById(id));
        if (playlist) {
            return playlist.findTrackById(id);
        }
        return null;
    };

    addTrackToPlaylist(playlistId, track) {
        const playlist = this.findPlaylist(playlistId)
        if (playlist) {
            playlist.addTrack(track);
        }
    }

    removeTrackFromPlaylist(playlistId, trackId) {
        const playlist = this.findPlaylist(playlistId);
        if (playlist) {
            playlist.removeTrackById(trackId); 
        }  
    };

    changeSubscription() {
        this.#subscription.changeStatus();
    };
    
}


// ========================================================================
// function User (name, email, password, playlists, track, subscription) {
//     this.__name = name;
//     this.__email = email;
//     this.__password = password;
//     this.__playlists = playlists;
//     this.__track = track;
//     this.__subscription = subscription;
// }

// User.prototype.getName = function () {
//     return this.__name;
// };

// User.prototype.getEmail = function () {
//     return this.__email;
// };
// User.prototype.setEmail = function (newEmail) {
//     this.__email = newEmail;
// };

// User.prototype.getPassword = function () {
//     this.__password;
// };
// User.prototype.setPassword = function (newPassword) {
//     this.__password = newPassword;
// };

// User.prototype.getSubscription = function () {
//     return this.__subscription;
// };

// User.prototype.playAll = function () {
//     this.__playlists.forEach(function (playlist) {
//         playlist.playAll();
//     });
// };

// User.prototype.findPlaylist = function (id) {
//     for (var i = 0; i < this.__playlists.length; i++) {
//         if (this.__playlists[i].getId() === id) {
//             return this.__playlists[i];
//         }
//     };
//     return null;
// };

// // User.prototype.addPlaylist = function (playlist) {
// //     if (!this.findPlaylist(playlist.getId()) && this.__subscription.getStatus()) { 
// //         this.__playlists.push(playlist);
// //     }  
// // };

// User.prototype.removePlaylistById = function (id) {
//     for (var i = 0; i < this.__playlists.length; i++) {
//         if (this.__playlists[i].getId() === id) {
//             this.__playlists.splice(i, 1);
//         }
//     };
// };

// User.prototype.findTrackById = function (id) {
//     for (var i = 0; i < this.__playlists.length; i++) {
//         var track = this.__playlists[i].findTrackById(id);
//         if (track) {
//             return track;
//         }
//     };
//     return null;
// };

// User.prototype.addTrackToPlaylist = function (playlistId, track) {
//     for (var i = 0; i < this.__playlists.length; i++) {
//         if (this.__playlists[i].getId() === playlistId) {
//             this.__playlists[i].addTrack(track);
//             return;
//         }
//     }
//     return null;
// };

// User.prototype.removeTrackFromPlaylist = function (playlistId, trackId) {
//     this.__playlists.forEach(function (playlist) {
//         if (playlist.findTrackById(playlistId)) {
//             playlist.removeTrackById(trackId);
//         }
//     });
// };

// User.prototype.changeSubscription = function () {
//     this.__subscription.changeStatus();
// };

// User.prototype.addPlaylist = function (playlist, callback) {
//     setTimeout(function () {
//             var errorSubscription;
//             var data;
//             if (this.__subscription.getStatus()) {
//                 data = 'Congratulations! Your new playlist has been added to your account!';
//             } else {
//                 errorSubscription = new Error('You are have not Subscription');
//             };
//             callback(errorSubscription, data);
//         }.bind(this), 1000);
// };