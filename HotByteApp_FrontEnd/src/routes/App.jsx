import "bootstrap/dist/css/bootstrap.min.css";
import "../routes/App.css";
import PublicService from "../services/PublicService";
import { useEffect, useState } from "react";
import { useRef } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import MainPageContainer from "../component/MainPageContainer";
import { useDispatch } from "react-redux";
import { hotelList } from "../store/hotelRedux";

function App() {

  const city = useRef();
  const name = useRef();


/*
  const fetchHotels = async () => {
    try {
      let result = await PublicService.getAllHotels();
      console.log(result.data);
      setHotels(result.data);
    } catch (error) {
      console.log(error);
    }
  };
*/
  const searchHotelByCity = async (city) => {
    console.log("City " + city.current.value);
    try {
      let result = await PublicService.getHotelByCity(city.current.value);
      console.log(result.data);
      //setHotels(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const searchHotelByName = async (name) => {
    console.log("name " + name.current.value);
    try {
      let result = await PublicService.getHotelByName(name.current.value);
      console.log(result.data);
      //setHotels(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  
  return (
    <>
      <Header />
      <MainPageContainer/>
      <Footer/>
    </>
  );
}

export default App;
