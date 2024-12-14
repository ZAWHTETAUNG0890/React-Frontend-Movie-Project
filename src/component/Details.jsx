/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Link, useParams } from "react-router";
import { Card, Button, Spinner } from "flowbite-react";
import { api, api_key } from "../api";
import { useDispatch, useSelector } from "react-redux";
import { removeSelectedMovie, selectedMovie } from "../redux/action/movies";

const Details = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  let movie = useSelector((state) => state.movies.movie);

  const movieDetails = async () => {
    const res = await api.get(`/movie/${id}?api_key=${api_key}`);
    dispatch(selectedMovie(res.data));
  };

  useEffect(() => {
    if (id) {
      movieDetails();
    }

    return () => dispatch(removeSelectedMovie({}));
  }, []);

  return (
    <div className="container mx-auto mt-10">
      <div>
        {JSON.stringify(movie) == "{}" ? (
          <div
            className="my-5"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Button>
              <Spinner aria-label="Spinner button example" size="sm" />
              <span className="pl-3">Loading...</span>
            </Button>
          </div>
        ) : (
          <div
            className="my-5"
            style={{ display: "flex", justifyContent: "center" }}
          >
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
        )}

        <Link to="/">
          <div
            className="my-5"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Button outline gradientDuoTone="cyanToBlue">
              <div className="flex justify-center items-center">
              <i className="fa-solid fa-arrow-left me-2 pt-1"></i><span className="text-xl">Back to Home</span>
              </div>
            </Button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Details;
