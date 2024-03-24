import React from "react";
import { Link } from "react-router-dom";

const HotelCard = (props) => {
  return (
    <div className="col-xxl-3 col-lg-4 col-sm-6">
      <Link to={`/restaurants/${props.hotelId}`} style={{textDecoration:"none"}}>
        <div
          class="card"
          style={{
            width: "18rem",
            padding: "0px 20px",
            border: "none",
            margin: "auto",
          }}
        >
          <img
           
            src={props.hotelImagesList}
            class="card-img-top"
            alt="..."
            height="182"
          />
          <div class="card-body">
            <div>{props.hotelName}</div>
            <div>{props.hotelRating}</div>
            <div>{{ ...props.hotelAddress }.street1}</div>
            <div>{{ ...props.hotelAddress }.street2}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default HotelCard;
