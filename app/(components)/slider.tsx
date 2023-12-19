// // components/ImageSlider.js
// import React from "react";
// import Slider from "react-slick";
// import { Box, Image } from "@chakra-ui/react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// const ImageSlider = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };
//   const images: string[] = [
//     "../public/carousel-01.jpg",
//     "../public/carousel-02.jpg",
//     "../public/carousel-03.jpg",
//   ];
//   return (
//     <Box position="fixed" top="0" left="0" right="0" bottom="0" zIndex="-1">
//       <Slider {...settings}>
//         {images.map((imageUrl: any, index: any) => (
//           <Box key={index}>
//             <Image src={imageUrl} alt={`Slide ${index + 1}`} />
//           </Box>
//         ))}
//       </Slider>
//     </Box>
//   );
// };

// export default ImageSlider;
