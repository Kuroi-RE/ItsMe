import React from "react";
import HeroSlider, { Slide } from "hero-slider";

const img1 =
  "https://media.discordapp.net/attachments/811050553839845407/1101314478206894160/IMG-20230416-WA0043.jpg?width=771&height=480";
const img2 =
  "https://media.discordapp.net/attachments/811050553839845407/1101314477925867581/IMG-20230420-WA0011.jpg";
const img3 =
  "https://media.discordapp.net/attachments/811050553839845407/1101314479062519859/IMG-20230409-WA0000.jpg?width=661&height=480";

const Slider = () => {
  return (
    <HeroSlider
      height="20vh"
      autoplay
      controller={{
        initialSlide: 1,
        slidingDuration: 500,
        slidingDelay: 100,
        onSliding: (nextSlide) =>
          console.debug("onSliding(nextSlide): ", nextSlide),
        onBeforeSliding: (previousSlide, nextSlide) =>
          console.debug(
            "onBeforeSliding(previousSlide, nextSlide): ",
            previousSlide,
            nextSlide
          ),
        onAfterSliding: (nextSlide) =>
          console.debug("onAfterSliding(nextSlide): ", nextSlide),
      }}
    >
      <Slide
        background={{
          backgroundImageSrc: img1,
          backgroundAttachment: "fixed",
        }}
      />

      <Slide
        background={{
          backgroundImageSrc: img2,
          backgroundAttachment: "fixed",
        }}
      />

      <Slide
        background={{
          backgroundImageSrc: img3,
          backgroundAttachment: "fixed",
        }}
      />
    </HeroSlider>
  );
};

export default Slider;
