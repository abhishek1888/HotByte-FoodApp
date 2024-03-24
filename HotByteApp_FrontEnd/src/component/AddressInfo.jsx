// AddressDisplay.js
import React from 'react';
import { useSelector } from 'react-redux';

const AddressInfo = () => {
  const realUser = useSelector((state) => state.realUser.currentRealUser)
  return (
    <div className="address-display" style={{ width: "100%" }}>
    <div
      class="p-5 mb-4 bg-body-tertiary rounded-3"
      style={{ width: "100%" }}
    >
      <div class="container-fluid py-5">
        <h1 class="display-5 fw-bold">Address</h1>
        <p class="col-md-8 fs-4">Street 2: {{...realUser.address}.street2}</p>
        <p class="col-md-8 fs-4">Landmark: {{...realUser.address}.landmark}</p>
        <p class="col-md-8 fs-4">City: {{...realUser.address}.city}</p>
        <p class="col-md-8 fs-4">Postal Code: {{...realUser.address}.postalCode}</p>
        <button class="btn btn-primary btn-lg" type="button">
          Edit
        </button>
      </div>
    </div>
  </div>
  );
};

export default AddressInfo;
