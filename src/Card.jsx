import { useState } from 'react';
import { useEffect } from 'react';

function Card() {
  const [movieList, setMovieList] = useState([]);
  const getMovie = () => {
    fetch(
      'https://api.themoviedb.org/3/movie/top_rated?api_key=60dc43618699f4f489728cb8b5831736'
    )
      .then((res) => res.json())
      .then((json) => setMovieList(json.results));
  };
  useEffect(() => {
    getMovie();
  }, []);
  console.log(movieList);

  return (
    <div className='w-full flex xl:flex-row flex-wrap justify-center min-h-screen gap-4 max-container text-white pb-5'>
      {movieList.map((movie) => (
        <div
          className='w-40 border-blue-300 text-center bg-cyan-600 pb-4 rounded-lg '
          key={movie.id}
        >
          <div className='relative overflow-hidden '>
            <div className='relative overflow-hidden group'>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt=''
                className='rounded-t-lg'
              />
              <p className='bg-cyan-500 text-black absolute max-h-full translate-y-[101%] overflow-y-auto transition-transform duration-[0.5s] ease-[ease-in] p-4 bottom-0 inset-x-0 rounded-t-lg group-hover:translate-y-0 font-mono'>
                <strong className=' font-bold'>{movie.title}:</strong> <br />
                {movie.overview}
              </p>
            </div>
            <div>
              <button className=' font-mono font-bold'>{movie.title}</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
