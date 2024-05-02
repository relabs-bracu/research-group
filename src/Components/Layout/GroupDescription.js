import React from "react";
import { Card, Col, Row, Typography } from "antd";

import logo from '../../Assets/logo.svg'


class GroupDescription extends React.PureComponent {

    render(){

        return(
            <Card style={{ textAlign: 'center', marginBottom: '25px' }}>
                <img src={ logo } width={ 100 } height={ 100 }/>
                <Typography.Title level={ 2 }>ReLaBS: Research Laboratory of Blockchain and Security at Brac University</Typography.Title>
                <Typography.Paragraph style={{ width: '95%', textAlign: 'justify', margin: '0 auto' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Typography.Paragraph>
            </Card>
        )
    }
}


export default GroupDescription