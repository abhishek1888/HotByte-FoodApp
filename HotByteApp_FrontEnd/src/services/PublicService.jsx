import axios from "axios";
import { publicInstance} from "../requestMethod";
const BASE_REST_API_URL = "http://localhost:8080";

class PublicService {
  getAllHotels() {
    return axios.get(BASE_REST_API_URL + "/home/all-hotel");
  }
  getHotelByCity(city) {
    return axios.get(
      BASE_REST_API_URL + "/home/all-hotel/bycity?query=" + city
    );
  }
  getHotelByName(name) {
    return axios.get(
      BASE_REST_API_URL + "/home/all-hotel/byname?query=" + name
    );
  }

  registerUser(data){
    return publicInstance.post("/auth/register-user",data);
  }

  loginUser(data){
    return publicInstance.post("/auth/login",data);
  }
  
  getHotelById(id) {
     return publicInstance.get(`/home/${id}`)
  }
  
  fetchAllMenu(hotelID)
  {
      return publicInstance.get(`/home/menu/${hotelID}`)
  }
}

export default new PublicService();
