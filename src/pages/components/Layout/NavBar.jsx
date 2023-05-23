import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComputer,
  faGraduationCap,
  faHome,
  faMusic,
} from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <>
      <nav className="fixed bottom-0 bg-slate-200 right-0 p-2 border-t-2 border-black left-0">
        <ul className="flex items-center justify-evenly flex-row">
          <li>
            <Link className="text-2xl text-black" to="/">
              <FontAwesomeIcon icon={faHome} />
            </Link>
          </li>
          <li>
            <Link className="text-2xl text-black" to="/study">
              <FontAwesomeIcon icon={faGraduationCap} />
            </Link>
          </li>
          <li>
            <Link className="text-2xl text-black" to="/space">
              <FontAwesomeIcon icon={faComputer} />
            </Link>
          </li>
          <li>
            <Link className="text-2xl text-black" to="/music">
              <FontAwesomeIcon icon={faMusic} />
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
