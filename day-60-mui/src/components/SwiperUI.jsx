import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import images from "../data/images";
import { useState, useRef } from "react";
const SwiperUI = () => {
  const swiperRef = useRef(null);

  const [thumbSwiper, setThumbSwiper] = useState(null);

  const slides = images.map((image, index) => {
    return (
      <SwiperSlide key={index}>
        <img src={image.url} />
      </SwiperSlide>
    );
  });
  return (
    <div>
      <h1>Day-60 -- Swiper JS with React</h1>
      <Swiper
        spaceBetween={50}
        navigation={true}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onBeforeInit={(swiper) => (swiperRef.current = swiper)}
        thumbs={{ swiper: thumbSwiper }}
        modules={[FreeMode, Thumbs]}
      >
        {slides}
      </Swiper>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={setThumbSwiper}
      >
        {slides}
      </Swiper>
    </div>
  );
};

export { SwiperUI };
