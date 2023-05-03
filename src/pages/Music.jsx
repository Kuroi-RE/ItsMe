import React from "react";
import List from "./components/Music/MusicList";
import MusicData from "./components/Music/MusicData";
const Music = () => {
  return (
    <div className="container mx-auto py-24 flex flex-col justify-center text-center items-center">
      <div>
        <h1 className="font-bold text-2xl uppercase underline">
          TOP MUSIC BY ME
        </h1>
      </div>
      <div className="flex flex-col gap-5 py-6">
        {MusicData().data.map((e, key) => {
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
