import React from "react";
import Button from "../components/Utilities/Button";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {
  faBootstrap,
  faGithub,
  faNodeJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

const MovieApp = () => {
  const alert = () => {
    window.alert("This project runs on a local server.");
  };
  return (
    <div className="container py-24 flex flex-col gap-7 text-center items-center text-black dark:text-white">
      <div className="flex flex-col gap-6">
        <h1 className="text-3xl font-bold tracking-wider underline">
          Movie APP
        </h1>
        <div className="flex gap-4 justify-center">
          <span>
            <FontAwesomeIcon icon={faGithub} flip size="xl" />
          </span>
          <span>
            <FontAwesomeIcon
              icon={faNodeJs}
              flip
              size="xl"
              style={{ color: "#14cc64" }}
            />
          </span>
          <span>
            <FontAwesomeIcon
              icon={faReact}
              flip
              size="xl"
              style={{ color: "#3477ea" }}
            />
          </span>
          <span>
            <FontAwesomeIcon
              icon={faBootstrap}
              flip
              size="xl"
              style={{ color: "#045ffb" }}
            />
          </span>
        </div>
        <p className="tracking-wide">
          A website that can search for a film that you want to see details such
          as synopsis, rating, release, you can also see trending film that you
          can use for viewing rekommendations!
        </p>
      </div>
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold tracking-wider">Tech Stack:</h1>
        <ul>
          <li className="flex gap-3 justify-start text-start items-center font-semibold">
            <FontAwesomeIcon icon={faArrowRight} />
            Express JS
          </li>
          <li className="flex gap-3 justify-start text-start items-center font-semibold">
            <FontAwesomeIcon icon={faArrowRight} />
            Mysql
          </li>
          <li className="flex gap-3 justify-start text-center items-center font-semibold">
            <FontAwesomeIcon icon={faArrowRight} />
            React JS
          </li>
          <li className="flex gap-3 justify-start text-center items-center font-semibold">
            <FontAwesomeIcon icon={faArrowRight} />
            Google Fonts
          </li>
          <li className="flex gap-3 justify-start text-center items-center font-semibold">
            <FontAwesomeIcon icon={faArrowRight} />
            Bootstrap
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-3">
        <h2 className="text-2xl font-bold tracking-wider">Screenshot:</h2>
        <img
          className="w-96"
          src="https://media.discordapp.net/attachments/811050553839845407/1102093963734822912/image.png?width=946&height=480"
          alt="movie-app"
        />
        <div>
          <Button variant="info">
            <Link onClick={() => alert()}>Visit</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MovieApp;
