import '../style.css';
import React from 'react';

export default function GetTodayTime(props){
    return(
        <div className='todayTimeWeather'>{props.maxtemp}°C</div>
    );
}