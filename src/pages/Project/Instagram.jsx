import React from "react";
import Button from "../components/Utilities/Button";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faFontAwesome } from "@fortawesome/free-solid-svg-icons";
import { faCss3, faGithub, faHtml5 } from "@fortawesome/free-brands-svg-icons";

const Instagram = () => {
  const alert = () => {
    window.alert("This project runs on a local server.");
  };
  return (
    <div className="container py-24 flex flex-col gap-7 text-center items-center text-black dark:text-white">
      <div className="flex flex-col gap-6">
        <h1 className="text-3xl font-bold tracking-wider underline">
          Instagram Clone
        </h1>
        <div className="flex gap-4 justify-center">
          <span>
            <FontAwesomeIcon icon={faGithub} flip size="xl" />
          </span>
          <span>
            <FontAwesomeIcon
              icon={faHtml5}
              flip
              size="xl"
              style={{ color: "#c51407" }}
            />
          </span>
          <span>
            <FontAwesomeIcon
              icon={faCss3}
              flip
              size="xl"
              style={{ color: "#3477ea" }}
            />
          </span>
          <span>
            <FontAwesomeIcon
              icon={faFontAwesome}
              flip
              size="xl"
              style={{ color: "#3477ea" }}
            />
          </span>
        </div>
        <p className="tracking-wide">
          Cloning Project, this is a project that copies the UI from instagram
          to test my skills in the 'FrontEnd' Developer field.
        </p>
      </div>
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold tracking-wider">Tech Stack:</h1>
        <ul>
          <li className="flex gap-3 justify-start text-start items-center font-semibold">
            <FontAwesomeIcon icon={faArrowRight} />
            Html
          </li>
          <li className="flex gap-3 justify-start text-start items-center font-semibold">
            <FontAwesomeIcon icon={faArrowRight} />
            Css
          </li>
          <li className="flex gap-3 justify-start text-center items-center font-semibold">
            <FontAwesomeIcon icon={faArrowRight} />
            FontAwesome
          </li>
          <li className="flex gap-3 justify-start text-center items-center font-semibold">
            <FontAwesomeIcon icon={faArrowRight} />
            Google Fonts
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-3">
        <h2 className="text-2xl font-bold tracking-wider">Screenshot:</h2>
        <img
          className="w-96"
          src="https://media.discordapp.net/attachments/811050553839845407/1102101171730124830/image.png?width=1025&height=463"
          alt="insta"
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

export default Instagram;
