import React from "react";
import Button from "../components/Utilities/Button";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {
  faDiscord,
  faGithub,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";

const MovieApp = () => {
  const alert = () => {
    window.alert("This project runs on a local server.");
  };

  return (
    <div className="container py-24 flex flex-col gap-7 text-center items-center text-black dark:text-white">
      <div className="flex flex-col gap-6">
        <h1 className="text-3xl font-bold tracking-wider underline">
          Discord Bot
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
              icon={faDiscord}
              flip
              size="xl"
              style={{ color: "#3477ea" }}
            />
          </span>
        </div>
        <p className="tracking-wide">
          My first project using nodejs, namely Discord.js, made a discord
          application bot for server needs, several economy commands that are
          directly connected to the database. And some moderation commands such
          as kick, ban, mute and more.
        </p>
      </div>
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold tracking-wider">Tech Stack:</h1>
        <ul>
          <li className="flex gap-3 justify-start text-start items-center font-semibold">
            <FontAwesomeIcon icon={faArrowRight} />
            NODE JS
          </li>
          <li className="flex gap-3 justify-start text-start items-center font-semibold">
            <FontAwesomeIcon icon={faArrowRight} />
            Discord JS
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-3">
        <h2 className="text-2xl font-bold tracking-wider">Screenshot:</h2>
        <img
          className="w-96"
          src="https://media.discordapp.net/attachments/811050553839845407/1102099197043409036/image.png?width=1025&height=478"
          alt="discord"
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
