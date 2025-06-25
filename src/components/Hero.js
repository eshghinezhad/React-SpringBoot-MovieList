import React, {useEffect,useState} from "react";
import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";



const Hero = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
      fetch("http://localhost:3001/heroMovies")
        .then(res => res.json())
        .then(data => setMovies(data))
        .catch(error => console.error("Error fetching movies:", error));
    }, []);

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
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <Box
              component="img"
              src={movie.poster}
              alt={movie.title}
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