import '../style.css';

function GetTodayWeather(props) {

    function getImg(){  // get weather icon images according to the value of the "result.data.weather[0].main"
        switch(props.sky){
        case 'Clear':
            return (
            <img
                className="weatherImg"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmnSKZMCWzMOQx-BmqNAIuo4NkETmZF1jEuQ&usqp=CAU"
            />
            );

        case 'Clouds':
            return (
            <img
                className="weatherImg"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS37PUJjm0Pp9cRHHdSMqZuaGPHgG_N5SCnvQ&usqp=CAU"
            />
            );

        case 'Rain':
            return (
            <img
                className="weatherImg"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH8spnSarVkpWrCSnR4gtoNedUnZaEWSfc1g&usqp=CAU"
            />
            );
        } 
    } 

    return (
              
        <div className='todayWeather'>
            <div className='city'>{props.name}</div>
            <div className='temperature'>{props.temp}°C</div>
            <div className='sky'>{getImg()}</div>
        </div>
                 
    );
}

export default GetTodayWeather;


/* 
import {useState} from 'react'; // "useState" manage value that could be changed in the componant.
import axios from "axios";
import '../style.css';
import GetTodayTime from './getTodayTime';

function GetTodayWeather(props) {

    function getImg(){  // get weather icon images according to the value of the "result.data.weather[0].main"
        switch(props.data.weather[0].main){
        case 'Clear':
            return (
            <img
                className="weatherImg"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmnSKZMCWzMOQx-BmqNAIuo4NkETmZF1jEuQ&usqp=CAU"
            />
            );

        case 'Clouds':
            return (
            <img
                className="weatherImg"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS37PUJjm0Pp9cRHHdSMqZuaGPHgG_N5SCnvQ&usqp=CAU"
            />
            );

        case 'Rain':
            return (
            <img
                className="weatherImg"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH8spnSarVkpWrCSnR4gtoNedUnZaEWSfc1g&usqp=CAU"
            />
            );
        } 
    } 

    return (
        {
            Object.keys(result).length !== 0 &&( 
            // If this condition is true, it will display the following HTML elements.
            // In condition, result is the variable to run function "setResult", 
            // and result equal to the variable "data".
            // Anyway, If length(size) of keys of data is not 0, run HTML elements.
                
                <div className='todayWeather'>
                    <div className='city'>{props.data.name}</div>
                    <div className='temperature'>{Math.round((props.data.main.temp - 273.15)*10)/10}°C</div>
                    <div className='sky'>{getImg()}</div>
                </div>
            )
        }
    );
}

export default GetTodayWeather;



*/