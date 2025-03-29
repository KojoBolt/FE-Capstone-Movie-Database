// import React, { useEffect, useState } from 'react'
// // import { apiClient } from '../../api/api-client';

// // export default MovieRow


// {/* <div>
//         <h2 className='text-white p-6 font-bold md: text-4xl'> {title} </h2>
//         <div className='relative flex items-center'>
//           <div id={'slider'}>
//             <h2 className='text-white'> David </h2>
//           </div>
//         </div>
//     </div> */}

//     function MovieList() {
//       const [movieList, setMovieList] = useState([]);
    
//       const movies =
//         movieList.length > 0
//           ? movieList[Math.floor(Math.random() * movieList.length)]
//           : [];
    
//       useEffect(() => {
//         apiClient
//           .get(fetcher.fetchPopular)
//           .then((response) => {
//             if (response.data && response.data.results) {
//               setMovieList(response.data.results);
//             } else {
//               console.error("Error: response.data.results is undefined");
//             }
//           })
//           .catch((error) => console.error("Error fetching movies:", error));
//       }, []);
     
    
//       const truncateString = (str, num) => {
//         if (str?.length > num) {
//           return str.slice(0, num) + "...";
//         } else {
//           return str;
//         }
//       };
    
//       return (
//         <div className="flex bg-black h-screen">
//           <div className="absolute inset-0 bg-black/10"></div>
//           <div className="w-[300px] h-screen bg-[rgb(33,32,30)] fixed top-0 left-0 p-5">
      
//             <div className="mt-12">
//               <ul>
//                 {MovieData.map((val, key) => (
//                   <li
//                     className="flex flex-row text-white p-4 gap-4 cursor-pointer"
//                     key={key}
//                     onClick={() => {
//                       window.location.pathname = val.link;
//                     }}
//                   >
//                     <div>{val.icon}</div>
//                     <div>{val.title}</div>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
    
//           <div className="ml-[300px] flex-1 overflow-y-auto p-5">
//             <div className="text-white relative ">
//               {movies && (
//                 <div className="relative w-full h-[85vh] border-8 rounded-2xl border-gray-300">
    
//                   <img
//                     className="w-[100%] h-full object-cover"
//                     src={`https://image.tmdb.org/t/p/original/${movies?.backdrop_path}`}
//                     alt={movies.title}
//                   />
    
                  
//                   <div className="absolute bottom-10 left-10 bg-opacity-50 p-6 rounded-lg ">
//                     <h2 className="text-4xl font-bold text-white">{movies.name}</h2>
//                     <p className="text-white font-bold bg-green-800 py-1 px-4 rounded-lg inline-block my-2">
//                       Date: {movies?.first_air_date}
//                     </p>
//                     <p className="text-white">{truncateString(movies?.overview, 100)}</p>
    
//                     <div className="flex gap-6 mt-4">
//                       <button className="bg-[#2D3986] text-white py-3 px-6 rounded">
//                         Watch Now
//                       </button>
//                       <Heart className="w-12 h-12 text-purple-600 bg-white border-2 rounded-2xl p-2 cursor-pointer" />
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
    
//             {/* Movie Rows */}
//             <MovieRow title="Trending" fetchURL={fetcher.fetchTrending} />
//             <MovieRow title="Favorite" fetchURL={fetcher.fetchFavourite} />
//             <MovieRow title="Top Rated" fetchURL={fetcher.TopRated} />
//             <MovieRow title="Popular" fetchURL={fetcher.fetchPopular} />
//           </div>
//         </div>
//       );
//     }