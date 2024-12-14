/* eslint-disable eqeqeq */
import React from "react";
import { Card } from "flowbite-react";
import { Link } from "react-router";

const MovieCard = ({ movie }) => {
  return (
    <div>
      <Link to={`/movies/details/${movie.id}`}>
          <div className="max-w-sm">
            <Card
              className="max-w-sm"
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {movie.title}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {movie.overview}
              </p>

              <div>
                <span className="bg-black text-white p-2 rounded-xl me-3">
                  <i className="fa-solid fa-star me-1"></i>
                  {movie.vote_average}
                </span>
                <span className="bg-black text-white p-2 rounded-xl">
                  <i className="fa-solid fa-calendar-days me-2"></i>
                  {movie.release_date}
                </span>
              </div>
            </Card>
          </div>
        </Link>
    </div>
  );
};

export default MovieCard;
