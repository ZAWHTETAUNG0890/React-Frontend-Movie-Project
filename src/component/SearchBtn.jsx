/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { api, api_key } from '../api'
import { useDispatch } from "react-redux";
import { fetchMovie } from "../redux/action/movies";

const SearchBtn = () => {

  const [movie_name, setMovie_name] = useState('')

  const dispatch = useDispatch()

  const searchMovie =async()=>{
    if (movie_name !== '') {
      const res = await api.get(`/search/movie?query=${movie_name}&api_key=${api_key}`)
      dispatch(fetchMovie(res.data.results))
    }else{
      const mov = await api.get(`/movie/now_playing?api_key=${api_key}`)
      dispatch(fetchMovie(mov.data.results)) 
    }
  }

  return (
    <div>
      <div className="">
        <section className="mx-5 bg-gray-300 dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
            <h1 className="mb-4 text-xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              Welcome
            </h1>
            <p className="mb-8 text-lg font-normal text-gray-800 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
              Millions of movies, TV shows and people to discover. Explore now.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
              <div className="flex flex-col mt-8 space-y-3 sm:-mx-2 sm:flex-row sm:justify-center sm:space-y-0">
                <input
                  type="text"
                  value={movie_name}
                  onChange={(e)=>setMovie_name(e.target.value)}
                  className=" px-6 py-3 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-gray-400 focus:ring-gray-300 focus:ring-opacity-40 dark:focus:border-gray-300 focus:outline-none focus:ring sm:mx-2"
                  placeholder="Enter Movies..."
                />

                <button
                type="button" 
                onClick={()=>searchMovie()}
                className="px-8 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-500 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none sm:mx-2">
                  Search
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SearchBtn;
