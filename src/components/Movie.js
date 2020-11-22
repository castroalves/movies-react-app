import React from 'react';
import { Link } from 'react-router-dom';

function Movie({ data }) {

    return data.map(movie => (
        <div key={movie.imdbID} className="rounded overflow-hidden shadow-md relative transition duration-200 ease-in-out transform-gpu hover:scale-105">
            <Link to={{pathname: `/movie/${movie.imdbID}`}}>
                <img
                    alt={movie.Title}
                    className="w-full"
                    src={movie.Poster} />
                <div className="game-title flex flex-col p-4 bg-gradient-to-b from-transparent to-black absolute bottom-0 left-0 right-0 text-white font-bold">
                    <h4 className="text-left">{movie.Title}</h4>
                    <span className="text-left font-normal">{movie.Year}</span>
                </div>
            </Link>
        </div>
    ));

}

export default Movie;