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
            <h1>Movie list</h1>
        <div className='grid grid-rows-4 grid-flow-col gap-4'>
            {movies.map((movie: IMovie, index) => (
              <div>
               <img src={movie.poster} alt="" className='w-2/6'/>
               <h2>{movie.title}</h2>
               </div>
            ))}
        </div>
        </div>
      );
  }
  
export default Movies;
