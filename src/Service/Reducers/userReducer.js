import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoading: false,
    userList: [],
    isAuthenticated: false,
    userWithPrivilege: {}, // user with admin privilege
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        setIsLoading: (state, action) => {
            state.isLoading = action.payload
        },
        setUserList: (state, action) => {
            state.userList = action.payload
        },
        setIsAuthenticated: (state, action) => {
            state.isAuthenticated = action.payload
        },
        setUserWithPrivilege: (state, action) => {
            state.userWithPrivilege = action.payload
        }
    }
})

export const { setIsLoading, setUserList, setIsAuthenticated, setUserWithPrivilege } = userSlice.actions
export default userSlice.reducer