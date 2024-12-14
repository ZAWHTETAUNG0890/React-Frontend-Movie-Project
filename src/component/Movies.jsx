import React from "react";
import MovieCard from "./MovieCard";
import { useSelector } from "react-redux";

const Movies = () => {

  let movie = []

  movie = useSelector( (state)=>state.movies.movies )

  return (
    <div className="container mx-auto my-10">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-3">
        
        {
          movie.length > 0 ? movie.map( movie=> <MovieCard key={movie.id} movie={movie}/> ) : <h1>There is no movie</h1>
        }

      </div>
    </div>
  );
};

export default Movies;
