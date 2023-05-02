import React from "react";
import Button from "../Utilities/Button";
import { Link } from "react-router-dom";

const List = (props) => {
  return (
    <>
      <div className="flex flex-row gap-9 border items-center px-2">
        <div className="img">
          <img srcSet={props.song_url} alt="sasa" />
        </div>
        <div className="judul">
          <h1 className="font-semibold tracking-wide">{props.title_song}</h1>
          <h2 className="text-gray-500">{props.artist}</h2>
        </div>
        <div className="visit">
          <Button variant="success">
            <Link to={props.song_url}>Visit</Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default List;
