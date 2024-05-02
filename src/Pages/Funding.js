import { CalendarOutlined, ReadOutlined } from "@ant-design/icons";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// import components
import { Card, Carousel, Divider, Space, Typography } from "antd";
import Event from "../Components/Common/Event";

// import action and reducers
import { getFundings } from "../Service/Actions/projectAndFundingAction";


const Funding = () => {
    const dispatch = useDispatch()
    const data = useSelector((state) => state?.projectAndFunding ?? {})

    useEffect(()=>{
        dispatch( getFundings() )
    },[])

    return(
        <Card title={ 'Fundings' }>
            {
                data?.fundings?.map(item => <Event dataSource={ item } sourceType={ 'funding' } />)
            }
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

export default Funding