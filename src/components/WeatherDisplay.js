import React from 'react'

const WeatherDisplay = ({weather}) => {
  const tempStyle=weather.temperature> 20 ?'red':'blue';

  return (
    <div>
      <p><span style={tempStyle}>{weather.temperature}°C</span></p>
      <p>{weather.conditions}</p>
    </div>
  )
}

export default WeatherDisplay
