
// import React, { useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import { Autoplay, Pagination, Navigation } from "swiper/modules";

// export default function Swip() {
//   const progressCircle = useRef(null);
//   const progressContent = useRef(null);

//   const onAutoplayTimeLeft = (s, time, progress) => {
//     // Vérifie que la référence n'est pas nulle avant d'accéder à 'style'
//     if (progressCircle.current && progressContent.current) {
//       progressCircle.current.style.setProperty("--progress", 1 - progress);
//       progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
//     }
//   };

//   return (
//     <>
//       <Swiper
//         spaceBetween={30}
//         centeredSlides={true}
//         autoplay={{
//           delay: 2000,
//           disableOnInteraction: false,
//         }}
//         // pagination={{
//         //   clickable: true,
//         // }}
//         // navigation={true}
//         modules={[Autoplay]}
//         onAutoplayTimeLeft={onAutoplayTimeLeft}
//         className="mySwiper"
//       >
//         {/* Slides avec des images */}
//         <SwiperSlide>
//           <img
//             src="porsch.webp"
//             alt="Porsche"
//             className="w-full h-full object-cover"
//             loading="lazy"
//           />
//         </SwiperSlide>

//         <SwiperSlide>
//           <img
//             src="Gle.webp"
//             alt="Mercedes Gle"
//             className="w-full h-full object-cover"
//             loading="lazy"
//           />
//         </SwiperSlide>

//         <SwiperSlide>
//           <img
//             src="C220.webp"
//             alt="Mercedes C220"
//             className="w-full h-full object-cover"
//             loading="lazy"
//           />
//         </SwiperSlide>

//         <SwiperSlide>
//           <img
//             src="Touarg.webp"
//             alt="Toyota Touareg"
//             className="w-full h-full object-cover"
//             loading="lazy"
//           />
//         </SwiperSlide>

//         <SwiperSlide>
//           <img
//             src="BMW.webp"
//             alt="BMW"
//             className="w-full h-full object-cover"
//             loading="lazy"
//           />
//         </SwiperSlide>

//         <SwiperSlide>
//           <img
//             src="A7.webp"
//             alt="Audi A7"
//             className="w-full h-full object-cover"
//             loading="lazy"
//           />
//         </SwiperSlide>

//         <SwiperSlide>
//           <img
//             src="golf.webp"
//             alt="Volkswagen Golf"
//             className="w-full h-full object-cover"
//             loading="lazy"
//           />
//         </SwiperSlide>

//         <SwiperSlide>
//           <img
//             src="porsch.webp"
//             alt="Porsche"
//             className="w-full h-full object-cover"
//             loading="lazy"
//           />
//         </SwiperSlide>

//         <SwiperSlide>
//           <img
//             src="golf.webp"
//             alt="Volkswagen Golf"
//             className="w-full h-full object-cover"
//             loading="lazy"
//           />
//         </SwiperSlide>

//         <SwiperSlide>
//           <img
//             src="Gle.webp"
//             alt="Mercedes Gle"
//             className="w-full h-full object-cover"
//             loading="lazy"
//           />
//         </SwiperSlide>

//         <SwiperSlide>
//           <img
//             src="C220.webp"
//             alt="Mercedes C220"
//             className="w-full h-full object-cover"
//             loading="lazy"
//           />
//         </SwiperSlide>

//         <SwiperSlide>
//           <img
//             src="Touarg.webp"
//             alt="Toyota Touareg"
//             className="w-full h-full object-cover"
//             loading="lazy"
//           />
//         </SwiperSlide>

//         <SwiperSlide>
//           <img
//             src="BMW.webp"
//             alt="BMW"
//             className="w-full h-full object-cover"
//             loading="lazy"
//           />
//         </SwiperSlide>

//         <SwiperSlide>
//           <img
//             src="A7.webp"
//             alt="Audi A7"
//             className="w-full h-full object-cover"
//             loading="lazy"
//           />
//         </SwiperSlide>

//         {/* Progression de l'autoplay */}
//         {/* <div className="autoplay-progress" slot="container-end">
//           <svg viewBox="0 0 48 48" ref={progressCircle}>
//             <circle cx="24" cy="24" r="20"></circle>
//           </svg>
//           <span ref={progressContent}></span>
//         </div> */}
//       </Swiper>
//     </>
//   );
// }
// //





import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Swip() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    if (progressCircle.current && progressContent.current) {
      progressCircle.current.style.setProperty("--progress", 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {/* Slides avec images du dossier public */}
        {[
          // "porsch.webp",
          "Gle.webp",
          "C220.webp",
          "Touarg.webp",
          "BMW.webp",
          "A7.webp",
          "golf.webp",
        ].map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={`${process.env.PUBLIC_URL}/${image}`}
              alt={image.replace(".webp", "")}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
