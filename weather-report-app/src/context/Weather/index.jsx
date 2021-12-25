import axios from 'axios';
import { createContext, useState, useContext, useEffect } from 'react';

const weatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [city, setCity] = useState("adana");
  const [cityInfo, setCityInfo] = useState();

  useEffect(() => {
    /* One Week Weather information request */
    axios.get("https://api.collectapi.com/weather/getWeather", {
      params: {
        "data.lang": "tr",
        "data.city": city.toLowerCase()
      },
      headers: {
        "authorization": "apikey 4RRdoepOu9LI47bS0KLs6E:2OYd8c7Z6HPaFLnhvEZdLw",
        "content-type": "application/json"
      }
    }).then((dt) => setCityInfo(dt.data['result'])) //Week array
      .catch((err) => console.error(err));
  }, [city])

  const values = {
    city,
    setCity,

    cityInfo,
    setCityInfo
  }

  return <weatherContext.Provider value={values}>{children}</weatherContext.Provider>;
}

export const useWeather = () => useContext(weatherContext);