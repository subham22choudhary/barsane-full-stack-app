import React, { useState, useEffect } from "react";
import "./bookpuja.css";
import images from "../img/";

export default function Bookpuja() {
  const [data, setData] = useState([]);

  // Get Method
  const apiGet = () => {
    fetch("http://localhost:5000/api/getData")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
  };

  useEffect(() => {
    apiGet();
  }, []); // Fetch data on component mount

  return (
    <>
      <button onClick={apiGet}>Fetch API</button>

      <div>
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              {item.id}, {item.name}, {item.email}, {item.Phone}
            </li>
          ))}
        </ul>
      </div>

      <section className="section-1">
        <div className="container">
          <h1 className="text-center">Our Available Pandits</h1>

          <div className="row">
            {data.map((item) => (
              <div key={item.id} className="card-pandit text-center col-md-3 col-12">
                <div>
                  <img src={images[2]} className="img-fluid img3" alt="Image" />
                </div>
                <div>
                  <h4>
                    Name: <span className="pandit-name">{item.name}</span>
                  </h4>
                  <h5>
                    Puja Type: <span className="puja-type">{item.id}</span>
                  </h5>
                </div>
                <h4>Book Now</h4>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
