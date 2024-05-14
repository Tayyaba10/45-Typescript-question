//Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.

//write a function

function make_album(artistName : string, albumTitle : string, track? : number) {
    let album : { artist: string , title: string , track? : number
    } = {
        artist : artistName,
        title : albumTitle
    }
    if (track !== undefined){
        album.track = track
    }
    return album;
}

//call the function with three different variable value
let album1 = make_album ("Junaid Jamshed","Meri ulfat madine sai")

let album2 = make_album ("Abdul habib attari","Mein tou panjtan ka ghulam hn")

let album3 = make_album ("Owais Qadri","Ya nabi")

//print value of object
console.log(album1);

console.log(album2);

console.log(album3);




