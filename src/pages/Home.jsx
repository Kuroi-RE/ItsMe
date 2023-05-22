import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faCode,
  faGears,
  faStarOfLife,
} from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <>
      <div className="container mx-auto tracking-wide flex gap-11 flex-col items-start justify-start py-24 text-black dark:text-white">
        <div>
          <h1 className="text-2xl font-bold">
            Hi there! I'm{" "}
            <span className="text-white dark:text-blue-100 underline font-sans cursor-pointer  ">
              <Link to="/syiva">Ramadhan</Link>
            </span>{" "}
            🌼
          </h1>
          <p className="">
            A Person who interested about Technology, Games, Music and
            Photography! Find me on{" "}
            <span className="font-extrabold hover:text-blue-700 cursor-pointer">
              <Link to="https://instagram.com/@_rnotlab">Instagram</Link>
            </span>
            ,{" "}
            <span className="font-extrabold hover:text-blue-700 cursor-pointer">
              <Link to="https://discord.com/">Discord</Link>
            </span>{" "}
            or{" "}
            <span className="font-extrabold hover:text-blue-700 cursor-pointer">
              <Link to="https://facebook.com/rainramadhan27">Facebook</Link>
            </span>{" "}
            and if you interested about{" "}
            <span className="font-extrabold hover:text-blue-700 cursor-pointer">
              <Link to="/items">my item</Link>
            </span>{" "}
            find it now
          </p>
        </div>
        <div>
          <h2 className="text-xl pt-2 font-bold ml-2">
            <FontAwesomeIcon icon={faGears} /> Project Done
          </h2>
          <div className="mb-2 w-40 rounded-sm border-b-[3px] border-red-400 dark:border-blue-500"></div>
          <div className="flex flex-col gap-4">
            <div className="project">
              <h3 className="text-lg font-bold">
                <Link
                  to="movie-app"
                  className="hover:text-blue-700 cursor-pointer"
                >
                  Movie App
                </Link>
              </h3>
              <p>A movie list website using API</p>
            </div>
            <div className="project">
              <h3 className="text-lg font-bold ">
                <Link
                  to="project-ig"
                  className="hover:text-blue-700 cursor-pointer"
                >
                  Instagram Clone
                </Link>
              </h3>
              <p>Clone instagram interface to test my FrontEnd Skill.</p>
            </div>
            <div className="project">
              <h3 className="text-lg font-bold ">
                <Link
                  to="project-todo"
                  className="hover:text-blue-700 cursor-pointer"
                >
                  Todo APP
                </Link>
              </h3>
              <p>Simple Todo List App</p>
            </div>
            <div className="project">
              <h3 className="text-lg font-bold ">
                <Link
                  to="project-discord"
                  className="hover:text-blue-700 cursor-pointer"
                >
                  Discord Bot
                </Link>
              </h3>
              <p>A bot discord using official API from Discord (DISCORD JS)</p>
            </div>
            <div className="project">
              <h3 className="text-lg font-bold ">
                <Link
                  to="ram-bank"
                  className="hover:text-blue-700 cursor-pointer"
                >
                  Ram Bank
                </Link>
              </h3>
              <p>Project UI/UX Halaman Bank</p>
            </div>
          </div>
        </div>

        {/* <div className="spesial">
          <h1 className="text-xl pt-2 font-bold ml-2">My Favorite Think</h1>
          <div className="mb-2 w-44 rounded-sm border-b-[3px] border-red-400 dark:border-blue-500"></div>
          <ul className="flex flex-col gap-5 text-lg">
            <li>
              <Link to="/test">
                <FontAwesomeIcon icon={faPerson} /> Syiva{" "}
                <FontAwesomeIcon icon={faPerson} />
              </Link>
            </li>
          </ul>
        </div> */}

        {/* <div>
          <h2 className="text-xl pt-2 font-bold ml-1 pb-1">
            <FontAwesomeIcon icon={faCode} /> Language
          </h2>
          <div className="mb-2 w-40 rounded-sm border-b-[3px] border-red-400 dark:border-blue-500"></div>
          <div>
            <ul>
              <li>Javascript</li>
            </ul>
          </div>
        </div> */}

        <div>
          <h2 className="text-xl pt-2 font-bold ml-1 pb-1">
            <FontAwesomeIcon icon={faCode} /> Loved Language
          </h2>
          <div className="mb-2 w-40 rounded-sm border-b-[3px] border-red-400 dark:border-blue-500"></div>
          <ul>
            <li>
              <Link className="flex gap-4 text-center items-center">
                <FontAwesomeIcon icon={faStarOfLife} />
                <h3 className="text-lg underline font-semibold hover:text-blue-600">
                  Html&Css
                </h3>
              </Link>
            </li>
            <li>
              <Link className="flex gap-4 text-center items-center">
                <FontAwesomeIcon icon={faStarOfLife} />
                <h3 className="text-lg underline font-semibold hover:text-blue-600">
                  Javascript
                </h3>
              </Link>
            </li>
            <li>
              <Link className="flex gap-4 text-center items-center">
                <FontAwesomeIcon icon={faStarOfLife} />
                <h3 className="text-lg underline font-semibold hover:text-blue-600">
                  Python
                </h3>
              </Link>
            </li>
            {/* <li>
              <Link className="flex gap-4 text-center items-center">
                <FontAwesomeIcon icon={faStarOfLife} />
                <h3 className="text-lg underline font-semibold hover:text-blue-600">
                  
                </h3>
              </Link>
            </li> */}
            <li>
              <Link className="flex gap-4 text-center items-center">
                <FontAwesomeIcon icon={faStarOfLife} />
                <h3 className="text-lg underline font-semibold hover:text-blue-600">
                  GO Language
                </h3>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
