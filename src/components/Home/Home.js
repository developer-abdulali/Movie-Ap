import React, { useEffect } from "react";
import MovieListing from "../../components/MovieListing/MovieListing";
import MovieApi from "../../common/api/MovieApi";
import { ApiKey } from "../../common/api/MovieApiKey";
import { useDispatch } from "react-redux";
import { addMovies } from "../../features/movies/movieSlice";

const Home = () => {
  const movieText = "Harry";
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await MovieApi.get(
        `?apiKey=${ApiKey}&s=${movieText}&type=movie`
      ).catch((error) => {
        console.log("Error:", error);
      });
      dispatch(addMovies(response.data));
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
