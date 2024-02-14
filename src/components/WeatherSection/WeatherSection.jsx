import React, { useState, useEffect } from 'react'
import WeatherItem from '../WeatherItem/WeatherItem'
import './WeatherSection.css'

const locations = encodeURIComponent('Halifax,NS|Montcton,NB|Montreal,QC|Toronto,ON|Victoria,BC')

const URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timelinemulti?/today?&locations=${locations}&unitGroup=metric&elements=datetime%2Cname%2Ctemp%2Cconditions%2Cicon&include=current&iconSet=icons2&key=79CPU88DC8B8ESJWV9U5SXS3B&contentType=json`

// Visual Crossing (API) Icons
// https://www.visualcrossing.com/resources/documentation/weather-api/defining-icon-set-in-the-weather-api/

// Mapped to other icon set:
// https://erikflowers.github.io/weather-icons/

const icons = {
  "clear-day":"wi-day-sunny",
  "clear-night":"wi-night-clear",
  "cloudy":"wi-cloud",
  "fog":"wi-fog",
  "hail":"wi-hail",
  "partly-cloudy-day":"wi-day-sunny-overcast",
  "partly-cloudy-night":"wi-night-partly-cloudy",
  "rain":"wi-rain",
  "rain-snow":"wi-rain-mix",
  "rain-snow-showers-day":"wi-day-rain-mix",
  "rain-snow-showers-night":"wi-night-alt-rain-mix",
  "showers-day":"wi-day-showers",
  "showers-night":"wi-night-alt-showers",
  "sleet":"wi-sleet",
  "snow":"wi-snow",
  "snow-showers-day":"wi-day-rain-mix",
  "snow-showers-night":"wi-night-alt-rain-mix",
  "thunder":"wi-thunderstorm",
  "thunder-rain":"wi-storm-showers",
  "thunder-showers-day":"wi-day-storm-showers",
  "thunder-showers-night":"wi-night-alt-storm-showers",
  "wind":"wi-strong-wind"
}

function WeatherSection() {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    fetch(URL)
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      console.log(data)
      setResponse(data)
    })
    .catch((e) => {
      console.log(e.message)
    })
  }, [])

  return (
    <>
      <div className="weather-container">
        {response.locations &&
          response.locations.map(location => {
            return (
              <WeatherItem 
                city={location.address.split(",")[0]} 
                icon={icons[location.currentConditions.icon]}
                description={location.currentConditions.conditions}
                temp={location.currentConditions.temp}
                key={location.address} 
              />
            )
          })
        }
      </div>
    </>
  )
}

export default WeatherSection