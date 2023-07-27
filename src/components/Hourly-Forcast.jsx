import React, {useEffect} from 'react'
import Icon from '../icons+slider/AllTheIcons'




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

  let hourTemp =[]
  
  for(let i=0 ;i<28 ;i++ ){
    hourTemp[i]=i
  }
  
  
  useEffect(() => {
    let TargetDivSunrise, TargetDivSunset;

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
      
    }
    // else if(TargetDivSunrise === null){
    //    var sunriseElement = document.getElementById('sunrise');
    //   <sunriseElement className='hidden'/>
    // }
    //remember to add no sunrise and no sunset(in the poles)

    if(TargetDivSunset){
      var sunsetElement = document.getElementById('sunset');
      var afterSunsetElement =document.getElementById('div'+TargetDivSunset.toString());
      afterSunsetElement.parentNode.insertBefore(sunsetElement, afterSunsetElement);
    }
  }, []);

  

  return (
    <div>
      <div className='boxColor flex box-border mt-2 mx-auto h-36 w-11/12 rounded-2xl mb-3'>
      <span className='absolute'><div className='flex pl-4 pt-3 text-xs  text-white text-opacity-60'><Icon name='clock'/><p className='font-medium pl-1'>HOURLY FORCAST</p></div></span>
        {/* <hr className='absolute h-px mt-7 ml-4 w-5/6 border-0 bg-white opacity-20' /> */}
        <div id='HourBox' className="text-white mt-6 grid grid-flow-col auto-cols-max gap-8 pl-4 overflow-x-auto pr-5">
          <div className='flex flex-col justify-center items-center'>
            <var className='text-xs mb-3'>now</var>
            <Icon name="sun"/>                            
            <p className='text-base mt-3'>
            <span className='flex'>
            <h1>{hourTemp[1]}</h1>&deg;
            </span></p></div>
          <div id='div1' className='flex flex-col justify-center items-center'>
            <span className='text-xs mb-3'><h1 id='1'>{x[0]}</h1></span>
            <Icon name='cloud'/>               
            <p className='text-base mt-3'>
            <span className='flex'>
            <h1>{hourTemp[2]}</h1>&deg;
            </span></p></div>
          <div id='div2' className='flex flex-col justify-center items-center'>
            <span className='text-xs mb-3'><h1 id='2'>{x[1]}</h1></span>
            <Icon name='moon' />               
            <p className='text-base mt-3'>
            <span className='flex'>
            <h1>{hourTemp[3]}</h1>&deg;
            </span></p></div>
          <div id='div3' className='flex flex-col justify-center items-center'>
            <span className='text-xs mb-3'><h1 id='3'>{x[2]}</h1></span>
            <Icon name='SunAndCloud'/>                    
            <p className='text-base mt-3'>
            <span className='flex'>
            <h1>{hourTemp[4]}</h1>&deg;
            </span></p></div>
          <div id='div4' className='flex flex-col justify-center items-center'>
            <span className='text-xs mb-3'><h1 id='4' >{x[3]}</h1></span>
            <Icon name='cloudy-night'/>        
            <p className='text-base mt-3'>
            <span className='flex'>
            <h1>{hourTemp[5]}</h1>&deg;
            </span></p></div>
          <div id='div5' className='flex flex-col justify-center items-center'>
            <span className='text-xs mb-3'><h1 id='5' >{x[4]}</h1></span>
            <Icon name='cloud-rain-heavy'/>    
            <p className='text-base mt-3'>
            <span className='flex'>
            <h1>{hourTemp[6]}</h1>&deg;
            </span></p></div>
          <div id='div6' className='flex flex-col justify-center items-center'>
            <span className='text-xs mb-3'><h1 id='6' >{x[5]}</h1></span>
            <Icon name='cloud-rain' />         
            <p className='text-base mt-3'>
            <span className='flex'>
            <h1>{hourTemp[7]}</h1>&deg;
            </span></p></div>
          <div id='div7' className='flex flex-col justify-center items-center'>
            <span className='text-xs mb-3'><h1 id='7' >{x[6]}</h1></span>
            <Icon name='cloud-drizzle' />      
            <p className='text-base mt-3'>
            <span className='flex'>
            <h1>{hourTemp[8]}</h1>&deg;
            </span></p></div>
          <div id='div8' className='flex flex-col justify-center items-center'>
            <span className='text-xs mb-3'><h1 id='8' >{x[7]}</h1></span>
            <Icon name='cloud-lightning-rain'/>
            <p className='text-base mt-3'>
            <span className='flex'>
            <h1>{hourTemp[9]}</h1>&deg;
            </span></p></div>
          <div id='div9' className='flex flex-col justify-center items-center'>
            <span className='text-xs mb-3'><h1 id='9' >{x[8]}</h1></span>
            <Icon name='cloud-lightning'/>     
            <p className='text-base mt-3'>
            <span className='flex'>
            <h1>{hourTemp[10]}</h1>&deg;
            </span></p></div>
          <div id='div10' className='flex flex-col justify-center items-center'>
            <span className='text-xs mb-3'><h1 id='10' >{x[9]}</h1></span>
            <Icon name='cloud-snow' />        
            <p className='text-base mt-3'>
            <span className='flex'>
            <h1>{hourTemp[11]}</h1>&deg;
            </span></p></div>
          <div id='div11' className='flex flex-col justify-center items-center'>
            <span className='text-xs mb-3'><h1 id='11' >{x[10]}</h1></span>
            <Icon name='cloud-sleet' />      
            <p className='text-base mt-3'>
            <span className='flex'>
            <h1>{hourTemp[12]}</h1>&deg;
            </span></p></div>
          <div id='div12' className='flex flex-col justify-center items-center'>
            <span className='text-xs mb-3'><h1 id='12' >{x[11]}</h1></span>
            <Icon name='wind' />             
            <p className='text-base mt-3'>
            <span className='flex'>
            <h1>{hourTemp[13]}</h1>&deg;
            </span></p></div>
          <div id='div13' className='flex flex-col justify-center items-center'>
            <span className='text-xs mb-3'><h1 id='13' >{x[12]}</h1></span>
            <Icon name='sun' />              
            <p className='text-base mt-3'>
            <span className='flex'>
            <h1>{hourTemp[14]}</h1>&deg;
            </span></p></div>
          <div id='div14' className='flex flex-col justify-center items-center'>
            <span className='text-xs mb-3'><h1 id='14' >{x[13]}</h1></span>
            <Icon name='sun' />              
            <p className='text-base mt-3'>
            <span className='flex'>
            <h1>{hourTemp[15]}</h1>&deg;
            </span></p></div>
          <div id='div15' className='flex flex-col justify-center items-center'>
            <span className='text-xs mb-3'><h1 id='15' >{x[14]}</h1></span>
            <Icon name='snowflake'/>         
            <p className='text-base mt-3'>
            <span className='flex'>
            <h1>{hourTemp[16]}</h1>&deg;
            </span></p></div>
          <div id='div16' className='flex flex-col justify-center items-center'>
            <span className='text-xs mb-3'><h1 id='16' >{x[15]}</h1></span>
            <Icon name='sun' />              
            <p className='text-base mt-3'>
            <span className='flex'>
            <h1>{hourTemp[17]}</h1>&deg;
            </span></p></div>
          <div id='div17' className='flex flex-col justify-center items-center'>
            <span className='text-xs mb-3'><h1 id='17' >{x[16]}</h1></span>
            <Icon name='sun' />              
            <p className='text-base mt-3'>
            <span className='flex'>
            <h1>{hourTemp[18]}</h1>&deg;
            </span></p></div>
          <div id='div18' className='flex flex-col justify-center items-center'>
            <span className='text-xs mb-3'><h1 id='18' >{x[17]}</h1></span>
            <Icon name='sun' />              
            <p className='text-base mt-3'>
            <span className='flex'>
            <h1>{hourTemp[19]}</h1>&deg;
            </span></p></div>
          <div id='div19' className='flex flex-col justify-center items-center'>
            <span className='text-xs mb-3'><h1 id='19' >{x[18]}</h1></span>
            <Icon name='sun' />              
            <p className='text-base mt-3'>
            <span className='flex'>
            <h1>{hourTemp[20]}</h1>&deg;
            </span></p></div>
          <div id='div20' className='flex flex-col justify-center items-center'>
            <span className='text-xs mb-3'><h1 id='20' >{x[19]}</h1></span>
            <Icon name='sun' />              
            <p className='text-base mt-3'>
            <span className='flex'>
            <h1>{hourTemp[21]}</h1>&deg;
            </span></p></div>
          <div id='div21' className='flex flex-col justify-center items-center'>
            <span className='text-xs mb-3'><h1 id='21' >{x[20]}</h1></span>
            <Icon name='sun' />              
            <p className='text-base mt-3'>
            <span className='flex'>
            <h1>{hourTemp[22]}</h1>&deg;
            </span></p></div>
          <div id='div22' className='flex flex-col justify-center items-center'>
            <span className='text-xs mb-3'><h1 id='22' >{x[21]}</h1></span>
            <Icon name='sun' />              
            <p className='text-base mt-3'>
            <span className='flex'>
            <h1>{hourTemp[23]}</h1>&deg;
            </span></p></div>
          <div id='div23' className='flex flex-col justify-center items-center'>
            <span className='text-xs mb-3'><h1 id='23' >{x[22]}</h1></span>
            <Icon name='sun' />              
            <p className='text-base mt-3'>
            <span className='flex'>
            <h1>{hourTemp[24]}</h1>&deg;
            </span></p></div>
          <div id='div24' className='flex flex-col justify-center items-center'>
            <span className='text-xs mb-3'><h1 id='24' >{x[23]}</h1></span>
            <Icon name='sun' />              
            <p className='text-base mt-3'>
            <span className='flex'>
            <h1>{hourTemp[25]}</h1>&deg;
            </span></p></div>
          <div id='sunrise' className='flex flex-col justify-center items-center'>
            <h1 className='text-xs mb-3'>{sunrise}</h1>
            <Icon name='sunrise' />    
            <p className='text-base mt-3'>
            <span className='flex'>
            <h1>{hourTemp[26]}</h1>&deg;
            </span></p></div>
          <div id='sunset' className='flex flex-col justify-center items-center'>
            <h1 className='text-xs mb-3'>{sunset}</h1>
            <Icon name='sunset' />       
            <p className='text-base mt-3'>
            <span className='flex'>
            <h1>{hourTemp[27]}</h1>&deg;
            </span></p></div>

          

        </div>
    </div>
    </div>
  )
}

export default HourlyForcast