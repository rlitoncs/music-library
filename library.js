const library = {
  tracks: { t01: { id: "t01",
    name: "Code Monkey",
    artist: "Jonathan Coulton",
    album: "Thing a Week Three" },
  t02: { id: "t02",
    name: "Model View Controller",
    artist: "James Dempsey",
    album: "WWDC 2003"},
  t03: { id: "t03",
    name: "Four Thirty-Three",
    artist: "John Cage",
    album: "Woodstock 1952"}
  },
  playlists: { p01: { id: "p01",
    name: "Coding Music",
    tracks: ["t01", "t02"]
  },
  p02: { id: "p02",
    name: "Other Playlist",
    tracks: ["t03"]
  }
  },
  printPlaylists: function() {
    const playlistKeys = Object.keys(this.playlists);
       
    for (let key of playlistKeys) {
      console.log(`${key}: ${this.playlists[key].name} - ${this.playlists[key].tracks.length} tracks`);
    }
  },
  printTracks: function() {
    const trackKeys = Object.keys(this.tracks);

    for (let key of trackKeys) {
      console.log(`${key}: ${this.tracks[key].name} by ${this.tracks[key].artist} (${this.tracks[key].album})`);
    }
  },
  printPlaylist: function(playlistId) {
    const tracksKey = Object.keys(this.tracks);
    const trackList = this.playlists[playlistId].tracks;
            
    console.log(`${playlistId}: ${this.playlists[playlistId].name} - ${trackList.length} tracks`);
          
    for (let key of tracksKey) {
      if (trackList.includes(key)) {
        console.log(`${key}: ${this.tracks[key].name} by ${this.tracks[key].artist} (${this.tracks[key].album})`);
      }
    }
  },
  addTrackToPlaylist: function(trackId, playlistId) {
    this.playlists[playlistId].tracks.push(trackId);
  },
  generateUid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },
  addTrack: function(name, artist, album) {
    const trackID = this.generateUid();
  
    this.tracks[trackID] = {
      id: trackID,
      name: name,
      artist: artist,
      album: album
    };
  },
  addPlaylist: function(name) {
    const playListID = this.generateUid();

    this.playlists[playListID] = {
      id: playListID,
      name: name,
      tracks: []
    };
  },
  printSearchResults: function(query) {
    const tracksKeys = Object.keys(this.tracks);
     
    for (let key of tracksKeys) {
      for (let innerKey in this.tracks[key]) {
        if (this.tracks[key][innerKey].search(new RegExp(query, "i")) !== -1) {
          console.log(`${key}: ${this.tracks[key].name} by ${this.tracks[key].artist} (${this.tracks[key].album})`);
          break;
        }
      }
          
    }

  }



};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
// const printPlaylists = function() {

// };


// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
// const printTracks = function() {

// };


// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// const printPlaylist = function(playlistId) {}

// };


// adds an existing track to an existing playlist
// const addTrackToPlaylist = function(trackId, playlistId) {

// };


// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
// const generateUid = function() {
//   return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
// };


// adds a track to the library
// const addTrack = function(name, artist, album) {

// };


// adds a playlist to the library
// const addPlaylist = function(name) {

// };


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
// const printSearchResults = function(query) {

// };

//TESTING
library.printPlaylists();
library.printTracks();
library.printPlaylist("p01");

console.log("---------------------");

console.log("Playlist 2 BEFORE adding NEW TRACK: ");
library.printPlaylist("p02");
console.log();


library.addTrackToPlaylist("t04", "p02");
console.log("Playlist 2 AFTER adding NEW TRACK: ");
library.printPlaylist("p02");

console.log("---------------------");
console.log("Tracks BEFORE: ");
library.printTracks();
library.addTrack("Rock With You", "Michael Jackson", "Off The Wall");
console.log("\nTracks AFTER: ");
library.printTracks();

console.log("---------------------");
console.log("Playlists BEFORE: ");
library.printPlaylists();
library.addPlaylist("Michael Jackson Playlist");
console.log("\nPlaylists BEFORE: ");
library.printPlaylists();

console.log("---------------------");
let query1 = "thRee";
let query2 = "jackson";
let query3 = " ";
console.log(`Search Query: ${query1}`);
library.printSearchResults(query1);
console.log(`\nSearch Query: ${query2}`);
library.printSearchResults(query2);
console.log(`\nSearch Query: ${query3}`);
library.printSearchResults(query3);