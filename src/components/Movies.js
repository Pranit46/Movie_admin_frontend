import axios from "axios";
import React, { useEffect, useState } from "react";
import env from "react-dotenv";
import { useNavigate } from "react-router-dom";

function Movies() {
  let [movies, setMovies] = useState([]);
  let navigate = useNavigate();
  useEffect(() => {
    getMovies();
  }, []);

  // console.log(env.API_URL_showmovie);

  const getMovies = async () => {
    let res = await axios.get(env.API_URL + "/movie/getMovies");
    console.log(res.data);
    setMovies(res.data);
    // console.log(movies);
  };

  return (
    <>
      <h1>{movies.name}</h1>
      <div className="main_container">
        {/* {movies.map((e, i) => {
          return (
            <>
              <div key={e._id}>
                <div>{e.name}</div>
                <button
                  className="btn btn-primary"
                  onClick={() => navigate("/addShow/" + e._id)}
                >
                  View Details
                </button>
              </div>
            </>
          );
        })} */}
        {movies.map((e, i) => {
          return (
            <>
              <div class="card" style={{ width: "5rem;" }} key={e._id}>
                <img class="card-img-top" src={e.posterpath} alt="Card1" />
                <div class="card-body">
                  <h5 class="card-title">{e.name}</h5>
                  <p class="card-text">{e.summary}</p>
                  <button
                    className="btn btn-sm btn-primary"
                    onClick={() => navigate("/addShow/" + e._id)}
                  >
                    Assign Screen
                  </button>
                  <br/><br/>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => navigate("/viewDetails/" + e.name)}
                  >
                    Book Show
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Movies;
