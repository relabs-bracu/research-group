import React from 'react';
import { Carousel } from 'antd';

import slider_1 from '../../Assets/slider-1.jpg'
import slider_2 from '../../Assets/slider-2.jpg'
import slider_3 from '../../Assets/slider-3.jpg'


const CarouselContainer = () => (
  <Carousel autoplay>
    <div style={ sliderContainer }>
      <img src={ slider_1 }  style={ contentStyle } />
    </div>
    <div>
      <img src={ slider_2 }  style={ contentStyle } />
    </div>
    <div>
      <img src={ slider_3 }  style={ contentStyle } />
    </div>
    <div>
      <img src={ slider_2 }  style={ contentStyle } />
    </div>
  </Carousel>
);


const sliderContainer = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden'
}

const contentStyle = {  
  flexShrink: 0,
  maxHeight: '450px',
  minWidth: '100%',
  minHeight: '100%',
  objectFit: 'cover',
};

export default CarouselContainer;