"use strict";

const track01 = new Track({
  genre: "Techno",
  rate: 5,
  title: "Max Cooper - Spike",
  id: 1,
});
const track02 = new Track({
  genre: "Melodic House",
  rate: 6,
  title: "ARTBAT - Horizon",
  id: 2,
});
const track03 = new Track({
  genre: "Deep House",
  rate: 7,
  title: "Anyma - Walking",
  id: 3,
});
const track04 = new Track({
  genre: "House",
  rate: 5,
  title: "track 04",
  id: 4,
});
const track05 = new Track({
  genre: "House",
  rate: 4,
  title: "track 05",
  id: 5,
});

const userSubscription = new Subscription();

const playlist01 = new Playlist(
  [track01, track02, track03],
  "First playlist",
  1
);
const playlist02 = new Playlist(
  [track01, track03, track04, track05],
  "Second playlist",
  2
);
const playlist03 = new Playlist(
  [track03, track04, track05],
  "Third playlist",
  3
);
const playlist04 = new Playlist(
  [track03, track04, track05],
  "Fourth playlist",
  4
);
const playlist05 = new Playlist(
  [track03, track04, track05],
  "Fourth playlist",
  5
);
const user01 = new User(
  "User name",
  "User email",
  "password",
  [playlist01, playlist02, playlist03],
  userSubscription
);

user01.changeSubscription();
// console.log(user01);
// console.log(user01.subscription);

// user01.addPlaylistAsync(playlist04, function (error) {
//   if (error) {
//     console.error(error);
//   } else {
//     console.log("Playlist added!");
//     user01.addPlaylistAsync(playlist02, function (error) {
//       if (error) {
//         console.error(error);
//       } else {
//         console.log("Playlist added!");
//         user01.addPlaylistAsync(playlist03, function (error) {
//           if (error) {
//             console.error(error);
//           } else {
//             console.log("Playlist added!");
//           }
//         });
//       }
//     });
//   }
// });

// user01
//   .addPlaylistAsyncAsync(playlist04)
//   .then((result) => {
//     console.log(result);
//     return user01.addPlaylistAsyncAsync(playlist05);
//   })
//   .then((result) => {
//     console.log(result);
//     return user01.addPlaylistAsyncAsync(playlist01);
//   })
//   .catch((error) => console.error(error));

async function addPlaylistToUser() {
  try {
    const result1 = await user01.addPlaylistAsyncAsync(playlist04);
    console.log(result1);
    const result2 = await user01.addPlaylistAsyncAsync(playlist05);
    console.log(result2);
    const result3 = await user01.addPlaylistAsyncAsync(playlist01);
    console.log(result3);
  } catch (error) {
    console.error(error);
  }
}

addPlaylistToUser();

// ================================================

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
