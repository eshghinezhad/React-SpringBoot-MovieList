import React from "react";
import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [
  "https://cms-assets.webediamovies.pro/cdn-cgi/image/dpr=1,fit=scale-down,gravity=auto,metadata=none,quality=85,width=2000/production/2/5d8392168efaee20812b995f2a8df212.jpg",
  "https://cms-assets.webediamovies.pro/cdn-cgi/image/dpr=1,fit=scale-down,gravity=auto,metadata=none,quality=85,width=2000/production/2/a466221b558fdd7811cc34ca4408d3f0.jpg",
  "https://cms-assets.webediamovies.pro/cdn-cgi/image/dpr=1,fit=scale-down,gravity=auto,metadata=none,quality=85,width=2000/production/2/335f3de47ff7f2d057af23bd83bb911f.jpg",
  "https://cms-assets.webediamovies.pro/cdn-cgi/image/dpr=1,fit=scale-down,gravity=auto,metadata=none,quality=85,width=2000/production/2/c56db45c846f3381573c17e893e4aead.jpg",
  "https://cms-assets.webediamovies.pro/cdn-cgi/image/dpr=1,fit=scale-down,gravity=auto,metadata=none,quality=85,width=2000/production/2/11d8c8c56c958f790ed2dfe6f0c9e6a2.jpg"
];

const Hero = () => {
  return (
    <Box 
      sx={{
        maxWidth: "900px",  
        margin: "auto",  
        mt: 1,  
        borderRadius: "12px", 
        overflow: "hidden",
        boxShadow: 3
      }}
    >
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
        loop
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <Box
              component="img"
              src={src}
              alt={`Slide ${index + 1}`}
              sx={{
                width: "100%",
                height: "400px",
                objectFit: "cover" 
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Hero;