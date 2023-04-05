import mongoose, { Schema } from "mongoose"

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

  const MoviesSchema: Schema = new Schema({})
  const MoviesModel = mongoose.model< IMovie>("Movie", MoviesSchema)

  export default MoviesModel
  