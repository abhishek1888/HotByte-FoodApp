import React from "react";
import ReactDOM from "react-dom/client";
import App from "../src/routes/App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Collection from "../src/routes/Collection";
import Restaurant from "./routes/Restaurant";
import RestaurantDashboard from "./routes/RestaurantDashboard";
import DashboardHotel from "./component/DashboardHotel";
import DashboardMenu from "./component/DashboardMenu";
import DashboardOrder from "./component/DashboardOrder";
import DashboardAddMenu from "./component/DashboardAddMenu";
import Search from "./component/Search";
import SignUp, { createRegisterAction } from "./routes/SignUp";
import Login from "./routes/Login";
import AdminDashboard from "./routes/AdminDashboard";
import RegisterHotel, { registerHotel } from "./component/RegisterHotel";
import DashboardAdmin from "./component/DashboardAdmin";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./store/store";
import { UserAccount } from "./routes/UserAccount";
import Cart from "./routes/Cart";
import OrderList from "./component/OrderList";
import AddressInfo from "./component/AddressInfo";
import AdminViewHotel from "./component/AdminViewHotel";
import AdminViewUser from "./component/AdminViewUser";
import UserProfileUpdate from "./component/UserProfileUpdate";
import { HelpandSupport } from "./component/HelpandSupport";
import { InvalidPage } from "./component/InvalidPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/collections/:name",
    element: <Collection />,
  },
  {
    path: "/restaurants/:id",
    element: <Restaurant />,
  },
  {
    path: "/cart",
    element: <Cart/>,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/signup",
    element: <SignUp />,
    action: createRegisterAction,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path:"/help",
    element:<HelpandSupport/>,
  },
  {
    path: "/dashboard",
    element: <RestaurantDashboard />,
    children: [
      {
        path: "",
        element: <DashboardHotel />,
      },
      {
        path: "menu",
        element: <DashboardMenu />,
      },
      {
        path: "order",
        element: <DashboardOrder />,
      },
      {
        path: "add-menu",
        element: <DashboardAddMenu />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminDashboard />,
    children: [
      {
        path: "",
        element: <DashboardAdmin />,
      },
      {
        path: "register-hotel",
        element: <RegisterHotel />,
        action: registerHotel,
      },
      {
        path: "View-Hotel",
        element: <AdminViewHotel/>
      },
      {
        path: "View-User",
        element: <AdminViewUser/>
      },
    ],
  },
  {
    path: "/account",
    element: <UserAccount/>,
    children: [
      {
        path: "orders",
        element: <OrderList/>,
      },
      
      {
        path: "Addresses",
        element: <AddressInfo/>
      },
      {
        path: "Update_Profile",
        element: <UserProfileUpdate/>
      },
    ],
  },
  {
    path: "*",
    element: <InvalidPage/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
