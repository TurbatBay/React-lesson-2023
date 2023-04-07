import React, { useState, useEffect } from 'react';

const URL = 'http://localhost:8282/movies/list';

interface IMovie {
    _id: string;
    title: string;
    year: number;
    runtime: number;
    released: Date;
    cast: string[];
    plot: string;
    fullplot: string;
    lastupdated: Date;
    type: string;
    directors: string[];
    imdb: IMDB;
    countries: string[];
    genres: string[];
    rated: string;
    num_mflix_comments: number;
    poster?: string;
    awards?: IAwards;
    tomatoes?: ITomatoes;
    metacritic?: number;
    comments?: IComment[];
  }
  
  interface IMDB {
    rating: number;
    votes: number;
    id: number;
  }
  
  interface IAwards {
    wins: number;
    nominations: number;
    text: string;
  }
  
  interface ITomatoes {
    viewer: ITomatoesRating;
    dvd: Date;
    critic: ITomatoesRating;
    lastUpdated: Date;
    rotten: number;
    fresh: number;
    consensus: string;
    production?: string;
  }
  
  interface ITomatoesRating {
    rating: number;
    numReviews: number;
    meter: number;
  }
  
  interface IComment {
    name: string;
    email: string;
    movie_id: string;
    text: string;
    date: Date;
  }
  

  const Movies = (): JSX.Element => {
    const [movies, setMovies] = useState<IMovie[]>([])

    useEffect(() => {
        fetchMovies();
      }, []);
    
      const fetchMovies = async (): Promise<void> => {
        const fetchedData = await fetch(URL);
        const fetchedJson = await fetchedData.json();
        console.log(fetchedJson)
        setMovies(fetchedJson);
      };
      return (
        <div className='box-border max-w-7xl mx-auto'>
  <h1 className="text-4xl font-bold mb-6">Movie list</h1>
  <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
    {movies.map((movie: IMovie, index) => (
      <div key={index} className='flex flex-col rounded-lg shadow-md bg-white overflow-hidden'>
        <div className='relative'>
          <img src={!movie.poster ? "/zomboiessd.png" : movie.poster} alt={movie.title} className='object-cover h-96 w-full rounded-t-lg' />
          <div className='flex items-center'>
            <img src="/rotten-tomatoes-rating-icons-1@2x.png" alt="" className='object-cover h-5 w-5 rounded-t-lg'/>
            <p className="text-black-700  ">{`: ${movie.tomatoes.viewer.meter ? movie.tomatoes.viewer.meter : '0'}%`}</p>
          </div>
          <h2 className="font-size: .875rem;
            line-height: 1.4;
            margin-bottom: 0.625rem;">{movie.title}
            </h2>
          
          
        </div>
        
      </div>
    ))}
  </div>
</div>


      );
  }
  
export default Movies;
