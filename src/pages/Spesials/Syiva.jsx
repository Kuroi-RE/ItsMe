import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faArrowRight,
  faCode,
  faHeart,
  faLaptopCode,
  faStarAndCrescent,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <>
      <div className="container py-24 flex flex-col text-center justify-center items-center">
        <div>
          <h1 className="text-2xl font-bold underline">Spesial Thank:</h1>
          <ul className="py-3">
            <li className="flex gap-5 justify-start items-center text-lg font-semibold">
              <FontAwesomeIcon icon={faStarAndCrescent} />
              Allah Swt
            </li>
            <li className="flex gap-5 justify-start items-center text-lg font-semibold">
              <FontAwesomeIcon icon={faHeart} />
              Syvva
            </li>
            <li className="flex gap-5 justify-start items-center text-lg font-semibold">
              <FontAwesomeIcon icon={faArrowRight} />
              Other
            </li>
          </ul>
        </div>

        <div>
          <h1 className="text-2xl font-bold underline">Reach Me On:</h1>
          <ul className="py-3">
            <li className="flex gap-5 justify-start items-center text-lg font-semibold">
              <FontAwesomeIcon icon={faInstagram} />
              <Link>@_rnotlab</Link>
            </li>
            <li className="flex gap-5 justify-start items-center text-lg font-semibold">
              <FontAwesomeIcon icon={faTwitter} />
              <Link>@Ramtake30</Link>
            </li>
            <li className="flex gap-5 justify-start items-center text-lg font-semibold">
              <FontAwesomeIcon icon={faFacebook} />
              <Link>Ramadhan</Link>
            </li>
          </ul>
        </div>

        <div>
          <h1 className="text-2xl font-bold underline">
            <FontAwesomeIcon icon={faCode} /> Tech Stack:
          </h1>
          <ul className="py-3">
            <li className="flex gap-5 justify-start items-center text-lg font-semibold">
              <FontAwesomeIcon icon={faLaptopCode} />
              NODE JS
            </li>
            <li className="flex gap-5 justify-start items-center text-lg font-semibold">
              <FontAwesomeIcon icon={faLaptopCode} />
              REACT JS
            </li>
            <li className="flex gap-5 justify-start items-center text-lg font-semibold">
              <FontAwesomeIcon icon={faLaptopCode} />
              TAILDWINDCSS
            </li>
            <li className="flex gap-5 justify-start items-center text-lg font-semibold">
              <FontAwesomeIcon icon={faLaptopCode} />
              FONTAWESOME
            </li>
            <li className="flex gap-5 justify-start items-center text-lg font-semibold">
              <FontAwesomeIcon icon={faLaptopCode} />
              HERO SLIDER
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default App;
