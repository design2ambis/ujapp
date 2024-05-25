import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const RandomProducts = () => {
  var [random, setRandom] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const raw = await fetch(
          "https://utsarvajewels.com/api/crud?get_random_ten"
        );
        const json = await raw.json();
        if (json.status.status === 200) {
          setRandom(json.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {random.map((ran, index) => (
        <div className="text-dark col-6 px-0 border-bottom border-end position-relative" key={index}>
          <Link
            to={`/product/${ran.design_no}`}
            className="list_item_gird m-0 bg-white listing-item"
          >
            {/*<span class="badge bg-success m-3 position-absolute">20% OFF</span>*/}
            <div className="list-item-img p-4">
              <img
                src={ran.design_image}
                alt={ran.design_no}
                title={ran.design_no}
                className="img-fluid p-3"
              />
            </div>

            <div className="tic-div px-3 pb-3" style={{textAlign:'center'}}>
              <p className="mb-1 text-black">                
                {ran.design_no}
              </p>
              <h6 className="card-title mt-2 mb-3 text-success fw-bold">
                Weight: {ran.design_weight}{" "}
              </h6>
            </div>

          </Link>
          {/* <div className="text-center mb-3">
            <a
              href="#!"
              // onclick="addtocartHome('<?php echo $row['design_id'] ?>')"
              className="btn btn-success shadow"
            >
              Add To Cart
            </a>
          </div> */}
        </div>
      ))}
    </>
  );
};

export default RandomProducts;
