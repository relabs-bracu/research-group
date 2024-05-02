import { Card } from "antd";
import React from "react";
import UserLogin from "../Components/Layout/UserLogin";

class Login extends React.PureComponent {

    render(){

        return(
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                <Card style={ cardStyle } hoverable>
                    <UserLogin />
                </Card>

            </div>
        )
    }
}

const cardStyle = {
    // width: 'fit-content',
    height: 'fit-content',
    border: '0.5px solid #FAFBFD',
    boxShadow: '2px 2px 10px #c9cdd6',
}

export default Login