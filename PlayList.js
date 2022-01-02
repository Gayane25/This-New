'use strict';
/*Add: Pushes the passed-through song to the songs array
Play: Plays current song based on array index
Stop: Holds place in array, but calls above stop song prototype function
Next: Sets the next song in the songs array, calling the above play prototype function
Song should take in two arguments, title and artist, which should both be added as properties when the Song constructor function is used.
Play: Sets the song as playing using isPlaying
Stop: Sets the song as not playing (isPlaying = false) */

function Playlist() {
  this.songsArr = [];
  this.songsIndex = 0;
}

Playlist.prototype.add = function (song) {
  this.songsArr.push(song);
};
Playlist.prototype.play = function () {
  return `${this.songsArr[this.songsIndex].title} is playing`;
};
Playlist.prototype.next = function () {
  let left = this.songsArr[this.songsIndex].title;
  this.songsIndex = ++this.songsIndex % this.songsArr.length;
  let right = this.songsArr[this.songsIndex].title;
  return `${left} stopped to play ${right} is starting to play`;
};
Playlist.prototype.stop = function () {
  return ` ${this.songsArr[this.songsIndex].title} stopped`;
};

function Song(title, artist) {
  this.title = title;
  this.artist = artist;
}
const heyJude = new Song('Hey Jude', 'The Beatles');
const jaded = new Song('Jaded', 'Aerosmith');
const player = new Playlist();
player.add(heyJude);
player.add(jaded);
console.log(player.songs);
console.log(player.play());
console.log(player.next());
console.log(player.next());
console.log(player.next());
console.log(player.stop());
