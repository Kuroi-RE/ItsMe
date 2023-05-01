import React from "react";

const url = {
  image1:
    "https://media.discordapp.net/attachments/745591920604086362/1055854331485761616/IMG_20221217_123946.jpg?width=640&height=480",
  image2:
    "https://media.discordapp.net/attachments/745591920604086362/750914722911486042/IMG_20200902_184815.jpg?width=640&height=480",
  image3:
    "https://media.discordapp.net/attachments/745591920604086362/748166698158522418/IMG20200711165039.jpg?width=640&height=480",
  image4:
    "https://media.discordapp.net/attachments/745591920604086362/748166697244033114/IMG20200711165314.jpg?width=640&height=480",
};

const Project = () => {
  return (
    <>
      <div className="mx-5 tracking-wide flex gap-11 flex-col items-center justify-start py-24 tablet:flex-row">
        <div>
          <img
            src={url.image4}
            alt="photography"
            className="border w-72 "
            srcSet=""
          />
          <h1 className="text-center text-lg font-bold">Sunset</h1>
        </div>
        <div>
          <img
            src={url.image2}
            alt="photography"
            className="border w-72 "
            srcSet=""
          />
          <h1 className="text-center text-lg font-bold">The moon </h1>
        </div>
        <div>
          <img
            src={url.image3}
            alt="photography"
            className="border w-72 "
            srcSet=""
          />
          <h1 className="text-center text-lg font-bold">Watch a sun</h1>
        </div>
        <div>
          <img
            src={url.image1}
            alt="photography"
            className="border w-72 "
            srcSet=""
          />
          <h1 className="text-center text-lg font-bold">A cloud</h1>
        </div>
      </div>
    </>
  );
};

export default Project;
