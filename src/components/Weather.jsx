import React, { useEffect, useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { BsCloud } from 'react-icons/bs'
import { FaWind } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux'
import { fetchForecastByCity } from '../redux/WeatherSlice'

import sunnyImage from '../assets/sunny.jpg'
import rannyImage from '../assets/rain.jpg'
import snowlyImage from '../assets/snow.jpg'
import cloudyImage from '../assets/cloud.jpg'

function Weather() {

    const [city, setCity] = useState('')

    const handleSearch = () => {
        if (city.trim() !== '') {
            dispatch(fetchForecastByCity(city))
        }
    }

    const dispatch = useDispatch('New York')

    useEffect(()=> {
        dispatch(fetchForecastByCity('New York'))
    }, [dispatch]);

    const forecast = useSelector((state) => state.weather.forecast);
    console.log(forecast);

    const forecastHours = forecast?.forecast?.forecastday[0]?.hour.slice(0, 10)

    const weatherCondition = forecast?.current?.condition?.text?.toLowerCase()

    let backgroundImage = sunnyImage

    if(weatherCondition) {
        if(weatherCondition.includes('sunny')  || weatherCondition.includes('clear')) {
            backgroundImage = sunnyImage
        } else if (weatherCondition.includes('rain')) {
            backgroundImage = rannyImage
        } else if (weatherCondition.includes('snow')) {
            backgroundImage = snowlyImage
        } else if (weatherCondition.includes('cloud') || weatherCondition.includes('overcast')) {
            backgroundImage = cloudyImage
        }
    }

  return (
    <div className='weather_container' style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    }}>
        <div className='main_section'>
            <div className='weather_info'>
                <div className='location'>
                    <h3>{forecast?.location?.name} - {forecast?.location?.county}</h3>
                </div>
                <div className='condition'>
                    <h1>{forecast?.current?.condition?.text}</h1>
                </div>
            </div>

            <div className='weather_hours'>
                {forecastHours?.map((hour, index) => {
                    const time = new Date(hour.time).toLocaleTimeString('en-GB', {
                        hour: '2-digit',
                        minute: '2-digit',
                        hour12: false,
                    });

                    return (
                        <div className='hour_card' key={index}>
                    <div className='hour_time'>
                        <p>{time}</p>
                    </div>
                    <div className='hour_condition'>
                        <img src={hour?.condition.icon} alt='' />
                    </div>
                    <div className='hour_temp'>
                        <h2>{Math.ceil(hour?.temp_c)}˚C</h2>
                    </div>
                </div>
                    )
                })}
                
            </div>
        </div>

        <div className='side_section'>
            <div className='search_box'>
                <FaLocationDot className='icon' />
                <input type="text" 
                placeholder={forecast?.location?.name} 
                value={city} 
                onChange={(e) => setCity(e.target.value)} />
                <BiSearch className='icon' onClick={handleSearch} />
            </div>

            <div className='temp_info'>
                <h1>{Math.ceil(forecast?.current?.temp_c)}˚C</h1>
                <p>
                    <FaWind /> {forecast?.current?.wind_dir}{' '}
                    {forecast?.current?.wind_kph} km/h
                </p>
            </div>
            <div className='forecast_days'>
                <h1 className='forecast_heading'>The Next Days Forecast</h1>
                {forecast?.forecast?.forecastday?.map((item, index) => {

                    const forecastData = new Date(item.date).toLocaleDateString('en-GB', {
                        weekday: 'long',
                        day: '2-digit',
                        month: 'long'
                    })

                    return (
                        <div className='forecast_item' key={index}>
                    <div className='forecast_details'>
                        <div className='forecast_icon'>
                            <img src={item.day.condition.icon} alt="" />
                        </div>
                        <div className='details'>
                            <h2>{forecastData}</h2>
                            <p>{item.day.condition.text}</p>
                        </div>
                    </div>
                    <div className='forecast_temp'>
                        <div className='temp_display'>
                            <h2>{Math.ceil(item.day.maxtemp_c)}˚C</h2>
                            <h2>{Math.ceil(item.day.mintemp_c)}˚C</h2>
                        </div>
                    </div>
                </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Weather