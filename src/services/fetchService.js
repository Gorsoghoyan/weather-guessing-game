import { API_KEY, BASE_URL } from "../core/constants";

class ApiService {

  async getWeatherData(cityName) {
    return fetch(
      `${BASE_URL}q=${cityName}&appid=${API_KEY}&units=metric`
    );
  }

}

export const apiService = new ApiService();