import { Card, Col, Divider, Row, Typography } from "antd";
// import { Button, ConfigProvider } from 'antd';
import React from "react";
import heroImg from "../Assets/hero.png"
import CarouselContainer from "../Components/Common/CarouselContainer";
import RecentPublication from "../Components/Common/RecentPublication";
import GroupDescription from "../Components/Layout/GroupDescription";
import UserRegistration from "../Components/Layout/UserRegistration";


class Home extends React.PureComponent {

    render(){

        return(
            <>
                <Card style={ heroContainer } bodyStyle={{ padding: '10px' }}>
                    <CarouselContainer />
                </Card>
                
                <Divider />

                <Row>
                    <Col xs={ 24 } md={ 24 } lg={ 24 } style={ recentArticleContainer }>
                        <GroupDescription />
                    </Col>
                </Row>
                
                {/* <Row>
                    <Col xs={ 24 } md={ 24 } lg={ 24 } style={ recentArticleContainer }>
                        <RecentPublication />
                    </Col>
                </Row> */}
            </>
        )
    }
}

const heroContainer = {
    // backgroundColor: 'rgba(0, 21, 41, 10%)', 
    backgroundColor: 'rgba(199, 186, 255, 20%)',
    marginBottom: '20px'
    // backgroundColor: 'rgba(104 83 195 / 20%)',
    // backgroundColor: '#FAFCFE' 
}

const formColStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '350px',
    // border: '1px solid red',
    // backgroundColor: '#ffffff'
}
const imageColStyle = {
    display: 'flex', 
    alignItems: 'center',
    justifyContent: 'center'
}
const imageStyle = {
    display: 'block',
    margin: '0 auto'
}

const recentArticleContainer = {
    // backgroundColor: 'green'
}

export default Home