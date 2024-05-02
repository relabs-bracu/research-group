import { CalendarOutlined, ReadOutlined } from "@ant-design/icons";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// import components
import { Card, Space, Typography } from "antd";
import Event from "../Components/Common/Event";

// import action and reducers
import { getProjects } from "../Service/Actions/projectAndFundingAction";


const ProjectContainer = () => {
    const dispatch = useDispatch()
    const data = useSelector((state) => state?.projectAndFunding ?? {})

    useEffect(()=>{
        dispatch( getProjects() )
    },[])

    return(
        <Card title={ 'Projects' }>
            {   data?.projects &&
                data?.projects?.map(item => <Event dataSource={ item } sourceType={ 'project' }/>)
            }
        </Card>
    )
}

export default ProjectContainer