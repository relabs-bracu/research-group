import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    news: [],
    award: []
}

const newsAndRecognitionSlice = createSlice({
    name: 'newsAndRecognition',
    initialState,
    reducers: {
        setIsLoading: (state, action) => {
            state.isLoading = action.payload
        },
        setNews: (state, action) => {
            state.news = action.payload
        },
        setAward: (state, action) => {
            state.award = action.payload
        }
    }
})

export const { setIsLoading, setNews, setAward } = newsAndRecognitionSlice.actions
export default newsAndRecognitionSlice.reducer