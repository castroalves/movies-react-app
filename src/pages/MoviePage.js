import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

function MoviePage() {

    let { id } = useParams();

    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        const fetchMovie = () => {

            fetch(`https://www.omdbapi.com/?apikey=31f9bccf&i=${id}&plot=full`)
                .then(res => res.json())
                .then(data => {
                    setLoading(false);
                    setMovie(data);
                    setGenres(data.Genre.split(', '));
                })
                .catch(error => console.error(error));
        };
        fetchMovie();
    }, [id]);

    return (
        <div className="flex h-screen">
            { loading ? (
                <h3 className="m-auto font-bold text-6xl">Loading</h3>
            ) : (
            <div className="container m-auto">
                <header className="header flex flex-col p-4 text-center">
                    <h1 className="text-indigo-400 text-6xl font-bold my-4">OMDb React App</h1>
                </header>
                <div>
                    <Link to="/"><button className="bg-indigo-700 hover:opacity-90 px-4 py-2 mb-4 font-bold shadow-md">Go back</button></Link>
                </div>
                <div className="flex flex-nowrap">
                    <div className="movie-poster w-1/3 rounded overflow-hidden shadow-xl">
                        <img className="w-full" src={movie.Poster} alt={movie.Title} />
                    </div>
                    <div className="movie-info w-2/3 p-4">
                        <h1 className="movie-title text-4xl font-bold py-2">{movie.Title}</h1>
                        <div className="movie-rating py-2">
                            <span className="bg-green-600 ml-2 px-4 py-2 rounded-full shadow-md">{movie.imdbRating}</span>
                        </div>
                        <div className="movie-description py-2">{movie.Plot}</div>
                        <div className="movie-genre py-2">{genres.map(genre => (
                            <span key={genre} className="bg-indigo-700 px-4 py-2 mr-2 rounded-full shadow-md">{genre}</span>
                        ))}</div>
                    </div>
                </div>
            </div>
            ) }
        </div>
    );

}

export default MoviePage;