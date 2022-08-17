const radio = {
  stations: [
    {
      name: "The Talk Box",
      songs: [
        {
          title: "Vikram",
          artist: "Anirudh",
        },
        {
          title: "Pathala Pathala",
          artist: "Anirudh",
        },
        {
          title: "Porkanda Singam",
          artist: "Anirudh",
        },
      ],
    },
    {
      name: "The Buzz",
      songs: [
        { title: "Polladha Ulagathiley", artist: "Sean Roldan" },
        { title: "Vettakaara", artist: "Sean Roldan" },
        { title: "Thala Kodhum", artist: "Sean Roldan" },
      ],
    },
    {
      name: "Heart 106.7",
      songs: [
        { title: "Veyil", artist: "Santhosh" },
        { title: "Vellattu", artist: "Sean Roldan" },
        { title: "Singappenney", artist: "A.R.Rahman" },
      ],
    },
    {
      name: "Melody FM",
      songs: [
        { title: "Love ", artist: "Vijay" },
        { title: "Kodi", artist: "Unnikrishnan" },
        { title: "Mayilpola", artist: "A.R.Rahman" },
      ],
    },
  ],

  changeStation() {
    let selectStation = Math.floor(Math.random() * radio.stations.length);//get the length of the  dynamically as it changes. it gives random number from 0 to one less than lenth of station 
    
    let selectSong = Math.floor(Math.random() * radio.stations[selectStation].songs.length);   
    // let path = radio.stations[selectStation]['songs'][selectSong];
    let path = radio.stations[selectStation].songs[selectSong]; //path from radio to random stations to random songs 
   
     console.log(`Now Playing ${path.title} by ${path.artist}`)

  }
};
radio.changeStation()
// console.log("Now Playing:" + song.title + "by" + song.artist)



