import React from "react";
import User from "../../public/User.jpeg";
const DashboardAdmin = () => {

  return (
   <div className="row ">
   <div className="col-xxl-3 col-lg-4 col-sm-6 mb-5 me-5">
      <div
          class="card"
          style={{
            width: "20rem",
            padding: "0px 20px",
            border: "5px solid black",
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
            <p>Email :abhinegi188@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="col-xxl-3 col-lg-4 col-sm-6 mb-5">
        <div
          class="card"
          style={{
            width: "20rem",
            padding: "0px 20px",
            border: "5px solid black",
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
            <p> Email :ankitmahalpure@gmail.com</p>
          </div>
        </div>
      
   </div>
   </div>
  )
};

export default DashboardAdmin;
