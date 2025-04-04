import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { BsCloud } from 'react-icons/bs'
import { FaWind } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';

function Weather() {
  return (
    <div className='weather_container'>
        <div className='main_section'>
            <div className='weather_info'>
                <div className='location'>
                    <h3>New York - USA</h3>
                </div>
                <div className='condition'>
                    <h1>Overcast</h1>
                </div>
            </div>
            <div className='weather_hours'>
                <div className='hour_card'>
                    <div className='hour_time'>
                        <p>09:00</p>
                    </div>
                    <div className='hour_condition'>
                        <BsCloud />
                    </div>
                    <div className='hour_temp'>
                        <h2>10˚C</h2>
                    </div>
                </div>
            </div>
        </div>
        <div className='side_section'>
            <div className='search_box'>
                <FaLocationDot className='icon' />
                <input type="text" placeholder='New York' />
                <BiSearch className='icon' />
            </div>
            <div className='temp_info'>
                <h1>10˚C</h1>
                <p>
                    <FaWind /> NE 40 km/h
                </p>
            </div>
            <div className='forecast_days'>
                <h1 className='forecast_heading'>The Next Days Forecast</h1>
                <div className='forecast_item'>
                    <div className='forecast_details'>
                        <div className='forecast_icon'>
                            <BsCloud />
                        </div>
                        <div className='details'>
                            <h2>monday, December 16</h2>
                            <p>overcast</p>
                        </div>
                    </div>
                    <div className='forecast_temp'>
                        <div className='temp_display'>
                            <h2>10˚C</h2>
                            <h2>5˚C</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Weather