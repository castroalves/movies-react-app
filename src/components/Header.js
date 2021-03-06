import React from 'react';

function Header() {

    const handleFormSubmit = (e) => {
        e.preventDefault();
    };

    const handleSearch = (e) => {
        const keyword = e.target.value;
        const keywordLength = keyword.length;

        if (keywordLength > 5) {
            if (e.key === 'Enter' || e.which === 13) {
                console.log('Search for ' + keyword);
            }
        }
    };

    return (
        <header className="header flex flex-col">
            <h2 className="text-indigo-200 text-4xl font-semibold my-4">Select Your Movie</h2>
            <p className="my-4">Here you can find all the movies we have in our marketplace</p>
            <form id="search-form" onSubmit={handleFormSubmit}>
                <input 
                    className="w-1/2 p-3 rounded-sm border border-indigo-600 bg-indigo-800 text-indigo-200 outline-none"
                    type="search" 
                    name="search" 
                    placeholder="Search for a movie, try 'Blade Runner'"
                    onChange={handleSearch}
                    onKeyPress={handleSearch} />
            </form>
        </header>
    );
};

export default Header;