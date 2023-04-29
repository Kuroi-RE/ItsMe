import { Link } from "react-router-dom";

const Study = () => {
  return (
    <>
      <div className="container h-screen mx-auto max-w-3xl tracking-wide flex gap-8 flex-col justify-start py-16 md:flex-row items-center md:items-start ">
        <div className="card flex flex-col h-48 w-64 text-center justify-center">
          <h1 className="text-lg pt-1 text-center font-semibold underline underline-offset-2 cursor-help hover:text-blue-500">
            <Link className="cursor-help" to="https://dicoding.com">
              Dicoding.com
            </Link>
          </h1>
          <p className="tracking-wide">
            Certificate from dicoding in Fundamental Web & Javascript
            Programming language
          </p>
        </div>
        <div className="card flex flex-col h-48 w-64 text-center justify-center">
          <h1 className="text-lg pt-1 text-center font-semibold underline underline-offset-2 cursor-help hover:text-blue-500">
            <Link className="cursor-help" to="/cisco">
              CCNA
            </Link>
          </h1>
          <p className="tracking-wide">
            Certificate CCNA-v7 from Cisco Networking Academy about Networking
          </p>
        </div>
        <div className="card flex flex-col h-48 w-64 text-center justify-center">
          <h1 className="text-lg pt-1 text-center font-semibold underline underline-offset-2 cursor-help hover:text-blue-500">
            <Link className="cursor-help" to="/smk">
              High School
            </Link>
          </h1>
          <p className="tracking-wide">
            Fresh Gradulation from SMK Binawiyata Karangmalang Sragen 2019 -
            2023
          </p>
        </div>
      </div>
    </>
  );
};

export default Study;
