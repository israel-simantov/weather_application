import React from 'react';
import Icon from '../icons+slider/AllTheIcons';



const Extras = () => {
  let UVIndex=2;
  let UVCondition
  if(UVIndex>=0 && UVIndex<3){
    UVCondition='Low';
  }else if(UVIndex>=3 && UVIndex<6){
    UVCondition='Moderate';
  }else if(UVIndex>=6 && UVIndex<8){
    UVCondition='High';
  }else if(UVIndex>=8 && UVIndex<11){
    UVCondition='Very High';
  }else if(UVIndex>=11){
    UVCondition='Extreme';
  }else{
    UVCondition=''
  }

  let UVProtection
  
  const timestemp = 1690203600;
  const time = new Date(timestemp * 1000); 
  let hournow = time.getHours();
  let minutenow = time.getMinutes();

  const timeStampSunrise = 1689216285;  
  const sunriseTime = new Date(timeStampSunrise * 1000)
  let sunriseTodayH = sunriseTime.getHours();
  let sunriseTodayM = sunriseTime.getMinutes();

  const sunrise = (sunriseTodayH + ':' + sunriseTodayM);

  const timeStampSunset = 1689266185;
  const sunsetTime = new Date(timeStampSunset * 1000)
  let sunsetTodayH = sunsetTime.getHours();
  let sunsetTodayM = sunsetTime.getMinutes();

  const sunset = (sunsetTodayH + ':' + sunsetTodayM);

  
  
  if(UVIndex<3 && hournow<=sunsetTodayH && hournow>=sunriseTodayH){
    UVProtection='Low for the rest of the day.'  
  }else if(UVIndex<3 && hournow<=sunrisetoday && hournow>=0){
    //when(need API)
    UVProtection='Use sun protection '
  }else if(UVIndex<=0){
    //when(need API)
    UVProtection='use sun protection until'
  }

  let sNext, nextIcon, nextTitle, nextNextSun

  if(hournow>sunriseTodayH && hournow<sunsetTodayH){
    nextTitle='SUNSET'
    nextIcon='sunset-top'
    sNext=sunset
    nextNextSun='sunrise: '+sunrise
  }else if(hournow<sunriseTodayH && hournow>=0){
    nextTitle='SUNRISE'
    nextIcon='sunrise-top'
    sNext=sunrise
    nextNextSun='sunset: '+sunset
  }else if(hournow===sunrise){
    if(minutenow>=sunriseTodayM){
      nextTitle='SUNSET'
      nextIcon='sunset-top'
      sNext=sunset
      nextNextSun='sunrise: '+sunrise
    }else if(minutenow<sunriseTodayM){
      nextTitle='SUNRISE'
      nextIcon='sunrise-top'
      sNext=sunrise
      nextNextSun='sunset: '+sunset
    }
  }else if(hournow===sunset){
    if(minutenow>=sunsetTodayM){
      nextTitle='SUNRISE'
      nextIcon='sunrise-top'
      sNext=sunrise
      nextNextSun='sunset: '+sunset
    }else if(minutenow<sunsetTodayM){
      nextTitle='SUNSET'
      nextIcon='sunset-top'
      sNext=sunset
      nextNextSun='sunrise: '+sunrise
    }
  }

  let currentwind=23;
  let Gusts=47;
  let windDirection=295
  let WDTitle

  if(windDirection>=345 && windDirection<=15){
    WDTitle='N'
  }else if(windDirection>15 && windDirection<30){
    WDTitle='NNE'
  }else if(windDirection>=30 && windDirection<=60){
    WDTitle='NE'
  }else if(windDirection>60 && windDirection<75){
    WDTitle='ENE'
  }else if(windDirection>=75 && windDirection<=105){
    WDTitle='E'
  }else if(windDirection>105 && windDirection<120){
    WDTitle='ESE'
  }else if(windDirection>=120 && windDirection<=150){
    WDTitle='SE'
  }else if(windDirection>150 && windDirection<165){
    WDTitle='SSE'
  }else if(windDirection>=165 && windDirection<=195){
    WDTitle='S'
  }else if(windDirection>195 && windDirection<210){
    WDTitle='SSW'
  }else if(windDirection>=210 && windDirection<=240){
    WDTitle='SW'
  }else if(windDirection>240 && windDirection<255){
    WDTitle='WSW'
  }else if(windDirection>=255 && windDirection<=285){
    WDTitle='W'
  }else if(windDirection>285 && windDirection<300){
    WDTitle='WNW'
  }else if(windDirection>=300 && windDirection<=330){
    WDTitle='NW'
  }else if(windDirection>330 && windDirection<345){
    WDTitle='NNW'
  }
  
  

  return (
    <>
    <div className='grid grid-cols-2 grid-rows-4 gap-2 w-11/12 mx-auto h-180 mb-2'>
      <div className='bg-black bg-opacity-5 rounded-2xl '>
        <span className='flex mt-2 ml-1'><Icon name='sun-top' /><h1 className='text-white text-opacity-70 font-medium text-xs'>UV INDEX</h1></span>
        <div className='ml-3 mt-2 text-3xl text-white'>{UVIndex}</div>
        <div className='ml-3 text-lg text-white' ><var>{UVCondition}</var></div>
        <div className='ml-3 mb-1'><input type='range' defaultValue={UVIndex} min={0} max={13} className='UV-slider'></input></div>
        <span className='ml-3 pr-4 flex text-sm text-white'>{UVProtection}</span>
      </div>
      <div className='bg-black bg-opacity-5 rounded-2xl'>
        <span className='flex mt-2 ml-0.5'><Icon name={nextIcon} /><h1 className='text-white text-opacity-70 font-medium text-xs'><var>{nextTitle}</var></h1></span>
        <div className='ml-3 mt-4 mb-16 text-3xl text-white'>{sNext}</div>
        {/* add a grarh */}
        <h1 className='text-white text-sm font-light ml-3'>{nextNextSun}</h1>
      </div>
      <div className='bg-black bg-opacity-5 rounded-2xl col-span-2'>
        <span className='flex mt-2 ml-0.5'><Icon name='wind-top' /><h1 className='text-white text-opacity-70 font-medium text-xs'>WIND</h1></span>
        <div className='absolute'>
        <span className='flex'>
        <h1 className='ml-3 mt-4 text-4xl text-white'>{currentwind}</h1>
        <span className='mt-5 ml-1'>
        <h1 className='text-white text-opacity-70 font-semibold text-xs'>KM/H</h1>
        <h1 className='text-white text-xs ' >Wind</h1>
        </span></span>
        <hr className='absolute mt-3 ml-3 h-px w-40 border-0 bg-white opacity-20'/>
        <span className='flex mt-4'>
        <h1 className='ml-3 mt-4 text-4xl text-white'>{Gusts}</h1>
        <span className='mt-5 ml-1'>
        <h1 className='text-white text-opacity-70 font-semibold text-xs'>KM/H</h1>
        <h1 className='text-white text-xs ' >Gusts</h1>
        </span></span>
        </div>
        <img className='absolute right-8 mt-1 w-32' src="src/icons+slider/campass2.png" />
        <img className='absolute right-10 -mt-2 w-28' style={{ transform: `rotate(${windDirection}deg)` }} src="src/icons+slider/IMG_9161_adobe_express.png" />
        <div className='absolute right-16 mr-1 mt-10 w-14 h-14  bg-black bg-opacity-5 rounded-full '><h1 className='flex mt-4 text-white justify-center items-center'>{WDTitle}</h1></div>
      </div>
        <div className='bg-black bg-opacity-5 rounded-2xl'>
          <span className='flex mt-2 ml-0.5'><Icon name='fl-temp-top' /><h1 className='text-white text-opacity-70 font-medium text-xs'>FEELS LIKE</h1></span>

        </div>
        <div className='bg-black bg-opacity-5 rounded-2xl'>
          <span className='flex mt-2 ml-0.5'><Icon name='drop-top' /><h1 className='text-white text-opacity-70 font-medium text-xs'>PRECIPITATION</h1></span>

        </div>
        <div className='bg-black bg-opacity-5 rounded-2xl'>
          <span className='flex mt-2 ml-0.5'><Icon name='eye-top' /><h1 className='text-white text-opacity-70 font-medium text-xs'>VISIBILITY</h1></span>

        </div>
        <div className='bg-black bg-opacity-5 rounded-2xl'>
          <span className='flex mt-2 ml-0.5'><Icon name='humidity-top' /><h1 className='text-white text-opacity-70 font-medium text-xs'>HUMIDITY</h1></span>

        </div>
    </div>
    </>
  )
}

export default Extras
