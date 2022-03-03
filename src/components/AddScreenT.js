import React, { useEffect, useState } from "react";
import env from "react-dotenv";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function AddScreenT() {
  let [showTheatre, setTheatres] = useState([]);
  let navigate = useNavigate();
  let [theatreName, setThreatreName] = useState("");

  const getTheatre = async () => {
    let res = await axios.get(`${env.API_URL}/theatre/getTheatres`);
    console.log(res.data);
    setTheatres(res.data);
    // console.log(movies);
  };
  // Add/Remove checked item from list
  useEffect(() => {
    getTheatre();
  }, []);

  return (
    <div>
      {showTheatre.map((e, i) => {
        return (
          <>
            <div className="card" style={{ width: "18rem;" }}>
              <div className="card-body">
                <h5 className="card-title">{e.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{e.name}</h6>
                <span className="card-text">Rating:&nbsp;&nbsp;</span>
                <span className="card-text">{e.rating}</span>
                <div>
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      navigate(`/addScreen/${e.tid}/${e.name}`);
                      setThreatreName(e.name);
                      //   <Link to={`/addScreen/${e._id}`} value={theatreName}></Link>
                    }}
                  >
                    Assign Screen
                  </button>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default AddScreenT;
