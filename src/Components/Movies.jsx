import React from "react";

function Movies(props) {
  return props.movieList.map((movie) => (
    <div className="m-[0.3125rem]">
      <img className="h-[17.5rem] w-[17.5rem] rounded-xl" src={movie.Poster} alt="Movie" />
    </div>
  ));
}

export default Movies;
