import React from 'react'
// import { connect } from 'react-redux'

// Import Components
import { Card } from 'antd'
import UserProfileForm from '../Components/Layout/UserProfileForm'
import UserBanner from '../Components/Common/UserBanner'


class UserProfile extends React.PureComponent {   

    render() {
        return (
            <Card hoverable>
                <Card style={{ backgroundColor: '#eff1f5', textAlign: 'center' }}>
                    <UserBanner />
                </Card>
            
                <UserProfileForm />
            </Card>
        )
    }
}


// Map State To Props
// const mapStateToProps = (state) => ({

// })

// Map Dispatch To Props
// const mapDispatchToProps = (dispatch) => ({ dispatch })

export default UserProfile