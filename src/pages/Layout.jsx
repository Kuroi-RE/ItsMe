import { Outlet } from "react-router-dom";
import NavBar from "./components/Layout/NavBar.jsx";
import Header from "./components/Layout/Header.jsx";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="w-full bg-center bg-fixed text-base-0 bg-base-0 text-gray-100">
        <Outlet />
      </main>
      <NavBar />
    </>
  );
};

export default Layout;
