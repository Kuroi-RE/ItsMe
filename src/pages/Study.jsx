import { Link } from "react-router-dom";
import web_dasar from "../assets/images/web_dasar.png";
import javascript from "../assets/images/javascript.png";
import backend from "../assets/images/back_end.png";

const Study = () => {
  return (
    <>
      <div className="flex flex-col mx-auto gap-11 tracking-wide py-24 text-black dark:text-white">
        <div className="flex flex-row gap-10 justify-center items-center text-start max-[640px]:flex-col max-[640px]:text-center max-[640px]:gap-5">
          <div>
            <Link to="/pdf/pdasar.pdf" target="_blank" download>
              <img src="" className="w-80" alt="web_dasar" srcSet={web_dasar} />
            </Link>
          </div>
          <div className="w-72">
            <h1 className="font-bold">DICODING CERTIFICATE</h1>
            <p>
              Sertifikat pertama saya dari Dicoding. Mempelajari tentang
              dasar-dasar pemgrograman web dengan Html&Css
            </p>
          </div>
        </div>

        <div className="flex flex-row gap-10 justify-center items-center text-start max-[640px]:flex-col max-[640px]:text-center max-[640px]:gap-5">
          <div>
            <Link to="/pdf/js_serti.pdf" target="_blank" download>
              <img
                src=""
                className="w-80"
                alt="javascript"
                srcSet={javascript}
              />
            </Link>
          </div>
          <div className="w-72">
            <h1 className="font-bold">DICODING CERTIFICATE</h1>
            <p>
              Sertifikat kedua saya adalah Dasar Pemgrograman Javascript.
              Mempelajari tentang fundamental js, mempelajari tentang node js
              dan banyak lagi
            </p>
          </div>
        </div>

        <div className="flex flex-row gap-10 justify-center items-center text-start max-[640px]:flex-col max-[640px]:text-center max-[640px]:gap-5">
          <div>
            <Link to="/pdf/backend_serti.pdf" target="_blank" download>
              <img src="" className="w-80" alt="backend" srcSet={backend} />
            </Link>
          </div>
          <div className="w-72">
            <h1 className="font-bold">DICODING CERTIFICATE</h1>
            <p>
              Sertifikat ketiga adalah Membuat Aplikasi Backend. Mempelajari
              bagaimana kerja API, mempelajari tentang Web Service. Membuat
              sebuah Restfull API
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Study;
