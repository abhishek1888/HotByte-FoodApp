import React from "react";
import { useSelector } from "react-redux";

const RestaurantDashboardFooter = () => {
  const hotel = useSelector((state) => state.hotel.currentHotel);
  if (!hotel) {
    // Data is not yet loaded, you can show a loader or a message
    return <div>Loading...</div>;
  }
  return (
    <div style={{ backgroundColor: "#f1f1f6" }}>
      <div>
        <div class="RestaurantLicence_licence" aria-hidden="true">
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_120,h_60/fssai_final_edss9i"
            class="RestaurantLicence_image"
            alt="FSSAI"
          />
          <p class="RestaurantLicence_licenceText">
            License No. 11523034000031
          </p>
        </div>
      </div>
      <div style={{ padding: "50px" }}>
        <p>{hotel.hotelName}</p>
        <p>{{ ...hotel.hotelAddress }.city}</p>
      </div>
    </div>
  );
};

export default RestaurantDashboardFooter;