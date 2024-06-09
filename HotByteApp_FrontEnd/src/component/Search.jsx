import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { FaArrowLeft } from 'react-icons/fa';
import Header from "./Header";
import axios from "axios";
import HotelCard from "./HotelCard";
import {Link} from 'react-router-dom';
const Search = () => {
  const [searchHotelList, setSearchHotelList] = useState([])
  const [searchQuery, setSearchQuery] = useState('');

  const getHotelList = async (query) => {
   
    setSearchQuery(query);
    if (query !== '') {
      try {
        const result = await axios.get(`http://localhost:8080/home/all-hotel/byname?query=${query}`)
        setSearchHotelList(result.data)
        console.log(result.data)
      }
      catch (error) {
        setSearchHotelList([]);
        console.log(error)
      }
    }
    else {
      setSearchHotelList([]);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();

  };

  return (
    <div>
      <Header />
      <div class="searchbar">
        <div style={{ width: "860px", margin: " 0 auto 8px" }}>
          <form onSubmit={handleSubmit}>
           
            <div class="searchForm">
            <Link to="/">
              <div style={{margin:'0 0 0 10px',color:"black"}}>
                < FaArrowLeft size={30}/>
              </div>
              </Link>
              <div style={{ flex: "1" }}>
                <input
                  type="text"
                  class="_2FkHZ"
                  placeholder="Search for restaurants and food"
                  maxlength="200"
                  autofocus=""
                  value={searchQuery}
                  onChange={(e)=>getHotelList(e.target.value)}
                  style={{
                    fontSize: "1.15rem",
                    lineHeight: "24px",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </div>

              <div style={{margin:'0 0 0 10px'}}>
                <IoSearchSharp size={30}/>
              </div>
            </div>
            <input type="submit" hidden />
          </form>
        </div>
        <div style={{display: 'flex',
             flexWrap: 'wrap', 
             justifyContent: 'center',
             gap: '5px',
             }}>
          {searchHotelList.length === 0 ? (
          <p style={{
            fontSize: '2.15rem',
            color: '#555',
            textAlign: 'center',
            marginTop: '20px'
          }}>No Restaurant found</p>) : 
          (searchHotelList.map((hotel) => (
            <HotelCard {...hotel} key={hotel.hotelId} />
          )
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
