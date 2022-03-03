import React, { useEffect, useState } from "react";
import env from "react-dotenv";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function AddTheater() {
  let navigate = useNavigate();
  // const params = useParams();
  let [tid, setTid] = useState("");
  let [showScreen, setshowScreen] = useState([]);
  let [checked, setChecked] = useState([]);
  let [name, setName] = useState([]);
  let [rating, setRating] = useState("");
  let [capacity, setCapacity] = useState("");

  let handlSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.post(`${env.API_URL}/theatre/addTheatre`, {
        tid:tid, 
        name,
        rating,
        capacity,
        screens:checked
      });
      // navigate("/showMovie");
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const getScreens = async () => {
    let res = await axios.get(`${env.API_URL}/Screen/getScreens`);
    console.log(res.data);
    setshowScreen(res.data);
    // console.log(movies);
  };
    // Add/Remove checked item from list
  useEffect(() => {
    getScreens();
  }, []);

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

  return (
    <>
      <div className="container">
        <h1>Add Theater</h1>
        <form>
          <div className="mb-3">
            <label className="form-label">Theatre Id</label>
            <input
              type="name"
              className="form-control"
              id="inputScreenId"
              onChange={(e) => setTid(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Theatre Name</label>
            <input
              type="name"
              className="form-control"
              id="inputScreenNo"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Theatre Rating</label>
            <input
              type="name"
              className="form-control"
              id="inputScreenNo"
              onChange={(e) => setRating(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Theatre capacity</label>
            <input
              type="name"
              className="form-control"
              id="inputScreenNo"
              onChange={(e) => setCapacity(e.target.value)}
            />
          </div>
          
         
        </form>

        {showScreen.map((e, i) => {
          return (
            <>
              <input
                value={e._id}
                type="checkbox"
                key={e._id}
                onChange={handleCheck}
              />
              <label>{e.scid}</label>
            </>
          );
        })}
        
        <div>
          <button
            className="btn btn-primary"
            onClick={handlSubmit}
          >
            Assign Theater
          </button>
        </div>
      </div>
    </>
  );
}

export default AddTheater;
