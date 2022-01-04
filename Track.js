'use strict';

class Track extends TrackData {
    #title;
    #id;
    #state;
    constructor({ genre, rate, title, id }) {
        super(genre, rate);
        this.#title = title;
        this.#id = id;
        this.#state = false;
    }

    get title() {
        return this.#title;
    }

    set title(newTitle) {
        this.#title = newTitle;
    }

    get id() {
        return this.#id;
    }

    set id(newId) {
        this.#id = newId;
    }

    get state() {
        return this.#state;
    }

    play() {
        this.#state = true;
    }

    stop() {
        this.#state = false;
    }

}



//=========================================================
// function Track (genre, rate, title, id) {
//     DataTrack.call(this, genre, rate);
//     this.__title = title;
//     this.__id = id;
//     this.__state = false;
// };

// Track.prototype = Object.create(DataTrack.prototype);
// Track.prototype.constructor = Track;

// Track.prototype.getTitle = function () {
//     return this.__title;
// };
// Track.prototype.setTitle = function (newTitle) {
//     this.__title = newTitle;
// };

// Track.prototype.getId = function () {
//     return this.__id;
// };
// Track.prototype.setId = function (newId) {
//     this.__id = newId;
// };

// Track.prototype.getState = function () {
//     return this.__state;
// };
// Track.prototype.play = function () {
//     this.__state = true;
// };
// Track.prototype.stop = function () {
//     this.__state = false;
// };
