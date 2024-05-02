import axios from 'axios'

// import config
import { NEWS, AWARD } from '../../Config/config'
import { setNews, setAward } from '../Reducers/newsAndRecognitionReducer'

// Get Initial Verifiers Geo Location
const getRecentNews = () => {
    return async dispatch => {
        try {
            const response = await axios.get( NEWS.GET_RECENT )
            const newsList = response?.data?.result
            dispatch( setNews( newsList ))
        } catch (error) {
            // dispatch(setError(error.response.data.message))
        }
    }
}

const getAward = () => {
    return async dispatch => {
        try {
            const response = await axios.get( AWARD.GET_ALL )
            const awardList = response?.data?.results
            dispatch( setAward( awardList ))

        } catch (error) {
            
        }
    }
}

export { getRecentNews, getAward }