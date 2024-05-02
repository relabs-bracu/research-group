import { CalendarOutlined, ReadOutlined } from "@ant-design/icons";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// import components
import { Card, Carousel, Divider, Space, Typography } from "antd";
import Event from "../Components/Common/Event";

// import action and reducers
import { getAward } from '../Service/Actions/newsAndRecognitionAction' 
import AwardContent from "../Components/Layout/AwardContent";

// import images
import slider_1 from '../Assets/slider-1.jpg'
import slider_3 from '../Assets/slider-3.jpg'
import slider_2 from '../Assets/slider-2.jpg'


const AwardContainer = () => {
    const dispatch = useDispatch()
    const awardData = useSelector((state) => state?.newsAndRecognition ?? {})

    useEffect(()=>{
        dispatch( getAward() )
    },[])

    return(
        <Card title={ 'Award and Recognition' }>
            <Card>
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
            </Card>
            <Divider />
            <AwardContent data={ awardData?.award ?? [] }/>

        </Card>
    )
}

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

export default AwardContainer