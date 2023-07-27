import React, {useEffect} from 'react';
import Icon from '../icons+slider/AllTheIcons';
import SliderVthumb  from '../icons+slider/SliderVthumb';
import SliderXthumb from '../icons+slider/sliderXthumb';



function WeeklyForcast() {
  let mintempthisweek, maxtempthisweek, currenttemp;

  mintempthisweek = 20;
  maxtempthisweek = 36;
  currenttemp = 31;

  let today=7;
  var days = {1:'Sun',2:'Mon',3:'Tue',4:'Wed',5:'Thu',6:'Fri',7:'Sat',8:'Sun',9:'Mon',10:'Tue',11:'Wed',12:'Thu',13:'Fri',14:'Sat'};

  for(let i=1; i<7;i++){
    days[i] = days[i+today]
  }


  return (
    <div>
      <div className='boxColor flex box-border mb-3 mx-auto h-fit w-11/12 bg-black bg-opacity-5 rounded-2xl'>
      <span className='absolute'><div className='flex pl-4 pt-2 text-xs mt-0.5 text-white text-opacity-60'><Icon name='calendar' /><p className='font-medium pl-1'>7-DAY FORCAST</p></div></span>
        <hr className='absolute h-px mt-8 ml-4 w-5/6 border-0 bg-white opacity-20' />
        <div className="Boxwheel text-white mt-9 mb-1.5 pl-4 grid gap-3.5">
          <div className='text-lg grid grid-flow-col mt-0.5 auto-cols-max ustify-center items-center'>
            <h1 className=''>Today </h1>
            <div className='absolute ml-24 mt-0.5' ><Icon name='sun'/></div>
              <span className='absolute ml-38 text-white text-opacity-70'><var class="not-italic" data-min-temp-today>25</var><span >&deg;</span></span>
              {/* maybe I will add a slider */}
              <span className='absolute right-8'><var class="not-italic" data-max-temp-today>36</var><span >&deg;</span></span>
            <hr className='absolute mt-10 h-px w-5/6 border-0 bg-white opacity-20' />
          </div>
          <div className='text-lg grid grid-flow-col mt-1 auto-cols-max ustify-center items-center'>
            <h1 className=''>{days[1]}</h1>
            <div className='absolute ml-24 mt-0.5' ><Icon name='SunAndCloud' /></div>
            <span className='absolute ml-38 text-white text-opacity-70'><var class="not-italic" >24</var><span >&deg;</span></span>
              {/* maybe I will add a slider */}
              <span className='absolute right-8'><var class="not-italic" >35</var><span >&deg;</span></span>
            <hr className='absolute mt-9 h-px w-5/6 border-0 bg-white opacity-20' />
          </div>
          <div className='text-lg grid grid-flow-col mt-1 auto-cols-max ustify-center items-center'>
            <h1 className=''>{days[2]}</h1>
            <div className='absolute ml-24 mt-0.5' ><Icon name='cloud' /></div>
            <span className='absolute ml-38 text-white text-opacity-70'><var class="not-italic" >26</var><span >&deg;</span></span>
              {/* maybe I will add a slider */}
              <span className='absolute right-8'><var class="not-italic" >39</var><span >&deg;</span></span>
            <hr className='absolute mt-9 h-px w-5/6 border-0 bg-white opacity-20' />
          </div>
          <div className='text-lg grid grid-flow-col mt-1 auto-cols-max ustify-center items-center'>
            <h1 className=''>{days[3]}</h1>
            <div className='absolute ml-24 mt-0.5' ><Icon name='cloud-drizzle' /></div>
            <span className='absolute ml-38 text-white text-opacity-70'><var class="not-italic" >23</var><span >&deg;</span></span>
              {/* maybe I will add a slider */}
              <span className='absolute right-8'><var class="not-italic" >32</var><span >&deg;</span></span>
            <hr className='absolute mt-9 h-px w-5/6 border-0 bg-white opacity-20' />
          </div>
          <div className='text-lg grid grid-flow-col mt-1 auto-cols-max ustify-center items-center'>
            <h1 className=''>{days[4]}</h1>
            <div className='absolute ml-24 mt-0.5' ><Icon name='cloud-rain-heavy' /></div>
            <span className='absolute ml-38 text-white text-opacity-70'><var class="not-italic" >21</var><span >&deg;</span></span>
              {/* maybe I will add a slider */}
              <span className='absolute right-8'><var class="not-italic" >33</var><span >&deg;</span></span>
            <hr className='absolute mt-9 h-px w-5/6 border-0 bg-white opacity-20' />
          </div>
          <div className='text-lg grid grid-flow-col mt-1 auto-cols-max ustify-center items-center'>
            <h1 className=''>{days[5]}</h1>
            <div className='absolute ml-24 mt-0.5' ><Icon name='cloud-sleet' /></div>
            <span className='absolute ml-38 text-white text-opacity-70'><var class="not-italic" >22</var><span >&deg;</span></span>
              {/* maybe I will add a slider */}
              <span className='absolute right-8'><var class="not-italic" >35</var><span >&deg;</span></span>
            <hr className='absolute mt-9 h-px w-5/6 border-0 bg-white opacity-20' />
          </div>
          <div className='text-lg grid grid-flow-col mt-1 auto-cols-max ustify-center items-center'>
            <h1 className=''>{days[6]}</h1>
            <div className='absolute ml-24 mt-0.5' ><Icon name='cloud-snow' /></div>
            <span className='absolute ml-38 text-white text-opacity-70'><var class="not-italic" >20</var><span >&deg;</span></span>
              {/* maybe I will add a slider */}
              <span className='absolute right-8'><var class="not-italic" >30</var><span >&deg;</span></span>
          </div>
        </div>
    </div>
    </div>
  )
}

export default WeeklyForcast
