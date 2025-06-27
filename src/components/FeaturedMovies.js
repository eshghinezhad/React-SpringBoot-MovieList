import React, {useEffect,useState} from "react";
import { useNavigate } from 'react-router-dom';
import '../css/FeaturedSection.css';




const FeaturedMovies = () => {
    const [movies, setMovies] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
      fetch("http://localhost:3001/movies_Tvs")
        .then(res => res.json())
        .then(data => setMovies(data))
        .catch(error => console.error("Error fetching movies:", error));
    }, []);

    const handleMovieClick = (id) => {
        navigate(`/movies/${id}`);
    };

    return (
        <div className="featured-section">
            <h2 className="featured-title"> Featured Movies</h2>
            <div className="scroll-container">
                <div className="featured-scroll" id="featured-movies-container">
                    {movies.map(movie => (
                        <div 
                            key={movie.id} 
                            className="featured-card"
                            onClick={() => handleMovieClick(movie.id)}
                        >
                            <img src={movie.poster} alt={movie.title} />
                            <h3>{movie.title}</h3>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default FeaturedMovies
