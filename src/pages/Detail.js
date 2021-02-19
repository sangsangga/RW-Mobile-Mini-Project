import React from "react";
import { useParams } from "react-router-dom";
import { fetchDetail, fetchSimilarMovies } from "../store/action";
import "../Detail.css";
import Card from "../components/Card";
import axios from "axios";

function Detail() {
  const imgPrefix = "https://image.tmdb.org/t/p/w500";
  const { id } = useParams();
  const movie = useSelector((state) => state.detailMovie);
  const relatedMovies = useSelector((state) => state.relatedMovies);
  const year = movie.release_date ? movie.release_date.split("-")[0] : "";

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [movie]);
  return (
    <React.Fragment>
      <section className="section">
        <div className="columns">
          <div className="column">
            <img src={imgPrefix + movie.poster_path} className="image" />
          </div>
          <div className="column">
            <h1 className="title has-text-centered">{movie.original_title}</h1>
            <h2 className="subtitle has-text-centered">{year}</h2>
            <p className="subtitle has-text-centered">{movie.overview}</p>
          </div>
        </div>
      </section>
      <section className="section">
        <h1 className="title has-text-centered">Related Movies</h1>
        <div className="columns is-multiline is-desktop">
          {relatedMovies.map((movie) => {
            return <Card key={movie.id} movie={movie} isSimilar={true} />;
          })}
        </div>
      </section>
    </React.Fragment>
  );
}

export default Detail;
