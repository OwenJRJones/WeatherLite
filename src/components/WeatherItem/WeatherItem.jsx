import React from 'react'
import './WeatherItem.css'

function WeatherItem(props) {
  return (
    <>
      <div className="weather-item">
        <h1>{props.city}</h1>
        <div className="weather-icon">
          <i className={`wi ${props.icon}`} />
        </div>
        <div className="weather-description">
          <p>{props.description}</p>
        </div>
        <div className="weather-temp">
          <p>{props.temp}&deg; C</p>
        </div>
      </div>
    </>
  )
}

export default WeatherItem