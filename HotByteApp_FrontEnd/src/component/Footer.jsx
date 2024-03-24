import React, { useState } from "react";
import  './Footer.css'

const Footer = () => {

  const [selectedCity, setSelectedCity] = useState('');
  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };
  return (
    <div >
      <div className="footer-container" style={{marginBottom: "0"}} >
        <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-4 py-5 border-top " style={{margin:"0px 150px 0px 150px"}}>
          <div className="col mb-3  white-text">
            <a href="/" className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
              <svg className="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
            </a>
            <p>@ HotByte 2024 Technologies Private limited.</p>
          </div>

          <div className="col mb-3">
            <h5 className="white-text">Company</h5>
            <ul className="nav flex-column  white-text">
              <li className="nav-item">About</li>
              <li className="nav-item mb-2">Careers</li>
              <li className="nav-item mb-2">Team</li>
            </ul>
          </div>

          <div className="col mb-3 ">
            <h5 className="white-text">Contact us</h5>
            <ul className="nav flex-column white-text">
              <li className="nav-item mb-2">Help and Support</li>
              <li className="nav-item mb-2">Partner with us</li>
              <li className="nav-item mb-2">Ride with us</li>
            </ul> 
                <div className="Legal">
                  <h5 className="white-text">Legal</h5>
                  <ul className="nav flex-column white-text">
                    <li className="nav-item mb-2">Terms & Conditions</li>
                    <li className="nav-item mb-2">Cookie Policy</li>
                    <li className="nav-item mb-2">Privacy</li>
                  </ul>
                </div>
          </div>

          

          <div className="col mb-3">
            <h5 className="white-text">We deliver to:</h5>
            <ul className="nav flex-column white-text">
              <li className="nav-item mb-2">Banglore</li>
              <li className="nav-item mb-2">Hyderabad</li>
              <li className="nav-item mb-2">Uttarakhand</li>
              <li className="nav-item mb-2">Pune</li>
              <select value={selectedCity} onChange={handleCityChange}>
                <option value="">Other cities</option>
                <option value="Delhi">Delhi</option>
                <option value="Mumbai">Mumbai</option>
              </select>
            </ul>
          </div>
        </footer>
      </div>
    </div>
    

  );
};

export default Footer;
