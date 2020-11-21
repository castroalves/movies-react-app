import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

function MoviePage() {

    let { id } = useParams();

    const [movie, setMovie] = useState([]);

    const fetchMovie = () => {

        fetch(`http://www.omdbapi.com/?apikey=31f9bccf&i=${id}&plot=full`)
            .then(res => res.json())
            .then(data => {
                setMovie(data);
            })
            .catch(error => console.error(error));
    };


    useEffect(() => {
        fetchMovie();
    }, []);

    return (
        <div className="container mx-auto">
            <div>
                <Link to="/">Back home</Link>
            </div>
            <div className="flex flex-nowrap">
                <div className="movie-poster w-1/3 rounded overflow-hidden shadow-xl">
                    <img className="w-full" src={movie.Poster} alt={movie.Title} />
                </div>
                <div className="movie-info w-2/3 p-4">
                    <h1 className="movie-title text-4xl font-bold py-2">{movie.Title}</h1>
                    <div className="movie-rating py-2">Rating: {movie.imdbRating}</div>
                    <div className="movie-description py-2">{movie.Plot}</div>
                    <div className="movie-genre py-2">{movie.Genre}</div>
                </div>
            </div>
        </div>
    );

}

export default MoviePage;