import React, { useEffect } from "react";
import Icon from "../icons+slider/AllTheIcons";
import { CurrentTemp, IconCodeNow, SunriseStemp, SunsetStemp, HourlyIcon, HourlyTemp, IsDay  } from "../RenderData";
import DayOrNight, { Day } from '../DayOrNight';

function HourlyForcast() {


  function getCurrentTime() {
    const currentTime = new Date();
    return currentTime;
  }
  const currentTime = getCurrentTime();

  let FullHour = currentTime.getHours();
  let sunrise;
  let sunset;

  const timestampsunrise = SunriseStemp;
  const sunriseTime = new Date(timestampsunrise * 1000);
  let sunrisehour = sunriseTime.getHours();
  let sunriseminute = sunriseTime.getMinutes();
  sunrise = sunrisehour + ":" + sunriseminute;

  const timestampsunset = SunsetStemp;
  const sunsetTime = new Date(timestampsunset * 1000);
  let sunsethour = sunsetTime.getHours();
  let sunsetminute = sunsetTime.getMinutes();
  sunset = sunsethour + ":" + sunsetminute;

  var DayNight = []

  let UntilRise=(sunrisehour-FullHour)
  if(UntilRise<0){
    UntilRise=UntilRise+24
  }

  let UntilSet=(sunsethour-FullHour)
  if(UntilSet<0){
    UntilSet=UntilSet+24
  }

  


  if(Day){
    for(let i=0;i<=UntilSet;i++){
      DayNight[i]=1
    }
    for(let i=(UntilSet+1);i<=UntilRise;i++){
      DayNight[i]=0
    }for(let i=(UntilRise+1);i<=25;i++){
      DayNight[i]=1
    }
  }else if(!Day){
    for(let i=0;i<=UntilRise;i++){
      DayNight[i]=0
    }
    for(let i=(UntilRise+1);i<=UntilSet;i++){
      DayNight[i]=1
    }for(let i=(UntilSet+1);i<=25;i++){
      DayNight[i]=0
    }
  }

  var IconCode = []
  for(let i=0;i<HourlyIcon.length;i++){
    if(DayNight[i]===0){
      if(HourlyIcon[i]===0 || HourlyIcon[i]===1){
        IconCode[i]=1000
      }else if(HourlyIcon[i]===2){
        IconCode[i]=2000
      }
    }else if(DayNight[i]===1){
      if(HourlyIcon[i]===0 || HourlyIcon[i]===1){
        IconCode[i]=1001
      }else if(HourlyIcon[i]===2){
        IconCode[i]=2001
      }
    }
  }
  
  
  
    
  


  let x = [];

  for (let i = 0; i < 26; i++) {
    x[i] = FullHour + i;
    x[0] = "now";
  }

  for (let i = 0; i < 26; i++) {
    if (!isNaN(x[i])) {
      if (x[i] >= 24) {
        x[i] = x[i] - 24;
      }
    } else if (!isNaN(x[i])) {
    }
  }



  

  let HourTemp = [];

  for(let i=0;i<=26;i++){
    HourTemp[i+1]=HourlyTemp[i]
  }
  HourTemp[0]= CurrentTemp
  
  useEffect(() => {
    let TargetDivSunrise, TargetDivSunset;

    for (let i = 1; i < 26; i++) {
      const element = document.getElementById(i.toString());
      if (!isNaN(element.textContent)) {
        if (element && element.textContent === sunrisehour.toString()) {
          TargetDivSunrise = i + 1;
        }
      }
    }

    for (let i = 1; i < 26; i++) {
      const element = document.getElementById(i.toString());
      if (!isNaN(element.textContent)) {
        if (element && element.textContent === sunsethour.toString()) {
          TargetDivSunset = i + 1;
        }
      }
    }

    if (TargetDivSunrise) {
      var sunriseElement = document.getElementById("sunrise");
      var afterSunriseElement = document.getElementById(
        "div" + TargetDivSunrise.toString()
      );

      afterSunriseElement.parentNode.insertBefore(
        sunriseElement,
        afterSunriseElement
      );
    }

    if (TargetDivSunset) {
      var sunsetElement = document.getElementById("sunset");
      var afterSunsetElement = document.getElementById(
        "div" + TargetDivSunset.toString()
      );

      afterSunsetElement.parentNode.insertBefore(
        sunsetElement,
        afterSunsetElement
      );
    }

    //remember to add no sunrise and no sunset(in the poles)
  }, []);

  return (
    <div>
      <div className="boxColor flex box-border mt-2 mx-auto h-36 rounded-2xl mb-4">
        <span className="flex whitespace-nowrap">
          <div className="flex pl-4 pt-3 text-xs  text-white text-opacity-60">
            <Icon name="clock-top" />
            <p className="font-medium pl-1">HOURLY FORCAST</p>
          </div>
        </span>
        <div
          id="HourBox"
          className="text-white font-medium mt-6 flex -ml-36 pl-5 space-x-10  overflow-x-auto pr-5"
        >
          {x.map((hour, index) => (
            <div key={index} className="flex mt-5">
              <div id={`div${index}`}>
                <h1
                  id={index}
                  className="text-xs mb-3 flex justify-center items-center "
                >
                  {x[index]}
                </h1>
                <span className="flex justify-center items-center">
                  <Icon name={IconCode[index]} />
                </span>
                <span className="flex mt-3 justify-center items-center">
                  <h1>{HourTemp[index]}</h1>&deg;
                </span>
              </div>
            </div>
          ))}

          <div id="sunrise" className="-ml-4 mr-6">
            <h1 className="text-xs mb-3 flex justify-center items-center">
              {sunrise}
            </h1>
            <span className="flex justify-center items-center">
              <Icon name="sunrise" />
            </span>
            <span className="flex justify-center items-center">
              <h1 className="mt-3">Sunrise</h1>
            </span>
          </div>

          <div id="sunset" className="-ml-4 mr-6">
            <h1 className="text-xs mb-3 flex justify-center items-center">
              {sunset}
            </h1>
            <span className="flex justify-center items-center">
              <Icon name="sunset" />
            </span>
            <span className="flex justify-center items-center">
              <h1 className="mt-3">Sunset</h1>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HourlyForcast;
