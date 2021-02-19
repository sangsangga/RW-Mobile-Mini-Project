import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchDetail, fetchSimilarMovies } from "../store/action";

function Card(props) {
  const imgPrefix = "https://image.tmdb.org/t/p/w500";
  const year = props.movie.release_date
    ? props.movie.release_date.split("-")[0]
    : "";
  const dispatch = useDispatch();
  const handleClick = (id) => {
    dispatch(fetchDetail(id));
    dispatch(fetchSimilarMovies(id));
  };
  return (
    <div className="column is-one-fifth">
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by2">
            <Link
              to={`/detail/${props.movie.id}`}
              onClick={() => handleClick(props.movie.id)}
            >
              <img
                src={imgPrefix + props.movie.poster_path}
                alt="Placeholder image"
              />
            </Link>
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-5">{props.movie.original_title}</p>
              <p className="subtitle is-6">{year}</p>
            </div>
          </div>

          {/* <div class="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            nec iaculis mauris. <a>@bulmaio</a>.<a href="#">#css</a>{" "}
            <a href="#">#responsive</a>
            <br />
            <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Card;
