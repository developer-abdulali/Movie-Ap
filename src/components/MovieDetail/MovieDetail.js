import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncMovieOrShowDetail,
  getSelectdMovieOrShow,
  removeSelectedMovieOrShow,
} from "../../features/movies/movieSlice";
import "./MovieDetail.scss";
import {
  faStar,
  faThumbsUp,
  faFilm,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MovieDetail = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectdMovieOrShow);
  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowDetail(imdbID));
    return () => {
      dispatch(removeSelectedMovieOrShow());
    };
  }, [dispatch, imdbID]);
  return (
    <div className="movie-section">
      {Object.keys(data).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <>
          <div className="section-left">
            <div className="movie-title">{data.Title}</div>
            <div className="movie-rating">
              <span>
                IMDB Rating <FontAwesomeIcon icon={faStar} className="star" /> :
                <span className="rating">
                {data.imdbRating}
                </span>
              </span>
              <span>
                IMDB Votes
                <FontAwesomeIcon icon={faThumbsUp} className="thumb" /> :
                {data.imdbVotes}
              </span>
              <span>
                Runtime <FontAwesomeIcon icon={faFilm} className="film" /> :
                {data.Runtime}
              </span>
              <span className="imdb">
                IMDB Rating
                <FontAwesomeIcon icon={faCalendar} className="calendar" /> :
                {data.Year}
              </span>
            </div>

            <div className="movie-plot">{data.Plot}</div>
            <div className="movie-info">
              <div>
                <span>Director</span>
                <span>{data.Director}</span>
              </div>
              <div>
                <span>Star</span>
                <span>{data.Actors}</span>
              </div>
              <div>
                <span>Generes</span>
                <span>{data.Genre}</span>
              </div>
              <div>
                <span>Languages</span>
                <span>{data.Language}</span>
              </div>
              <div>
                <span>Awards</span>
                <span>{data.Awards}</span>
              </div>
            </div>
          </div>
          <div className="section-right">
            <img src={data.Poster} alt={data.Title} className="poster" />
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetail;
