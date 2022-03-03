import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import env from "react-dotenv";

function ViewDetails() {
  let params = useParams();
  let [showTheatre, setTheatres] = useState([]);

  const getTheatre = async () => {
    let res = await axios.get(
      `${env.API_URL}/theatre/getAllTheatre/${params.mname}`
    );
    console.log(res.data);
    setTheatres(res.data);
    console.log(showTheatre);
  };
  // Add/Remove checked item from list
  useEffect(() => {
    getTheatre();
  });

  return (
    <>
      <div>{params.movie}</div>
      <div>
        <h1> About Movie</h1>
      </div>
      {
          showTheatre.map((e,i)=>{
                return(
                    <>
                        <table>
                           
                            <tr>
                                <td>{e.name}</td>
                                <td>{e.screens.map((show,i)=>{
                                    return(
                                        <>
                                            {show.showTime.map((time,i)=>{
                                                return(
                                                    <>
                                                        {time.time}&nbsp;-
                                                    </>
                                                )
                                            })}
                                        </>
                                    )
                                })}</td>
                            </tr>
                        </table>
                    </>
                )
          })
      }
    </>
  );
}

export default ViewDetails;
