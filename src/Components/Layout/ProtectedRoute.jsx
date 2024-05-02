import React, { useState } from 'react'
// import PropTypes from 'prop-types'
import { Navigate } from 'react-router-dom'

// Import Components
import { Layout } from 'antd'
// import TopNav from '../Components/Common/TopNav'


// styles
// import 'antd/dist/reset.css';
// import '../App.css';

// Import Actions and reducers
// import { connect } from 'react-redux'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import Navbar from './Navbar'


const { Content } = Layout

const ProtectedRoute = ({ isAuthenticated, children, user, dispatch }) => {
    const [collapsed, setCollapsed] = useState(false);
   

    // if(isAuthenticated) {
        return (
            <Layout>
                {/* <TopNav/> */}
                <Layout>
                    <Layout.Sider   
                        breakpoint='md'
                        collapsedWidth='0'
                        collapsible 
                        collapsed={ collapsed } 
                        trigger={ window.innerWidth < 768 ? ( collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined /> ) : null}
                        onCollapse={(value) =>  setCollapsed(value)}
                        style={{ zIndex: '100', position: 'fixed' }}
                    >
                        <Navbar isAuthenticated={ isAuthenticated }/>
                    </Layout.Sider>
                    <Layout className='site-layout'>
                        <Content
                            className='site-layout-background'
                            style={{
                                margin: '15px 10px 15px 210px',
                                ...marginOfLeftNavSizeForContent,
                                padding: 15,
                                // backgroundColor: '#FFFFFF',
                                minHeight: 'calc(100vh - 30px)',
                                overflowY: 'scroll'
                            }}
                            >
                            { children }
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        )
    // }
    // return <Navigate to='/login' />
}

// styles
const marginOfLeftNavSizeForContent = {
    marginLeft: window.innerWidth < 768 ? '10px' : '210px'
}


// Prop Types
// ProtectedRoute.propTypes = {
//     isAuthenticated: PropTypes.bool,
//     user: PropTypes.object
// }

// ProtectedRoute.defaultProps = {
//     isAuthenticated: false,
//     users: ''
// }

// const mapStateToProps = state => ({
//     user: state?.auth?.user ?? '',
//     allowedPermission: state?.permission?.allowedPermission ?? []
// })

// const mapDispatchToProps = dispatch => ({ dispatch })

export default ProtectedRoute 