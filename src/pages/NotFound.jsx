import { Link } from "react-router-dom";
import Button from "./components/Utilities/Button";

const NotFound = () => {
  return (
    <>
      <div className="container py-24 flex items-center text-center justify-center">
        <div className="flex flex-col gap-10">
          <h1 className="text-red-600 font-bold tracking-widest text-3xl">
            404 Not Found
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint unde
            libero eveniet quisquam aspernatur, dolores saepe nulla error
            accusantium delectus!
          </p>
          <div>
            <Button variant="warning">
              <Link to="/">Back To Home</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
