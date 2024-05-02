import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoading: false,
    publicationList: [],
    recentPublicationList: []
}

const publicationSlice = createSlice({
    name: 'publication',
    initialState,
    reducers:{
        setIsLoading: (state, action) => {
            state.isLoading = action.payload
        },
        setPublicationList: (state, action) => {
            state.publicationList = action.payload
        },
        setRecentPublication: (state, action) => {
            state.recentPublicationList = action.payload
        }
    }
})

export const { setIsLoading, setPublicationList, setRecentPublication } = publicationSlice.actions
export default publicationSlice.reducer