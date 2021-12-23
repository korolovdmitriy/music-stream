var Track = function (data) {
    var { title, id } = data
    DataTrack.call(this, data),
    this.title = title,
    this.id = id;   
    this.state = false;
}

Track.prototype = Object.create(DataTrack.prototype);

Track.prototype.getTitle = function () {
        return this.title;
}
Track.prototype.setGenre = function (newTitle) {
        this.title = newTitle;
}

Track.prototype.getId = function () {
        return this.id;
}
Track.prototype.setId = function (newId) {
        this.id = newId;
}

Track.prototype.play = function () {
    this.state = true;
}
Track.prototype.stop = function () {
    this.state = false;
}
DataTrack.prototype.getState = function () {
        return this.state;
}