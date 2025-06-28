import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { Typography, Card, CardMedia, Button, Box } from "@mui/material";
import Header from '../components/Header';
import Footer from '../components/Footer';

function MovieDetails() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
      fetch(`http://localhost:3001/movies_Tvs/${id}`)
        .then(res => res.json())
        .then(data => setMovie(data))
        .catch(error => console.error("Error fetching movie:", error));
    }, [id]);

    if (!movie) {
      return <Typography variant="h6" align="center">Movie/TVShow Not Found</Typography>;
    }

  return (
    <div style={{
      display: 'grid',
      gridTemplateRows: 'auto 1fr auto',
      minHeight: '100vh'
    }}>        
    <Header />
      <main style={{ padding: '0rem', textAlign: 'center' }}>
        <Box
          sx={{
            position: "relative",
            width: "100%",
            minHeight: "80vh",
            backgroundImage: `url(${movie.lposter})`, 
            backgroundSize: "cover", 
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat", 
            filter: "brightness(60%)",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              width: { xs: "90%", md: "70%" }, // Make width responsive
              backgroundColor: "rgba(0, 0, 0, 0.7)", 
              padding: { xs: "15px", sm: "20px", md: "30px" },
              borderRadius: "10px",
              color: "white",
            }}
          >
            <Typography 
              variant="h3" 
              fontWeight="bold" 
              sx={{ fontSize: { xs: "1.8rem", sm: "2rem", md: "2.5rem" } }}
            >
              {movie.title}
            </Typography>
            <Typography 
              variant="h6" 
              sx={{ opacity: 0.9, fontSize: { xs: "0.9rem", md: "1.1rem" } }}
            >
              {movie.genre}
            </Typography>

            {/* Small Poster & Description */}
            <Box 
              sx={{ 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                gap: 3, 
                flexWrap: "wrap", // Makes content stack on mobile
                marginTop: 3 
              }}
            >
              <Card sx={{ maxWidth: 180, backgroundColor: "transparent", boxShadow: "none" }}>
                <CardMedia 
                  component="img" 
                  image={movie.poster} 
                  alt={movie.title}
                  sx={{ width: "100%", borderRadius: "5px" }}
                />
              </Card>
              <Typography 
                variant="body1" 
                sx={{ 
                  fontSize: { xs: "0.9rem", md: "1rem" }, 
                  textAlign: "left", 
                  maxWidth: "400px" 
                }}
              >
                {movie.overview}
              </Typography>
            </Box>

            {/* Rent & Buy Buttons */}
            <Box 
              sx={{ 
                marginTop: 3, 
                display: "flex", 
                gap: 2, 
                flexWrap: "wrap", 
                justifyContent: "center" 
              }}
            >
              <Button 
                variant="contained" 
                color="primary"
                sx={{ fontSize: { xs: "0.8rem", md: "1rem" }, px: { xs: 2, md: 3 }, py: { xs: 1, md: 1.5 } }}
              >
                Rent: {movie.rent}
              </Button>
              <Button 
                variant="contained" 
                color="secondary"
                sx={{ fontSize: { xs: "0.8rem", md: "1rem" }, px: { xs: 2, md: 3 }, py: { xs: 1, md: 1.5 } }}
              >
                Buy: {movie.purchase}
              </Button>
            </Box>
          </Box>
        </Box>
      </main>
      <Footer />
    </div>

        




  );
};


export default MovieDetails
