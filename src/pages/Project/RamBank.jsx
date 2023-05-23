import React from "react";
import Button from "../components/Utilities/Button";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faFontAwesome } from "@fortawesome/free-solid-svg-icons";
import { faCss3, faGithub, faHtml5 } from "@fortawesome/free-brands-svg-icons";

const RamBank = () => {
  const alert = () => {
    window.alert("This project runs on a local server.");
  };
  return (
    <div className="container py-24 flex flex-col gap-7 text-center items-center text-black dark:text-white">
      <div className="flex flex-col gap-6">
        <h1 className="text-3xl font-bold tracking-wider underline">RamBank</h1>
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
          UI/UX projext interface, project interface of a Bank website, there is
          a landing page, login and register page and dashboard.
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
          <li className="flex gap-3 justify-start text-center items-center font-semibold">
            <FontAwesomeIcon icon={faArrowRight} />
            Lottie Player
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-3">
        <h2 className="text-2xl font-bold tracking-wider">Screenshot:</h2>
        <img
          className="w-96"
          src="https://media.discordapp.net/attachments/811050553839845407/1102102865297817641/image.png?width=943&height=480"
          alt="ramBank"
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

export default RamBank;
