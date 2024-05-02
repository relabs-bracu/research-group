import axios from 'axios'

import { setIsLoading , setPublicationList, setRecentPublication } from '../Reducers/publicationReducer'

// import config
import { PUBLICATION } from '../../Config/config'

// Get all publications
const getPublication = ({ limit = 10, page = 1 }) => {
    return async dispatch => {
        try {
            console.log( { limit, page } )
            const response = await axios.get( `${ PUBLICATION.GET_LIST }?limit=${ limit }&page=${ page }` )
            const publicationList = response?.data
            // const publicationList = { next: response?.data?.next, results: response?.data?.results }
            // const transformedData = transformVerifiersLastPositionGeoLocation(data)            
            console.log({ response })
            dispatch(setPublicationList( publicationList ))
            // 'CALL END')
            // dispatch(activateSocketConnection())
        } catch (error) {
            // dispatch(setError(error.response.data.message))
        }
    }
}


export { getPublication }