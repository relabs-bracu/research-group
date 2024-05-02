import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    projects: [],
    fundings: []
}

const projectAndFundingSlice = createSlice({
    name: 'projectAndFunding',
    initialState,
    reducers: {
        setIsLoading: (state, action) => {
            state.isLoading = action.payload
        },
        setProjects: (state, action) => {
            state.projects = action.payload
        },
        setFundings: (state, action) => {
            state.fundings = action.payload
        }
    }
})

export const { setIsLoading, setFundings, setProjects } = projectAndFundingSlice.actions
export default projectAndFundingSlice.reducer