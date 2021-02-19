import axios from "axios";
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
  const [imgUrl, setImgUrl] = React.useState("");

  const checkUrl = () => {
    axios({
      url: imgPrefix + props.movie.poster_path,
    })
      .then((res) => {
        setImgUrl(imgPrefix + props.movie.poster_path);
      })
      .catch((err) => {
        setImgUrl("https://bulma.io/images/placeholders/320x480.png");
      });
  };

  React.useEffect(() => {
    checkUrl();
  }, []);
  const detail = (
    <div className="card-content">
      <div className="media">
        <div className="media-content">
          <p className="title is-5">{props.movie.original_title}</p>
          <p className="subtitle is-6">{year}</p>
        </div>
      </div>
    </div>
  );
  return (
    <div className="column is-one-fifth">
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by2">
            <Link
              to={`/detail/${props.movie.id}`}
              onClick={() => handleClick(props.movie.id)}
            >
              <img src={imgUrl} alt="Placeholder image" />
            </Link>
          </figure>
        </div>
        {props.isSimilar ? "" : detail}
      </div>
    </div>
  );
}

export default Card;
