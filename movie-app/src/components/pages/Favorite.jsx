import axios from "axios";
import React, { useEffect, useState } from "react";
import SiderBar from "../SiderBar";
import GradeIcon from '@mui/icons-material/Grade';

const options = {
  headers: {
    accept: "application/json",
    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiM2VmMGNhZWExZTU2ODZhN2NhMzUzOTdmMDc5YTA5OSIsIm5iZiI6MTc0MzAwODUzNi42OCwic3ViIjoiNjdlNDMzMTgwZWU1M2Q0ZTcxZjBkMWQ5Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.B6o2T_ut2lUPR_S_fA8KvwP9C6070aQ_8XQnI2mZAsI",
  },
};

const genres = {
  favorite: "https://api.themoviedb.org/3/movie/now_playing?api_key=b3ef0caea1e5686a7ca35397f079a099",
};

const Favorite = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [OpenSideBar, setOpenSideBar] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(5); 

  const fetchFav = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${genres.favorite}&page=${currentPage}`);
      setMovies(response.data.results);
    } catch (error) {
      setError(error);
      console.error("Error fetching movies:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFav();
  }, [currentPage]);

 
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

 
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) return <h1 className="h-screen flex justify-center items-center">Loading...</h1>;
  if (error) return <h1>Error fetching movies</h1>;

  return (
    <div className="bg-black overflow-scroll h-screen w-full">
      <SiderBar setOpenSideBar={setOpenSideBar} />
      
      
      <div className={`flex flex-wrap gap-6 p-8 transition-all duration-300  ${OpenSideBar ? "ml-[250px]" : "ml-0 w-full justify-center"}`}>
        {movies.slice(0, 3).map((movie) => (
          <div key={movie.id} className=" md:ml-[100px] lg:ml-[100px] xl:ml-[100px] 2xl:ml-[100px]  rounded-xl w-50 hover:scale-105 transition-transform duration-300">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.original_title}
              className="w-full h-auto object-cover rounded-xl"
            />
            <div className="p-4 text-white">
              <h2 className="text-lg font-semibold">{movie.title}</h2>
              <p className="text-sm text-gray-400">
                {movie.release_date?.slice(0, 4)} | {movie.genre_ids[0] || "Genre"}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      
      <div className={`${OpenSideBar ? "ml-[400px]" : "ml-0"}`}>
        {currentMovies.map((movie) => (
          <div key={movie.id} className="flex flex-wrap gap-6 p-8 transition-all duration-300 m-auto">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
              alt={movie.title}
              className="w-[400px] h-[auto] rounded-lg object-cover"
            />
            <div className="flex flex-col justify-start">
              <h1 className="text-2xl font-bold">{movie.title}</h1>
              <p className="text-sm text-white font-bold">
                {movie.release_date?.slice(0, 4)}  
                <GradeIcon className="ml-[300px] text-[#ffbf00]"/> 
                {movie.vote_average}/10
              </p>
              <p className="mt-4 max-w-md text-gray-300">{movie.overview}</p>
              <div className="mt-4 flex gap-4">
                <button className="bg-green-900 px-4 py-2 rounded-full text-white">Watch now</button>
                <button className="bg-white px-4 py-2 rounded-full text-green-700">♥</button>
              </div>
            </div>
          </div>
        ))}
        
        
        <div className="flex justify-center gap-2 pb-8">
          {Array.from({ length: Math.ceil(movies.length / moviesPerPage) }).map((_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={`px-4 py-2 rounded-full ${currentPage === index + 1 ? 'bg-green-900 text-white' : 'bg-gray-700 text-white'}`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorite;