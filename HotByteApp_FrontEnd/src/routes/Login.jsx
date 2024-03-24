import React, { useState } from "react";
import LOGO from "/LOGO.png";
import { Form, Link, redirect, useNavigate } from "react-router-dom";
import PublicService from "../services/PublicService";
import { useDispatch, useSelector } from "react-redux";
import { loginFailure, loginSuccess, logout } from "../store/userRedux";
import axios from "axios";
import { addUser } from "../store/realUserRedux";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState("");
  const { isFetching, error } = useSelector((state) => state.user);
  const navigate=useNavigate()
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const result = await PublicService.loginUser({
        username: username,
        password: password,
      });
      if(result.data==="Credentials Invalid !!")
      {
         dispatch(loginFailure());
         setErrorMessage("Username or password is not valid");
      }
      else
      {
      dispatch(loginSuccess(result.data));
      if(result.data.role.authority==="ROLE_ADMIN")
      {
        navigate("/admin");
      }
      else if(result.data.role.authority==="ROLE_HOTEL")
      {
        navigate("/dashboard");
      }
      else{
          try{
            const realUser= await axios.get(`http://localhost:8080/user/${result.data.username}`,{
              headers:{
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${result.data.jwtToken}`,
              }
            })
            dispatch(addUser(realUser.data));
          }
          catch(error)
          {
                console.log(error)
          }
          navigate("/");
      }
    }
      
    } catch (error) {
      
      console.log(error);
    }
  };

  return (
    <div className="row">
      <div className="col-lg-7">
        <div style={{ width: "50%", margin: "80px auto" }}>
          <Form method="POST">
            <h1 class="h3 mb-3 fw-normal">SIGN UP</h1>

            <div class="form-floating">
              <input
                type="text"
                class="form-control"
                name="username"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
              />
              <label for="username">Username</label>
            </div>
            <br />
            <div class="form-floating">
              <input
                type="password"
                class="form-control"
                name="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <label for="floatingPassword">Password</label>
            </div>

            <button
              class="w-100 btn btn-lg btn-primary"
              style={{ marginTop: "20px" }}
              type="submit"
              onClick={handleClick}
              disabled={isFetching}
            >
              Sign in
            </button>
            {errorMessage && <p style={{ color: 'red', marginTop: '10px' }}>{errorMessage}</p>}
            <p class="mt-5 mb-3 text-muted">© 2024</p>
          </Form>
          <Link
            style={{ fontSize: "20px", textDecoration: "none" }}
            to={"/signup"}
          >
            Create a new account
          </Link>
        </div>
      </div>
      <div className="col-lg-4">
        <div style={{ margin: "90px 0 0 0" }} className="shadow-lg">
          <Link to={"/"}>
            <img src={LOGO} alt="" style={{ height: "100%", width: "100%" }} />
          </Link>
        </div>
      </div>
    </div>
  );
};



export default Login;
