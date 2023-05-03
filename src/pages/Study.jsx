import { Link } from "react-router-dom";

const Study = () => {
  return (
    <>
      <div className="flex flex-col mx-auto max-w-3xl tracking-wide py-24">
        {/* No 1 */}
        <div className="flex gap-8 flex-col justify-center items-center tablet:flex-row">
          <div className="card flex flex-col h-48 w-64 text-center justify-center tablet:w-96 tablet:h-80">
            <h1 className="text-lg pt-1 text-center font-semibold underline underline-offset-2 cursor-help hover:text-blue-500">
              <Link className="cursor-help" to="/smk">
                High School
              </Link>
            </h1>
            <p className="tracking-wide tablet:mx-2">
              Fresh Gradulation from SMK Binawiyata Karangmalang Sragen 2019 -
              2023
            </p>
          </div>
          <div className="card flex flex-col h-64 w-64 text-center justify-center tablet:w-96 tablet:h-80">
            <h1 className="text-lg pt-1 text-center font-semibold underline underline-offset-2 cursor-help hover:text-blue-500">
              <Link className="cursor-help" to="/smk">
                TOEIC
              </Link>
            </h1>
            <p className="tracking-wide tablet:mx-1">
              global standard for assessing English-language communication
              skills needed in the workplace and everyday life.
            </p>
          </div>
        </div>
        {/* No 1 */}
        <div className="flex gap-8 flex-col justify-center items-center py-16 tablet:flex-row">
          <div className="card flex flex-col h-48 w-64 text-center justify-center tablet:w-96 tablet:h-80">
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
          <div className="card flex flex-col h-48 w-64 text-center justify-center tablet:w-96 tablet:h-80">
            <h1 className="text-lg pt-1 text-center font-semibold underline underline-offset-2 cursor-help hover:text-blue-500">
              <Link className="cursor-help" to="/cisco">
                CCNA
              </Link>
            </h1>
            <p className="tracking-wide">
              Certificate CCNA-v7 from Cisco Networking Academy about Networking
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Study;
