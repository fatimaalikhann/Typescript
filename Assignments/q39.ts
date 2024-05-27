// Album: Write a function called make_album() that builds a Object describing a music album.
//  The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information
//  Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing 
//  the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. 
//  If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function
//   call that includes the number of tracks on an album.



// Define an interface named Album with three properties: artist, title, and an optional tracks property
type user = {
    artist: string;
    title: string;
    tracks?: number;
}

// Define a function named make_album that takes three parameters: artist_name (a string), album_title (a string), and an optional tracks (a number)
// The function returns an object that adheres to the Album interface
function make_album(artist_name: string, album_title: string, tracks?: number): user {
    // Create an object named album with the properties artist and title
    let album: user = {
        artist: artist_name,
        title: album_title
    };

    // If the tracks parameter is defined, add the tracks property to the album object
    if (tracks !== undefined) {
        album.tracks = tracks;
    }

    // Return the album object
    return album;
}

// Call the make_album function to create an album object for "The Beatles" and "Abbey Road"
let album1 = make_album("The Beatles", "Abbey Road");

// Call the make_album function to create an album object for "Pink Floyd" and "The Dark Side of the Moon"
let album2 = make_album("Pink Floyd", "The Dark Side of the Moon");

// Call the make_album function to create an album object for "Nirvana" and "Nevermind"
let album3 = make_album("Nirvana", "Nevermind");

// Print the album objects to the console
console.log(album1);
console.log(album2);
console.log(album3);

// Call the make_album function to create an album object for "Heramandi", "IV" with 5 tracks
let album4 = make_album("Heramandi", "IV", 5);

// Print the album object with tracks to the console
console.log(album4);