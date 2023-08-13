import React, { useEffect } from "react";
import Icon from "../icons+slider/AllTheIcons";

function HourlyForcast() {
  let FullHour = 1;
  let sunrise;
  let sunset;
  let x = [];

  const numberArray = [
    0, 1, 2, 3, 45, 48, 55, 65, 81, 82, 53, 63, 80, 51, 61, 95, 96, 99, 71, 77,
    85, 86, 56, 57, 66, 67, 75, 73,
  ];

  function generateRandomNumberFromArray(numbersArray) {
    if (numbersArray.length === 0) {
      throw new Error("The array must contain at least one number");
    }

    const randomIndex = Math.floor(Math.random() * numbersArray.length);
    return numbersArray[randomIndex];
  }
  var IconCodeTemporary = [];
  for (let i = 0; i < 26; i++) {
    IconCodeTemporary[i] = generateRandomNumberFromArray(numberArray);
  }

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

  const timestampsunrise = 1689216185;
  const sunriseTime = new Date(timestampsunrise * 1000);
  let sunrisehour = sunriseTime.getHours();
  let sunriseminute = sunriseTime.getMinutes();

  sunrise = sunrisehour + ":" + sunriseminute;

  const timestampsunset = 1689266185;
  const sunsetTime = new Date(timestampsunset * 1000);
  let sunsethour = sunsetTime.getHours();
  let sunsetminute = sunsetTime.getMinutes();

  sunset = sunsethour + ":" + sunsetminute;

  let hourTemp = [];

  for (let i = 0; i < 28; i++) {
    hourTemp[i] = i;
  }

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
        <span className="absolute whitespace-nowrap">
          <div className="flex pl-4 pt-3 text-xs  text-white text-opacity-60">
            <Icon name="clock-top" />
            <p className="font-medium pl-1">HOURLY FORCAST</p>
          </div>
        </span>
        <div
          id="HourBox"
          className="text-white font-medium mt-6 flex pl-4 space-x-10  overflow-x-auto pr-5"
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
                  <Icon name={IconCodeTemporary[index]} />
                </span>
                <span className="flex mt-3 justify-center items-center">
                  <h1>{hourTemp[index]}</h1>&deg;
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
