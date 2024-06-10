// src/ProtectedRoute.js

import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Component, allowedRoles }) => {
  const currentUser = useSelector((state) => state.user.currentUser);

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  const userRole = currentUser.role.authority;

  if (allowedRoles.includes(userRole)) {
    return <Component />;
  } else {
    return <Navigate to="/unauthorized" />;
  }
};

export default ProtectedRoute;
