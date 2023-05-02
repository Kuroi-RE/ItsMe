import React from "react";
import List from "./components/Music/List";

const Music = () => {
  const music = {
    data: [
      {
        title_song: "Get You the Moon",
        img_url: "",
        artist: "Kina",
        song_url: "https://spotify.com",
      },
      {
        title_song: "Get You the Moon",
        img_url: "",
        artist: "Ruby",
        song_url: "https://spotify.com",
      },
      {
        title_song: "Get You the Moon",
        img_url: "",
        artist: "Powfu",
        song_url: "https://spotify.com",
      },
      {
        title_song: "Get You the Moon",
        img_url: "",
        artist: "Sartasic sound",
        song_url: "https://spotify.com",
      },
    ],
  };

  //   music.data.map(function (t) {
  //     return console.log(t);
  //   });
  return (
    <div className="container mx-auto py-24 flex flex-col justify-center text-center items-center">
      <div>
        <h1 className="font-bold text-2xl uppercase underline">
          TOP 10 Music by Me
        </h1>
      </div>
      <div className="flex flex-col gap-5 py-6">
        {music.data.map((e, key) => {
          return (
            <React.Fragment key={key}>
              <List
                img_url={e.img_url}
                title_song={e.title_song}
                artist={e.artist}
                song_url={e.song_url}
              />
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};
export default Music;
