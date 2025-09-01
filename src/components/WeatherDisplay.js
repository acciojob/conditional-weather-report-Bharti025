import React from 'react'

const WeatherDisplay = ({weather}) => {
  const tempStyle=weather.temperature> 20 ?'red':'blue';

  return (
    <div>
      <p><span style={{color : tempStyle}}>Temperature: {weather.temperature}</span></p>
      <p>Conditions: {weather.conditions}</p>
    </div>
  )
}

export default WeatherDisplay
