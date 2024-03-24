import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { FiHelpCircle } from "react-icons/fi";
import { BsCart } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import LOGO from "../../public/LOGO.png";
import { useDispatch, useSelector } from "react-redux";
import { setCity } from "../store/cityRedux";

const Header = () => {
  const User = useSelector((state) => state.user.currentUser);
  const [isOpen, setIsOpen] = useState(false);
  
  const dispatch = useDispatch();
  const city=useSelector((state)=>state.city.city);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleItemClick = (item) => {
    dispatch(setCity(item));
    toggleDropdown();
  };
  return (
    <div>
      <div class="container">
        <header class="d-flex flex-wrap justify-content-center py-3 border-bottom">
          <a
            href="/"
            class=" align-items-center mb-3 mb-md-0 header-margin link-body-emphasis text-decoration-none"
          >
            <img src={LOGO} alt="" style={{ height: "40px" }} />
            <span class="fs-4">HotByte</span>
          </a>
          <div
            style={{
              display: "flex",
              marginRight: "280px",
              paddingTop: "2px",
            }}
          >
            <div class="dropdown">
              <button
                class="btn btn-primary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                onClick={toggleDropdown}
              >
                {city ? city : "Select City"}
              </button>
              {isOpen && (
                <ul
                  class="dropdown-menu dropdown-menu-dark"
                  style={{
                    display: "block",
                    position: "absolute",
                    top: "100%",
                    left: "0",
                  }}
                >
                  <li>
                    <a
                      class="dropdown-item"
                      href="#"
                      onClick={() => handleItemClick("")}
                    >
                      All Cities
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      href="#"
                      onClick={() => handleItemClick("Pune")}
                    >
                      Pune
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      href="#"
                      onClick={() => handleItemClick("Dehradun")}
                    >
                      Dehradun
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </div>

          <ul class="nav nav-pills">
            <li
              style={{
                marginRight: "60px",
                fontSize: "18px",
              }}
            >
              <div
                style={{
                  position: "relative",
                  height: "50px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  paddingLeft: "28px",
                }}
              >
                <Link
                  to={"/search"}
                  className="link-body-emphasis"
                  style={{ textDecoration: "none" }}
                >
                  <span style={{ paddingRight: "13px" }}>
                    <IoSearch />
                  </span>
                  <span>Search</span>
                </Link>
              </div>
            </li>
            <li style={{ marginRight: "60px", fontSize: "18px" }}>
              <div
                style={{
                  position: "relative",
                  height: "50px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  paddingLeft: "28px",
                }}
              >
                <Link
                  to={"/help"}
                  className="link-body-emphasis"
                  style={{ textDecoration: "none" }}
                >
                  <span style={{ paddingRight: "13px" }}>
                    <FiHelpCircle />
                  </span>
                  <span>Help</span>
                </Link>
              </div>
            </li>
            <li
              style={{
                marginRight: "60px",
                fontSize: "18px",
              }}
            >
              <div
                style={{
                  position: "relative",
                  height: "50px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  paddingLeft: "28px",
                }}
              >
                {User ? (
                  User.role.authority === "ROLE_ADMIN" ? (
                    <Link to={"/admin"} style={{textDecoration:"none",color:"black"}}>{User.username}</Link>
                  ) : User.role.authority === "ROLE_HOTEL" ? (
                    <Link to={"/dashboard"} style={{textDecoration:"none",color:"black"}}>{User.username}</Link>
                  ) : (
                    <Link to={"/account"} style={{textDecoration:"none",color:"black"}}>{User.username}</Link>
                  )
                ) : (
                  <Link
                    to={"/login"}
                    className="link-body-emphasis "
                    style={{ textDecoration: "none" }}
                  >
                    <span style={{ paddingRight: "13px" }}>
                      <IoPersonOutline />
                    </span>

                    <span>Sign In</span>
                  </Link>
                )}
              </div>
            </li>
            <li style={{ marginRight: "60px", fontSize: "18px" }}>
              <div
                style={{
                  position: "relative",
                  height: "50px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  paddingLeft: "28px",
                }}
              >
                <Link
                  to={"/cart"}
                  className="link-body-emphasis"
                  style={{ textDecoration: "none" }}
                >
                  <span style={{ paddingRight: "13px" }}>
                    <BsCart />
                  </span>
                  <span>Cart</span>
                </Link>
              </div>
            </li>
          </ul>
        </header>
      </div>
    </div>
  );
};

export default Header;
