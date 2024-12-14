/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import Movies from './Movies'
import { api, api_key } from '../api'
import { useDispatch } from 'react-redux'
import { fetchMovie } from '../redux/action/movies'
import SearchBtn from './SearchBtn'

const Home = () => {

  const dispatch = useDispatch()

  const getMovies = async() =>{
    const mov = await api.get(`/movie/now_playing?api_key=${api_key}`)
    dispatch(fetchMovie(mov.data.results))    
  }

  useEffect( ()=>{
    getMovies();
  }, [] )

  return (
    <div className=''>
        <SearchBtn/>
        <Movies/>
    </div>
  )
}

export default Home