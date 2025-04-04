import axios from "axios"; 
import React, { useEffect, useState } from "react";
import SiderBar from "../SiderBar";

const options = {
  headers: {
    accept: "application/json",
    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiM2VmMGNhZWExZTU2ODZhN2NhMzUzOTdmMDc5YTA5OSIsIm5iZiI6MTc0MzAwODUzNi42OCwic3ViIjoiNjdlNDMzMTgwZWU1M2Q0ZTcxZjBkMWQ5Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.B6o2T_ut2lUPR_S_fA8KvwP9C6070aQ_8XQnI2mZAsI", 
  },
};

const genres = {
  trending: "https://api.themoviedb.org/3/trending/all/week?language=en-US",
  action: "https://api.themoviedb.org/3/discover/movie?with_genres=28&language=en-US",
  comedy: "https://api.themoviedb.org/3/discover/movie?with_genres=35&language=en-US",
  horror: "https://api.themoviedb.org/3/discover/movie?with_genres=27&language=en-US",
  romance: "https://api.themoviedb.org/3/discover/movie?with_genres=10749&language=en-US",
};

const MovieList = () => {
  const [movies, setMovies] = useState({});
  const [featuredMovie, setFeaturedMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [OpenSideBar, setOpenSideBar] = useState(true);
  
  

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const genreMovies = {};
        
        const genreEntries = Object.entries(genres);
        const responses = await Promise.all(
          genreEntries.map(([genre, url]) => 
            axios.get(url, options)
              .then(response => ({ genre, data: response.data.results }))
              .catch(error => {
                console.error(`Error fetching ${genre} movies:`, error);
                return { genre, data: [], error: true };
              })
          )
        );
        
        responses.forEach(({ genre, data, error }) => {
          genreMovies[genre] = data;
          if (error) {
            console.log(`No movies found for ${genre} category`);
          }
        });
        
        setMovies(genreMovies);
        setFeaturedMovie(genreMovies.trending?.[0] || Object.values(genreMovies)[0]?.[0]);
      } catch (error) {
        console.error("Error fetching movies:", error);
        setError("Failed to load movies. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  const hasMovies = Object.values(movies).some(list => list && list.length > 0);

  return (
    <div className="flex bg-black min-h-screen">
      <div className="absolute inset-0 bg-black/10"></div>

      <SiderBar setOpenSideBar={setOpenSideBar} />

      {/* Main Content */}
      <div className={`  flex-1 overflow-y-auto p-5 ${OpenSideBar ? "ml-[300px]" : "ml-0 w-full"}`}>
        {loading && (
          <div className="flex justify-center items-center h-screen">
            <p className="text-white text-xl">Loading movies...</p>
          </div>
        )}

        {error && (
          <div className="flex justify-center items-center h-screen">
            <p className="text-red-500 text-xl">{error}</p>
          </div>
        )}

        {!loading && !error && !hasMovies && (
          <div className="flex justify-center items-center h-screen">
            <p className="text-white text-xl">No movies found. Please check your API connection.</p>
          </div>
        )}

        {/* Hero Section  */}
        {featuredMovie && (
          <div className="relative w-full h-[70vh] flex items-center justify-center text-center object-cover overflow-hidden mb-8">
            <img
              src={`https://image.tmdb.org/t/p/original${featuredMovie.backdrop_path}`}
              alt={featuredMovie.original_name || featuredMovie.title}
              className="absolute w-full h-full object-cover  rounded"
            />
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="relative z-10 max-w-3xl px-6 text-white">
              <h1 className="text-4xl font-bold">{featuredMovie.original_name || featuredMovie.title}</h1>
              <p className="text-lg mt-4">{featuredMovie.overview || "No description available."}</p>
              <button className="mt-6 bg-green-900 px-6 py-3 rounded-lg font-bold">Watch Now</button>
            </div>
          </div>
        )}

        {/* Movie Rows */}
        <div className="pb-20 w-full "> 
          {Object.entries(movies).map(([genre, movieList]) => (
            movieList && movieList.length > 0 ? (
              <div key={genre} className="mb-10">
                <h2 className="text-white text-2xl font-bold mb-3 capitalize">{genre} Movies</h2>
                <div className="flex overflow-x-auto no-scrollbar space-x-4 p-2">
                  {movieList.map((movie) => (
                    <div key={movie.id} className="w-[200px] flex-shrink-0">
                      <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.original_name || movie.title}
                        className="w-full h-[300px] object-cover rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
                      />
                      <p className="text-white mt-2 text-center truncate px-2">{movie.original_name || movie.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            ) : null
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;