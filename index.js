'use strict'

var Track01 = new Track('Techno', 5, 'Max Cooper - Spike', 1);
var Track02 = new Track('Melodic House', 6, 'ARTBAT - Horizon', 2);
var Track03 = new Track('Deep House', 7, 'Anyma - Walking', 3);
var Track04 = new Track('House', 7, 'track 04', 4);
var Track05 = new Track('House', 7, 'track 05', 5);

var Subscription = new Subscription();

var Playlist01 = new Playlist([Track01, Track02, Track03], 'First playlist', 1);
var Playlist02 = new Playlist([Track01, Track03, Track04, Track05], 'Second playlist', 2);
var Playlist03 = new Playlist([Track03, Track04, Track05], 'Third playlist', 3);
var Playlist04 = new Playlist([Track03, Track04, Track05], 'Fourth playlist', 4);

var User = new User ('User name', 'User email', 'password', [Playlist01, Playlist02, Playlist03], Track04, Subscription);

console.log(User);
// console.log(Playlist01);

// Playlist01.playAll();
// Track02.play();
// console.log(Playlist.currentTrack());;

// Playlist.addTrack(Track02);
// console.log(Playlist);

// Playlist01.removeTrackById(2);
// console.log(Playlist01);

// console.log(Playlist01.findTrackById(2));

// User.playAll();
// console.log(User);

// console.log(User.findPlaylist(10));

// User.addPlaylist(Playlist04);
// User.removePlaylistById(2);
// User.playTrack()

// User.addTrackToPlaylist(1, Track01)
// console.log(User);

// User.removeTrackFromPlaylist(1, 1);
// console.log(User);

// Subscription.changeStatus();
// console.log(Subscription.setStatus());

// Subscription.changeStatus();
// console.log(Subscription.setStatus());

// User.changeSubscription();
// console.log(User);

// User.changeSubscription();
// User.addPlaylist(Playlist04);

// console.log(User);

console.log(User.findTrackById(50));




