import React, { useState, useEffect } from 'react'
import WeatherItem from '../WeatherItem/WeatherItem'
import './WeatherSection.css'

const locations = encodeURIComponent('Halifax,NS|Montcton,NB|Montreal,QC|Toronto,ON|Victoria,BC')

const URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timelinemulti?/today?&locations=${locations}&unitGroup=metric&elements=datetime%2Cname%2Ctemp%2Cconditions%2Cicon&include=current&iconSet=2&key=79CPU88DC8B8ESJWV9U5SXS3B&contentType=json`

function WeatherSection() {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    fetch(URL)
    .then((res) => {
      return res.json()
    })
    .then((data) => {
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
                icon={location.currentConditions.icon}
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
//Promise.all
export default WeatherSection