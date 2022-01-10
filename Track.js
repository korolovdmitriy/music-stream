'use strict';

function Track (genre, rate, title, id) {
    DataTrack.call(this, genre, rate);
    this.__title = title;
    this.__id = id;
    this.__state = false;
};

Track.prototype = Object.create(DataTrack.prototype);
Track.prototype.constructor = Track;

Track.prototype.getTitle = function () {
    return this.__title;
};
Track.prototype.setTitle = function (newTitle) {
    this.__title = newTitle;
};

Track.prototype.getId = function () {
    return this.__id;
};
Track.prototype.setId = function (newId) {
    this.__id = newId;
};

Track.prototype.getState = function () {
    return this.__state;
};
Track.prototype.play = function () {
    this.__state = true;
};
Track.prototype.stop = function () {
    this.__state = false;
};
