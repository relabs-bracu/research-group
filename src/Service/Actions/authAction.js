import axios from 'axios'

// Import Config
import { USER } from '../../Config/config'
import { setIsAuthenticated, setUserWithPrivilege } from '../Reducers/userReducer'

// Login Action
export function login(user) {
    return dispatch => {
        // Set `isValidating`
        // dispatch( setIsValidating(true) )

        axios.post(USER.LOGIN, user)
            .then(res => {       
                if(res?.data) {
                    const userData = res.data
                    if( userData?.token ){

                        
                        dispatch( validateUser( userData?.token ) )

                        // const token = userData?.token

                        // // Save `token` & `user` to localStorage
                        // localStorage.setItem('relabs_token', token)
                        // localStorage.setItem('relabs_user', JSON.stringify(userData))

                        // // Dispatch authReducer Values to Redux State
                        // dispatch( setIsAuthenticated(true) )
                        // // dispatch( setToken(token) )
                        
                        // dispatch( setCurrentUser(userData) )

                        // // Set axios default token
                        // axios.defaults.headers.common.Authorization = `Bearer ${ token }`

                    }
                } else {                    
                    // Set Error Msg
                    // dispatch( setError(res?.data?.message ?? 'Token Not Found.') )
                    // // Show Error Alert
                    // showAlert('error', res?.data?.message ?? 'Token Not Found.')

                    throw new Error('Token Not Found')
                }
            })
            .catch(err => {                
                console.error(err)

                // Dispatch `authReducer` Values to Redux State
                // dispatch( setIsAuthenticated(false) )
                // dispatch( setToken(null) )
                // dispatch( setUser({}) )                

                // // Set `isValidating`
                // dispatch( setIsValidating(false) )

                // // Set Error Msg
                // dispatch( setError(err?.response?.data?.message ?? err?.message ?? 'Something went wrong.') )

                // Show Error Alert
                // showAlert('error', err?.response?.data?.message ?? err?.message ?? 'Something went wrong.')
            })
    }
}

// // Logout Action
export function logout() {
    return dispatch => {
        // Set `isValidating`
        // dispatch( setIsValidating(true) )

        // Clear localStorage
        localStorage.clear()

        // Dispatch `authReducer` Values to Redux State
         dispatch( setIsAuthenticated( false ))
         dispatch( setUserWithPrivilege({}))

        // Set `isValidating`
        // dispatch( setIsValidating(false) )
    }
}

// User Validation
export function validateUser(token) {
    return dispatch => {
        // Set `isValidating`
        // dispatch( setIsValidating(true) )

        axios.get( USER.WITH_PRIVILEGE , { headers: { Authorization: `Bearer ${ token }` } })
            .then(res => {
                if( res?.data ) {


                    // Save `token` & `user` to localStorage
                    localStorage.setItem('relabs_token', token)
                    localStorage.setItem('relabs_user', JSON.stringify( res?.data ?? {} ))

                    // Dispatch authReducer Values to Redux State
                    dispatch( setIsAuthenticated(true) )
                    dispatch( setUserWithPrivilege( res?.data ?? {} ))

                    // Set axios default token
                    axios.defaults.headers.common.Authorization = `Bearer ${ token }`

                } else {
                    throw new Error('User Not Found')                    
                }

            })
            .catch(err => {
                console.error(err)

                // Dispatch authReducer Values to Redux State
                dispatch( setIsAuthenticated(false) )
                dispatch( setUserWithPrivilege({}))

                // // Set `isValidating`
                // dispatch( setIsValidating(false) )

                // // Set Error Msg
                // dispatch( setError(err?.response?.data?.message ?? err?.message ?? 'Something went wrong.') )

                // // Show Error Alert
                // showAlert('error', err?.response?.data?.message ?? err?.message ?? 'Something went wrong with user access')
            })
    }
}
