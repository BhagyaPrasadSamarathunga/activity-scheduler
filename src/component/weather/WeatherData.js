import React , {useState,useEffect} from 'react';
import images from "../../resources/images/images.js";
import useFetch from '../../hooks/useFetch.js';
import { BASE_URL } from '../../config/constants/apiConstants.js';
import { convertKelvinToCelsius } from '../../helpers/utils.js';

const WeatherData = () => {
    const {data, isLoading, error, fetchData} = useFetch();
    const [city, setCity] = useState('');
    const [weatherInfo, setWeatherInfo] = useState();
    const [errorMessage, setErrorMessage] = useState('');

    const handleSearch = () => {
        fetchData(`${BASE_URL}weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_APP_ID}`);
    }

    useEffect(() => {
         if(city.trim().length === 0) {
            setWeatherInfo(undefined)
         }
    },[city])

    useEffect(() => {
        if(data) {
            setWeatherInfo(data)
            setErrorMessage('')
            
        } else {
            setWeatherInfo(undefined)
        }
    },[data])

    useEffect(() => {
        if(error) {
            setWeatherInfo(undefined)
            setErrorMessage(error.message)
        } 
    },[error])

    const Error = () => {
        return (<div><h1 className='text-red-600'>{errorMessage}</h1></div>)
    }

    const WeatherDetailRow = ({name, icon, value}) => {
        return (
            <div className='flex flex-row items-center'>
                
                <div className='flex flex-col '>
                <img src={icon} alt={name} className='w-10 h-10'/>
                    <h2 className='text-xs'>{name}</h2>
                </div>
                <h2 className='ml-3'>{value}</h2>
            </div>
               
        )
    }
    const WeatherDetails = ({wind, humidity}) => {
        return (
            <div className='flex flex-row justify-evenly'>
                <WeatherDetailRow name={'humidity'} icon={images.icons.humidity} value={`${humidity}%`}/>
                <WeatherDetailRow name={'wind'} icon={images.icons.wind} value={`${wind} km/h`}/>
            </div>
        )
    }

    const CurrentWeather = ({temperature,icon}) => {
        const tempInCelsius = convertKelvinToCelsius(temperature);
        return (
            <div className='flex flex-1 items-center justify-center flex-col'>
                <img src={images.icons[`${icon}`]} className='w-24 h-24' alt=''/>
                <h1>{tempInCelsius}°C</h1>
                <h1>{city}</h1>
            </div>
        )
    }

    const handleKeyDown= (event) => {
        if (event.key === 'Enter') {
            handleSearch();
          }
    }

    return(
        <div className='bg-sky-500 w-3/6 rounded-md h-2/5 mx-6 my-6'>
            <div className='flex items-center bg-amber-300'>
                <input type="text" placeholder='Enter City Name' className='m-2 p-2 pl-4 rounded-3xl' onChange={e => setCity(e.target.value)} onBlur={() => handleSearch()} onKeyDown={e => handleKeyDown(e)}/> 
                <button onClick={() => handleSearch()} > <img src={images.icons.search} alt='' className='w-8 h-8' /> </button>
            </div>
            {weatherInfo && 
            <div className='flex flex-1 flex-col'>
               <CurrentWeather temperature={weatherInfo.main.temp} icon={weatherInfo.weather[0].icon}/>
                <div className='flex-1 '>
                    <WeatherDetails wind={weatherInfo.wind.speed} humidity={weatherInfo.main.humidity}/>
                </div>
            </div>
            }
            {error && <Error />}
            {isLoading && <div className='flex items-center justify-center'> <img src={images.icons.loader} className='flex w-12 h-12 self-center' alt='' /> </div>}
        </div>
    );
}

export default WeatherData;

