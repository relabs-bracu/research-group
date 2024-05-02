import { Spin } from 'antd';
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import ProtectedRoute from './Components/Layout/ProtectedRoute';

import { Home, People, Login, NewsContainer, AwardContainer, Funding, UserDataContainer, UserProfile, ProjectContainer, AllPublication } from "./Pages";
// import { validateUser } from './Service/Actions/authAction';

class App extends React.PureComponent {

  // componentDidMount() {
  //   const { dispatch } = this.props

  //   // Validate User
  //   const token = localStorage.getItem('relabs_token')
  //   dispatch(validateUser( token ))

  // }

  render(){

    // const isAuthenticated = true
    const isValidating = false
    const token = true
    const { isAuthenticated } = this.props
    // const isAuthenticated = false

    return (
      <div >
        <BrowserRouter>
          <Routes>
            <Route
              exact={true}
              path='/'

              element={
                <Navigate to='/home' />
              }
            />

            <Route
              exact={true}
              path='/home'

              element={
                // isValidating ? <Spin size="large" /> 
                //   : 
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <Home />
                </ProtectedRoute>
              }
            />

            <Route
              exact={true}
              path='/publications'

              element={
                  <ProtectedRoute isAuthenticated={isAuthenticated}>
                    <AllPublication />  
                  </ProtectedRoute>
              }
            />

            <Route
              exact={true}
              path='/people'

              element={
                  <ProtectedRoute isAuthenticated={isAuthenticated}>
                    <People isAuthenticated/>  
                  </ProtectedRoute>
              }
            />

            <Route
              exact={true}
              path='/projects'

              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <ProjectContainer />
                </ProtectedRoute>
              }
            />

            <Route
              exact={true}
              path='/fundings'

              element={
                // isValidating ? <Spin size="large" /> 
                  // : 
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <Funding />
                </ProtectedRoute>
              }
            />

            <Route
              exact={true}
              path='/news'

              element={
                // isValidating ? <Spin size="large" /> 
                  // : 
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <NewsContainer />
                </ProtectedRoute>
              }
            />

            <Route
              exact={true}
              path='/award'

              element={
                // isValidating ? <Spin size="large" /> 
                  // : 
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <AwardContainer />
                </ProtectedRoute>
              }
            />

            <Route
              exact={true}
              path='/login'

              element={
                token && isAuthenticated ?
                  <Navigate to='/home' /> :
                  <ProtectedRoute isAuthenticated={isAuthenticated}>
                    <Login />
                  </ProtectedRoute>
              }
            />

            <Route
              exact={true}
              path='/user/:id'

              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <UserDataContainer />
                </ProtectedRoute>
              }
            />

            <Route
              exact={true}
              path='/userprofile/:id'

              element={
               true ?
                  <ProtectedRoute isAuthenticated={true}>
                    <UserProfile />
                  </ProtectedRoute>
                  : isValidating ? <Spin size="large" /> : <Navigate to='/Login' />
              }
            />
            
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state?.user?.isAuthenticated ?? false,
  
})

const mapDispatchToProps = dispatch => ({ dispatch })

export default connect(mapStateToProps, mapDispatchToProps)(App)