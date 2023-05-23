import React from "react";
import Button from "../Utilities/Button";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const List = (props) => {
  return (
    <>
      <div className="flex flex-row gap-9 border rounded-lg justify-between items-center text-center px-2 border-black dark:border-white max-[430px]:text-xs">
        <div className="img w-16">
          <img
            srcSet={props.img_url}
            className="rounded-md w-full"
            alt="sasa"
          />
        </div>
        <div className="judul">
          <h1 className="font-semibold tracking-wide text-black dark:text-white">
            {props.title_song}
          </h1>
          <h2 className="text-gray-700 dark:text-gray-500">{props.artist}</h2>
        </div>
        <div className="visit">
          <Button variant="success">
            <Link to={props.song_url}>
              <FontAwesomeIcon icon={faPlay} shake />
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default List;
