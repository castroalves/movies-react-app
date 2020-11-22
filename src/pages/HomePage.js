import React, { useState, useEffect } from 'react';

import Movie from '../components/Movie';

function HomePage() {

    const [movies, setMovies] = useState([]);
    const [keyword, setKeyword] = useState('');

    const fetchMovies = (searchString) => {

        const keyword = searchString !== undefined
            ? searchString
            : 'Blade';

        setKeyword(keyword);

        fetch(`http://www.omdbapi.com/?apikey=31f9bccf&s=${keyword}`)
            .then(res => res.json())
            .then(data => {
                setMovies(data.Search);
            })
            .catch(error => console.error(error));
    };


    useEffect(() => {
        fetchMovies();
    }, [keyword]);

    const handleFormSubmit = (e) => {
        e.preventDefault();
    };

    const handleSearch = (e) => {
        const keyword = e.target.value;
        const keywordLength = keyword.length;

        if (keywordLength >= 4) {
            if (e.key === 'Enter' || e.which === 13) {
                fetchMovies(keyword);
            }
        }
    };

    return (
        <div className="App flex flex-col">
            <header className="header flex flex-col p-4">
                <h2 className="text-gray-200 text-4xl font-semibold my-4">Select Your Movie</h2>
                <p className="my-4">Here you can find all the movies we have in our marketplace</p>
                <form id="search-form" onSubmit={handleFormSubmit}>
                    <input
                        className="w-full md:w-1/2 p-3 rounded-sm border border-gray-400 bg-gray-600 text-gray-200 outline-none"
                        type="search"
                        name="search"
                        placeholder="Search for a movie, try 'Blade Runner'"
                        onChange={handleSearch}
                        onKeyPress={handleSearch} />
                </form>
            </header>
            <div className="container mx-auto p-4">
                <h3 className="text-left font-semibold text-2xl mb-2">Popular Movies</h3>
                <div className="games-list grid gap-4 md:grid-cols-4">
                    <Movie data={movies} />
                </div>
            </div>
        </div>
    );

}

export default HomePage;