import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import env from "react-dotenv";

function AssignScreenT() {
  let params = useParams();
  let [showScreen, setshowScreen] = useState([]);
  let [checked, setChecked] = useState([]);

  let handlSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.put(`${env.API_URL}/theatre/getTheatre/${params.id}`, {
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
      <div>Add the Screens for: {params.tname}</div>
      <div>
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
      </div>
      <div>
          <button
            className="btn btn-primary"
            onClick={handlSubmit}
          >
            Assign Theater
          </button>
        </div>
    </>
  );
}

export default AssignScreenT;
