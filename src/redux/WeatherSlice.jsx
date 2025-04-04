import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const API_KEY = '9310a0427d494372b03180547250404'
const BASE_URL = 'http://api.weatherapi.com/v1'


export const fetchForecastByCity = createAsyncThunk(
    'weather/fetchForecastByCity',
    async(city) => {
        const response = await axios.get(`${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=5`)
    }
)