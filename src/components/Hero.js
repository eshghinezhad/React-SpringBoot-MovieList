import React from "react";
import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [
  "https://seiuhealthcare.ca/wp-content/uploads/2022/10/vaccines-1.jpg",
  "https://blogs.worldbank.org/content/dam/sites/blogs/img/detail/mgr/vaccination.png",
  "https://assets.clevelandclinic.org/transform/9fdda55b-4a56-4b37-8815-e9f48e2491cd/multiple-Vaccines-1415852834-770x533-1_jpg"
];

const Hero = () => {
  return (
    <Box 
      sx={{
        maxWidth: "800px",  
        margin: "auto",  
        mt: 3,  
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
                height: "300px",
                objectFit: "cover" 
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "black",
                padding: "10px 20px",
                borderRadius: "8px",
                textAlign: "center"
              }}
            >
              <Typography variant="h7" fontWeight="bold">
                Welcome to Vaccine Management Solutions
              </Typography>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Hero;