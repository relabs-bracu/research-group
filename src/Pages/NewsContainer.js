import { CalendarOutlined, ReadOutlined } from "@ant-design/icons";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// import components
import { Card, Space, Typography } from "antd";
import Event from "../Components/Common/Event";

// import action and reducers
import { getRecentNews } from '../Service/Actions/newsAndRecognitionAction' 

const NewsContainer = () => {
    const dispatch = useDispatch()
    const newsData = useSelector((state) => state?.newsAndRecognition ?? {})

    useEffect(()=>{
        dispatch( getRecentNews() )
    },[])

    return(
        <Card title={ 'News & Events' }>
            {   newsData?.news &&
                newsData?.news?.map(item => <Event dataSource={ item }/>)
            }
        </Card>
    )
}

export default NewsContainer