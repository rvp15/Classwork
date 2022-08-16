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
    let selectStation = Math.floor(Math.random() * 5);
    let selectSong = Math.floor(Math.random() * 4);   
    let path = radio.stations[selectStation]['songs'][selectSong];

     console.log(`Now Playing ${path.title} by ${path.artist}`)

  }
};
radio.changeStation()
// console.log("Now Playing:" + song.title + "by" + song.artist)



