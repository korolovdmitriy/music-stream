'use strict';

function DataTrack (genre, rate) {
        this.__genre = genre;
        this.__rate = rate;
}

DataTrack.prototype.getGenre = function () {
        return this.__genre;
};
DataTrack.prototype.setGenre = function (newGenre) {
        this.__genre = newGenre;
};

DataTrack.prototype.getRate = function () {
        return this.__rate;
};
DataTrack.prototype.setGenre = function (newRate) {
        this.__genre = newRate;
};




