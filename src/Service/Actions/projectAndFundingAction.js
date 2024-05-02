import axios from 'axios'

// import config
import { FUNDINGS, PROJECTS } from '../../Config/config'
import { setFundings, setProjects } from '../Reducers/projectAndFundingReducer'

// Get Initial Verifiers Geo Location
const getProjects = () => {
    return async dispatch => {
        try {
            const response = await axios.get( PROJECTS.GET_ALL )
            const projectList = response?.data?.results
            dispatch( setProjects( projectList ))
        } catch (error) {
            // dispatch(setError(error.response.data.message))
        }
    }
}

const getFundings = () => {
    return async dispatch => {
        try {
            const response = await axios.get( FUNDINGS.GET_ALL )
            const funding = response?.data?.results
            dispatch( setFundings( funding ))

        } catch (error) {
            
        }
    }
}

export { getProjects, getFundings }