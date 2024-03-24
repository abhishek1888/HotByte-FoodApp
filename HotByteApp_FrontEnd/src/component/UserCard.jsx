import React from "react";
import User from "../../public/User.jpeg";
const UserCard = (props) => {
  return (
    <div className="col-xxl-3 col-lg-4 col-sm-6 mb-4">
        <div
          class="card"
          style={{
            width: "18rem",
            padding: "0px 20px",
            border: "2px solid",
            borderRadius: "10px",
            margin: "auto",
          }}
        >
          <img
            src={User}
            class="card-img-top"
            alt="..."
            height="182"
          />
          <div class="card-body">
            <div> <strong>{props.username}</strong></div>
            <div> <strong>{props.email}</strong></div>
            <div> <strong>{props.userGender}</strong></div>
            <div> <strong>{props.userContactNumber}</strong></div>
            <div> <strong>{{ ...props.address }.street2}</strong></div>
            <div> <strong>{{ ...props.address }.landmark}</strong></div>
            <div> <strong>{{ ...props.address }.city}</strong></div>
          </div>
        </div>
    </div>
  );
};

export default UserCard;