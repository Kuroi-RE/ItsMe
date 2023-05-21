const PhotoList = (props) => {
  return (
    <>
      <div>
        <img
          src={props.image_url}
          alt="photography"
          className="border w-72 "
          srcSet=""
        />
        <h1 className="text-center text-lg font-bold">{props.image_title}</h1>
      </div>
    </>
  );
};

export default PhotoList;
