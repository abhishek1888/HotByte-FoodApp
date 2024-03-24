import React from "react";
import User from "../../public/User.jpeg";
const DashboardAdmin = () => {

  return (
   <div className="col-xxl-3 col-lg-4 col-sm-6 mb-5">
      <div
          class="card"
          style={{
            width: "20rem",
            padding: "0px 20px",
            border: "none",
            margin: "auto",
          }}>
          <img
          src={User}
          class="card-img-top"
          alt="..."
          height="182"
        />
         <div class="card-body">
            <p>Name :Abhishek Negi</p>
          </div>
        </div>
        <div
          class="card"
          style={{
            width: "20rem",
            padding: "0px 20px",
            border: "none",
            margin: "auto",
          }}>
          <img
          src={User}
          class="card-img-top"
          alt="..."
          height="182"
        />
         <div class="card-body">
            <p>Name :Ankit Mahalpure</p>
          </div>
        </div>

   </div>
  )
};

export default DashboardAdmin;
