import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import HeroSection from "./HeroSection";
import SearchMovie from "./SearchMovie";
import Movies from "./Movies";
import Name from "./Name";


function App() {
    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState("");
        

        async function getRequest(searchValue) {
            const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=52390139`;

            const response = await fetch(url);
            const responseJson = await response.json();
            if (responseJson.Search) {
                setMovies(responseJson.Search);
            }
            
        }

        useEffect(() => {
            getRequest(searchValue);
        }, [searchValue]);

        function search(event) {
            const value = event.target.value;
            setSearchValue(value)
        }

    return <div>
        <Nav />
        <HeroSection />
        <SearchMovie onSearch={search} value={searchValue} />
        <Name movieName="Movie category name"/>
        <div className="flex w-[90rem] ml-[50px]">
            <Movies movieList={movies}/>
        </div>
        <Name movieName="Movie category name"/>
        <div className="flex w-[90rem] ml-[50px]">
            <Movies movieList={movies}/>
        </div>
    </div>
}

export default App;