import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [theme, setTheme] = useState(null);

  // console.log(hours);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-schema: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme !== "dark") return document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("dark");
  }, [theme]);

  let iconDefault;

  if (theme === "dark") {
    iconDefault = faMoon;
  } else {
    iconDefault = faSun;
  }
  const HandleSwicthDark = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <>
      <header className="flex flex-row justify-center gap-7 glass z-50 fixed top-0 right-0 left-0 p-3 text-center">
        <h1 className="text-xl font-bold text-zinc-300 hover:text-orange-500 cursor-help">
          ラマドアン
        </h1>
        <div>
          <FontAwesomeIcon
            className="cursor-pointer hover:animate-spin text-white"
            icon={iconDefault}
            onClick={HandleSwicthDark}
          />
        </div>
      </header>
    </>
  );
};

export default Header;
