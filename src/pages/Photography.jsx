import React from "react";
import PhotoData from "./components/Photography/PhotoData";
import PhotoList from "./components/Photography/PhotoList";

const Project = () => {
  return (
    <>
      <div className="h-screen mx-5 tracking-wide flex gap-11 flex-row items-center justify-start py-24 max-[640px]:flex-col max-[640px]:h-full">
        {PhotoData().data.map((photo, index) => {
          return (
            <React.Fragment key={index}>
              <PhotoList
                image_url={photo.image_url}
                image_title={photo.image_title}
              />
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
};

export default Project;
