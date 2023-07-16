import React, {useEffect} from 'react'
import SunAndCloud from '../icons/SunAndCloud';
import Icon from '../icons/AllTheIcons'




function HourlyForcast() {
  let FullHour= 0;
  let sunrise;
  let sunset;
  let x =[];
   
  
  
  for(let i=0; i<24; i++){
      x[i] = FullHour+i
    
  }

  for(let i=0; i<24;i++){
    if(x[i]>=24){
      x[i]=x[i]-24;
    }
  }

  const timestampsunrise = 1689216185;
  const sunriseTime = new Date(timestampsunrise * 1000); 
  let sunrisehour = sunriseTime.getHours();
  let sunriseminute = sunriseTime.getMinutes();

  sunrise = (sunrisehour + ':' + sunriseminute);

  const timestampsunset = 1689266185;
  const sunsetTime = new Date(timestampsunset * 1000); 
  let sunsethour = sunsetTime.getHours();
  let sunsetminute = sunsetTime.getMinutes();

  sunset = (sunsethour + ':' + sunsetminute);

  

  
  useEffect(() => {
    let TargetDivSunrise, TargetDivSunset;
    console.clear(); 

    for (let i = 1; i < 25; i++) {
      const element = document.getElementById(i.toString());
      if (element && element.textContent === sunrisehour.toString()) {
        TargetDivSunrise = i+1;
      }  
    }
    

    for (let i = 1; i < 25; i++) {
      const element = document.getElementById(i.toString());
      if (element && element.textContent === sunsethour.toString()) {
        TargetDivSunset = i+1;
      }
    }

    if(TargetDivSunrise){
      var sunriseElement = document.getElementById('sunrise');
      var afterSunriseElement =document.getElementById('div'+TargetDivSunrise.toString());
      afterSunriseElement.parentNode.insertBefore(sunriseElement, afterSunriseElement);
      <afterSunriseElement className='text-black'/>
    }else{
      alert('there is no sunrise');
    }

    if(TargetDivSunset){
      var sunsetElement = document.getElementById('sunset');
      var afterSunsetElement =document.getElementById('div'+TargetDivSunset.toString());
      afterSunsetElement.parentNode.insertBefore(sunsetElement, afterSunsetElement);
      <afterSunsetElement className='text-black'/>
    }
  }, []);
  

  return (
    <div>
      <div className='flex box-border mx-auto h-32 w-11/12 bg-blue-700 bg-opacity-20 rounded-2xl mb-4'>
      <span className='absolute'><div className='flex pl-4 pt-2 text-xs  text-white text-opacity-70'><Icon name='clock'/><p className='pl-1'>HOURLY FORCAST</p></div></span>
        <hr className='absolute h-px mt-7 ml-4 w-5/6 border-0 bg-white opacity-20' />
        <div className="Boxwheel text-white mt-5 grid grid-flow-col auto-cols-max gap-8 pl-4 overflow-x-auto pr-5">
          <div className='flex flex-col justify-center items-center'>
            <var className='text-xs mb-2'>now</var>
            <Icon name="sun"/>                            
            <p className='text-base mt-2'>
            <var>31</var>
            <span className='ml-0.5 '>&deg;
            </span></p></div>
          <div id='div1' className='flex flex-col justify-center items-center'>
            <span className='text-xs mb-2'><var id='1'>{x[0]}</var></span>
            <Icon name='cloud'/>               
            <p className='text-base mt-2'>
            <var>31</var>
            <span className='ml-0.5 '>&deg;
            </span></p></div>
          <div id='div2' className='flex flex-col justify-center items-center'>
            <span className='text-xs mb-2'><var id='2'>{x[1]}</var></span>
            <Icon name='moon' />               
            <p className='text-base mt-2'>
            <var>31</var>
            <span className='ml-0.5 '>&deg;
            </span></p></div>
          <div id='div3' className='flex flex-col justify-center items-center'>
            <span className='text-xs mb-2'><var id='3'>{x[2]}</var></span>
            <SunAndCloud />                    
            <p className='text-base mt-2'>
            <var>31</var>
            <span className='ml-0.5 '>&deg;
            </span></p></div>
          <div id='div4' className='flex flex-col justify-center items-center'>
            <span className='text-xs mb-2'><var id='4' >{x[3]}</var></span>
            <Icon name='cloudy-night'/>        
            <p className='text-base mt-2'>
            <var>31</var>
            <span className='ml-0.5 '>&deg;
            </span></p></div>
          <div id='div5' className='flex flex-col justify-center items-center'>
            <span className='text-xs mb-2'><var id='5' >{x[4]}</var></span>
            <Icon name='cloud-rain-heavy'/>    
            <p className='text-base mt-2'>
            <var>31</var>
            <span className='ml-0.5 '>&deg;
            </span></p></div>
          <div id='div6' className='flex flex-col justify-center items-center'>
            <span className='text-xs mb-2'><var id='6' >{x[5]}</var></span>
            <Icon name='cloud-rain' />         
            <p className='text-base mt-2'>
            <var>31</var>
            <span className='ml-0.5 '>&deg;
            </span></p></div>
          <div id='div7' className='flex flex-col justify-center items-center'>
            <span className='text-xs mb-2'><var id='7' >{x[6]}</var></span>
            <Icon name='cloud-drizzle' />      
            <p className='text-base mt-2'>
            <var>31</var>
            <span className='ml-0.5 '>&deg;
            </span></p></div>
          <div id='div8' className='flex flex-col justify-center items-center'>
            <span className='text-xs mb-2'><var id='8' >{x[7]}</var></span>
            <Icon name='cloud-lightning-rain'/>
            <p className='text-base mt-2'>
            <var>31</var>
            <span className='ml-0.5 '>&deg;
            </span></p></div>
          <div id='div9' className='flex flex-col justify-center items-center'>
            <span className='text-xs mb-2'><var id='9' >{x[8]}</var></span>
            <Icon name='cloud-lightning'/>     
            <p className='text-base mt-2'>
            <var>31</var>
            <span className='ml-0.5 '>&deg;
            </span></p></div>
          <div id='div10' className='flex flex-col justify-center items-center'>
            <span className='text-xs mb-2'><var id='10' >{x[9]}</var></span>
            <Icon name='cloud-snow' />        
            <p className='text-base mt-2'>
            <var>31</var>
            <span className='ml-0.5 '>&deg;
            </span></p></div>
          <div id='div11' className='flex flex-col justify-center items-center'>
            <span className='text-xs mb-2'><var id='11' >{x[10]}</var></span>
            <Icon name='cloud-sleet' />      
            <p className='text-base mt-2'>
            <var>31</var>
            <span className='ml-0.5 '>&deg;
            </span></p></div>
          <div id='div12' className='flex flex-col justify-center items-center'>
            <span className='text-xs mb-2'><var id='12' >{x[11]}</var></span>
            <Icon name='wind' />             
            <p className='text-base mt-2'>
            <var>31</var>
            <span className='ml-0.5 '>&deg;
            </span></p></div>
          <div id='div13' className='flex flex-col justify-center items-center'>
            <span className='text-xs mb-2'><var id='13' >{x[12]}</var></span>
            <Icon name='sun' />              
            <p className='text-base mt-2'>
            <var>31</var>
            <span className='ml-0.5 '>&deg;
            </span></p></div>
          <div id='div14' className='flex flex-col justify-center items-center'>
            <span className='text-xs mb-2'><var id='14' >{x[13]}</var></span>
            <Icon name='sun' />              
            <p className='text-base mt-2'>
            <var>31</var>
            <span className='ml-0.5 '>&deg;
            </span></p></div>
          <div id='div15' className='flex flex-col justify-center items-center'>
            <span className='text-xs mb-2'><var id='15' >{x[14]}</var></span>
            <Icon name='snowflake'/>         
            <p className='text-base mt-2'>
            <var>31</var>
            <span className='ml-0.5 '>&deg;
            </span></p></div>
          <div id='div16' className='flex flex-col justify-center items-center'>
            <span className='text-xs mb-2'><var id='16' >{x[15]}</var></span>
            <Icon name='sun' />              
            <p className='text-base mt-2'>
            <var>31</var>
            <span className='ml-0.5 '>&deg;
            </span></p></div>
          <div id='div17' className='flex flex-col justify-center items-center'>
            <span className='text-xs mb-2'><var id='17' >{x[16]}</var></span>
            <Icon name='sun' />              
            <p className='text-base mt-2'>
            <var>31</var>
            <span className='ml-0.5 '>&deg;
            </span></p></div>
          <div id='div18' className='flex flex-col justify-center items-center'>
            <span className='text-xs mb-2'><var id='18' >{x[17]}</var></span>
            <Icon name='sun' />              
            <p className='text-base mt-2'>
            <var>31</var>
            <span className='ml-0.5 '>&deg;
            </span></p></div>
          <div id='div19' className='flex flex-col justify-center items-center'>
            <span className='text-xs mb-2'><var id='19' >{x[18]}</var></span>
            <Icon name='sun' />              
            <p className='text-base mt-2'>
            <var>31</var>
            <span className='ml-0.5 '>&deg;
            </span></p></div>
          <div id='div20' className='flex flex-col justify-center items-center'>
            <span className='text-xs mb-2'><var id='20' >{x[19]}</var></span>
            <Icon name='sun' />              
            <p className='text-base mt-2'>
            <var>31</var>
            <span className='ml-0.5 '>&deg;
            </span></p></div>
          <div id='div21' className='flex flex-col justify-center items-center'>
            <span className='text-xs mb-2'><var id='21' >{x[20]}</var></span>
            <Icon name='sun' />              
            <p className='text-base mt-2'>
            <var>31</var>
            <span className='ml-0.5 '>&deg;
            </span></p></div>
          <div id='div22' className='flex flex-col justify-center items-center'>
            <span className='text-xs mb-2'><var id='22' >{x[21]}</var></span>
            <Icon name='sun' />              
            <p className='text-base mt-2'>
            <var>31</var>
            <span className='ml-0.5 '>&deg;
            </span></p></div>
          <div id='div23' className='flex flex-col justify-center items-center'>
            <span className='text-xs mb-2'><var id='23' >{x[22]}</var></span>
            <Icon name='sun' />              
            <p className='text-base mt-2'>
            <var>31</var>
            <span className='ml-0.5 '>&deg;
            </span></p></div>
          <div id='div24' className='flex flex-col justify-center items-center'>
            <span className='text-xs mb-2'><var id='24' >{x[23]}</var></span>
            <Icon name='sun' />              
            <p className='text-base mt-2'>
            <var>31</var>
            <span className='ml-0.5 '>&deg;
            </span></p></div>
          <div id='sunrise' className='flex flex-col justify-center items-center'>
            <var className='text-xs mb-2'>{sunrise}</var>
            <Icon name='sunrise' />    
            <p className='text-base mt-2'>
            <var>31</var>
            <span className='ml-0.5 '>&deg;
            </span></p></div>
          <div id='sunset' className='flex flex-col justify-center items-center'>
            <var className='text-xs mb-2'>{sunset}</var>
            <Icon name='sunset' />       
            <p className='text-base mt-2'>
            <var>31</var>
            <span className='ml-0.5 '>&deg;
            </span></p></div>

          

        </div>
    </div>
    </div>
  )
}

export default HourlyForcast