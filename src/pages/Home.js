import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../components/Card";
import { fetchMovies } from "../store/action";

function Home() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);
  const [nextPage, setNextPage] = React.useState(2);
  const isNoData = useSelector((state) => state.isNoData);

  window.onscroll = () => {
    const windowHeight =
      "innerHeight" in window
        ? window.innerHeight
        : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    const windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom >= docHeight) {
      console.log("bottom");
      if (!isNoData) {
        //dispatch(fetchMovies(nextPage));
        console.log(nextPage + 1, "<<harunsya");
        let temp = nextPage + 1;
        setNextPage(temp);
        console.log(nextPage, "<<< nextPage inside");
      }
    }
  };

  React.useEffect(() => {
    dispatch(fetchMovies());
    return function cleanUp() {
      dispatch({
        type: "SET_MOVIES",
        payload: [],
      });
    };
  }, []);

  React.useEffect(() => {
    dispatch(fetchMovies(nextPage));
  }, [nextPage]);

  return (
    <React.Fragment>
      <section className="section">
        <h1 className="has-text-centered title is-2">Movies</h1>
        <div className="columns is-multiline is-desktop">
          {movies.map((movie) => {
            return <Card key={movie.id} movie={movie}></Card>;
          })}
        </div>
      </section>
    </React.Fragment>
  );
}

export default Home;
