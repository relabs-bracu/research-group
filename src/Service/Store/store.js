import { configureStore } from "@reduxjs/toolkit";

// import reducers
import { publicationReducer, userReducer, newsAndRecognitionReducer, projectAndFundingReducer } from '../Reducers'


// Config redux store
const store = configureStore({
    reducer:{
        publication: publicationReducer,
        user: userReducer,
        newsAndRecognition: newsAndRecognitionReducer,
        projectAndFunding: projectAndFundingReducer
    }
})

export default store