import React, { useEffect, useState } from "react";
import env from "react-dotenv";
import {  useParams } from "react-router-dom";
import axios from "axios";

function ShowTime() {
  const params = useParams();
  let [showTime, setShowTime] = useState([]);
  let [scid, setscid] = useState("");
  let [checked, setChecked] = useState([]);
  let [screenNo, setscreenNo] = useState("");

  console.log(`${env.API_URL}/show/getShows`);
  const getMovies = async () => {
    let res = await axios.get(`${env.API_URL}/show/getShows`);
    console.log(res.data);
    setShowTime(res.data);

    // console.log(movies);
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.post(`${env.API_URL}/screen/addScreen`, {
        scid:scid,
        screenNo:screenNo,
        movie: params.mid,
        showTime: checked,
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  //   Add/Remove checked item from list

  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
      console.log(updatedList);
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
      console.log(updatedList);
    }
    setChecked(updatedList);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <div className="container">
        <h1>Add Screen</h1>
        <form>
          <div className="mb-3">
            <label className="form-label">Screen Id</label>
            <input
              type="name"
              className="form-control"
              id="inputScreenId"
              onChange={(e) => setscid(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Screen Number</label>
            <input
              type="name"
              className="form-control"
              id="inputScreenNo"
              onChange={(e) => setscreenNo(e.target.value)}
            />
          </div>
        </form>
        {showTime.map((e, i) => {
          return (
            <>
              <input
                value={e._id}
                type="checkbox"
                key={e._id}
                onChange={handleCheck}
              />
              <label>{e.time}</label>
            </>
          );
        })}
        <div>
          <button className="btn btn-primary" onClick={handleSubmit}>Add screen</button>
        </div>
          <br></br>
      </div>
    </>
  );
}

export default ShowTime;
