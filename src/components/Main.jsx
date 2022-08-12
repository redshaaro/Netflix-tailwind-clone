import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import requests from "./Requestes";






const Main = () => {
  



  const [movies, setMovies] = useState([]);

  const getMovies = () => {
    axios.get(requests.requestPop).then((res) => {
      setMovies(res.data.results);
    });
  };

  useEffect(() => {
    getMovies();
  }, []);
  let movie = movies[Math.floor(Math.random() * movies.length)];
  console.log(movie);

  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
        <img
          className="h-full w-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
      </div>
      <div className="absolute w-full p-4 top-[20%] md:p-8 ">
        <h1 className="text-3xl md:text-5xl font-bold">{movie?.title}</h1>


      <div className="my-4">
        <button className="px-5 py-2 border-gray-300 bg-gray-300 text-black border ">Play</button>
        <button className="px-5 py-2 border-gray-300   text-white border ml-4">Watch Later</button>


      </div>
      <p className="text-gray-400 text-sm">Released: {movie?.release_date}</p>
      <p className="w-full md:max-w[70%] lg:max-w[50%] xl:max-w[35%] text-grey-200">{movie?.overview}</p>


      </div>



    </div>
  );
};

export default Main;
