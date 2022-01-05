'use strict';

// const TrackData01 = new TrackData({genre: 'Techno', rate: 5});
// console.log(TrackData01.genre);

const Track01 = new Track({genre: 'Techno', rate: 5, title: 'Max Cooper - Spike', id: 1});
const Track02 = new Track({genre: 'Melodic House', rate: 6, title: 'ARTBAT - Horizon', id: 2});
const Track03 = new Track({genre: 'Deep House', rate: 7, title: 'Anyma - Walking', id: 3});
const Track04 = new Track({genre: 'House', rate: 5, title: 'track 04', id: 4});
const Track05 = new Track({genre: 'House', rate: 4, title: 'track 05', id: 5});
// console.log(Track01);
const UserSubscription = new Subscription();

const Playlist01 = new Playlist([Track01, Track02, Track03], 'First playlist', 1);
const Playlist02 = new Playlist([Track01, Track03, Track04, Track05], 'Second playlist', 2);
const Playlist03 = new Playlist([Track03, Track04, Track05], 'Third playlist', 3);
const Playlist04 = new Playlist([Track03, Track04, Track05], 'Fourth playlist', 4);
const User01 = new User ('User name', 'User email', 'password', [Playlist01, Playlist02, Playlist03], UserSubscription);

// User01.changeSubscription();
// console.log(User01);

// console.log(Playlist01);

// Track02.play();

// console.log(Playlist01.currentTrack());
// console.log(Playlist01.findTrackById(2));

// Playlist01.removeTrackById(2);
// console.log(Playlist01);

// console.log(User01.findPlaylist(10));

// UserSubscription.changeStatus();

// User01.addPlaylist(Playlist04);
// console.log(User01);

// User01.removePlaylistById(2);
// console.log(User01);

// console.log(User01.findTrackById(2));

// User01.addTrackToPlaylist(2, Track01)
// console.log(User01);

// User01.removeTrackFromPlaylist(1, 1);
// console.log(User01);

// ================================================================================
// var Track01 = new Track('Techno', 5, 'Max Cooper - Spike', 1);
// var Track02 = new Track('Melodic House', 6, 'ARTBAT - Horizon', 2);
// var Track03 = new Track('Deep House', 7, 'Anyma - Walking', 3);
// var Track04 = new Track('House', 7, 'track 04', 4);
// var Track05 = new Track('House', 7, 'track 05', 5);

// var Subscription = new Subscription();

// var Playlist01 = new Playlist([Track01, Track02, Track03], 'First playlist', 1);
// var Playlist02 = new Playlist([Track01, Track03, Track04, Track05], 'Second playlist', 2);
// var Playlist03 = new Playlist([Track03, Track04, Track05], 'Third playlist', 3);
// var Playlist04 = new Playlist([Track03, Track04, Track05], 'Fourth playlist', 4);

// var User = new User ('User name', 'User email', 'password', [Playlist01, Playlist02, Playlist03], Track04, Subscription);

// console.log(User);
// console.log(Playlist01);

// console.log(Track01.getId());

// Playlist01.playAll();
// Track02.play();
// console.log(Playlist01.currentTrack());;

// Playlist01.addTrack(Track02);
// console.log(Playlist01);

// Playlist01.removeTrackById(2);
// console.log(Playlist01);

// console.log(Playlist01.findTrackById(2));

// User.playAll();
// console.log(User);

// console.log(User.findPlaylist(1));
// Subscription.changeStatus();

// User.addPlaylist(Playlist04);
// User.removePlaylistById(2);
// User.playTrack()

// User.addTrackToPlaylist(2, Track01)
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

// console.log(User.findTrackById(2));

// console.log(User);


// User.changeSubscription();



User01.changeSubscription();
console.log(User01);
console.log(User01.subscription);

// User01.addPlaylistAsync (Playlist01, function (errorSubscription, data) {
//     if (errorSubscription) {
//         console.error(errorSubscription);
//     } else {
//         console.log(data);
//         User01.addPlaylistAsync (Playlist02, function (errorSubscription, data) {
//             if (errorSubscription) {
//                 console.error(errorSubscription);
//             } else {
//                 console.log(data);
//                 User01.addPlaylistAsync (Playlist03, function (errorSubscription, data) {
//                 if (errorSubscription) {
//                     console.error(errorSubscription);
//                 } else {
//                        console.log(data);
//                 };
//             }.bind(User01));
//             };
//     }.bind(User01));
//     };
// }.bind(User01));


User01.addPlaylistAsync (Playlist01, function (errorSubscription, data) {
    if (errorSubscription) {
        console.error(errorSubscription);
    } else {
        console.log(data);
        User01.addPlaylistAsync (Playlist02, function (errorSubscription, data) {
    if (errorSubscription) {
        console.error(errorSubscription);
    } else {
        console.log(data);
        User01.addPlaylistAsync (Playlist03, function (errorSubscription, data) {
    if (errorSubscription) {
        console.error(errorSubscription);
    } else {
        console.log(data);
    };
});
    };
});
    };
});







