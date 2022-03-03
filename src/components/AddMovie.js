import React, { useState } from "react";
import env from "react-dotenv";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddMovie() {
  let navigate = useNavigate();
  let [id, setId] = useState("");
  let [name, setName] = useState("");
  let [summary, setSummary] = useState("");
  let [rating, setRating] = useState("");
  let [posterpath, setPosterpath] = useState("");
  let [runtime, setRuntime] = useState("");

  console.log(`${env.API_URL}/movie/addMovie`);
  let handlSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.post(`${env.API_URL}/movie/addMovie`, {
        mid:id, 
         name,
        summary,
        rating,
        posterpath,
        runtime
      });
      navigate("/showMovie");
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container">
        <h1>Add movie</h1>
        <form>
          <div className="mb-3">
            <label className="form-label">Movie Id</label>
            <input
              type="name"
              className="form-control"
              id="exampleInputEmail1"
              onChange={(e) => setId(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Movie Name</label>
            <input
              type="name"
              className="form-control"
              id="exampleInputEmail1"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Movie Summary</label>
            <input
              type="name"
              className="form-control"
              id="Moviesummary"
              onChange={(e) => setSummary(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Movie Rating</label>
            <input
              type="name"
              className="form-control"
              id="Moviesummary"
              onChange={(e) => setRating(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Movie posterpath</label>
            <input
              type="name"
              className="form-control"
              id="MoviePath"
              onChange={(e) => setPosterpath(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Movie runtime</label>
            <input
              type="name"
              className="form-control"
              id="MovieRuntime"
              onChange={(e) => setRuntime(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={handlSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default AddMovie;
