// Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.

interface Producer {
    producerName?: string;
    producerCompany?:string;
}
interface MusicAlbum extends Producer{
    artistName: string;
    albumTitle: string;
    numberOfTracks?: number
}

//Merged interface
interface MusicAlbum {
    releaseDate?: string;
}
type makeAlbumFunctionAlias = (artistName: string, albumTitle: string,numberOfTracks?: number) => MusicAlbum;

interface makeAlbumCallSig {
    (artistName: string, albumTitle: string,numberOfTracks?: number) : MusicAlbum;
}

const make_album: makeAlbumCallSig =  (artistName:string, albumTitle:string, numberOfTracks?:number): MusicAlbum => {
    let album:MusicAlbum ={
        artistName,
        albumTitle
    };
    if(numberOfTracks){
        album.numberOfTracks = numberOfTracks;
    }
    // return { artistName, albumTitle, ...(numberOfTracks && {numberOfTracks})  }
    return album;
}

console.log(make_album("Rahat", "Rahat 2011"));
console.log(make_album("Fasahat", "Fasahat 2012"));
console.log(make_album("Rayazat", "Rayazat 2013", 10));