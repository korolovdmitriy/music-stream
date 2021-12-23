var DataTrack = function (data) {
    var { genre, rate } = data;
    this.genre = genre;
    this.rate = rate;
}

DataTrack.prototype.getGenre = function () {
        return this.genre;
}
DataTrack.prototype.setGenre = function (newGenre) {
        this.genre = newGenre;
}

DataTrack.prototype.getRate = function () {
        return this.rate;
}
DataTrack.prototype.setGenre = function (newRate) {
        this.genre = newRate;
}




