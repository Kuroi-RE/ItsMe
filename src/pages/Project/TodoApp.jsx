import React from "react";
import Button from "../components/Utilities/Button";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {
  faCss3,
  faGithub,
  faHtml5,
  faJs,
} from "@fortawesome/free-brands-svg-icons";

const TodoApp = () => {
  return (
    <div className="container py-24 flex flex-col gap-7 text-center items-center">
      <div className="flex flex-col gap-6">
        <h1 className="text-3xl font-bold tracking-wider underline">
          Todo App
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
              icon={faJs}
              flip
              size="xl"
              style={{ color: "#f5f910" }}
            />
          </span>
        </div>
        <p className="tracking-wide">Project sejuta umat yaitu Todo List:)</p>
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
            Javascript
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
          src="https://media.discordapp.net/attachments/811050553839845407/1102104872888840262/image.png?width=952&height=480"
          alt="todo"
        />
        <div>
          <Button variant="info">
            <Link to="/">Visit</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
