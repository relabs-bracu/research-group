import axios from 'axios'
import * as XLSX from 'xlsx';

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

// Get publications data from excel sheet
const getPublicationFromExcel = () => {
    return async dispatch => {
        try {
            const filePath = require('../../Db/db-publication.csv');
            const bufferResponse = await fetch(filePath)
            const data = await bufferResponse.arrayBuffer()

            const workbook = XLSX.read(data, { type: 'array' });
            const sheetName = workbook.SheetNames[0]; // Assume only one sheet
            const sheet = workbook.Sheets[sheetName];
            const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
            const publicationList = formatExcelData(jsonData)
            console.log({sheet, jsonData, publicationList});

            dispatch(setPublicationList( publicationList ))
        } catch ( err ) {
            console.error( err )
            // dispatch(setError(error.response.data.message))
        }
    }
}

const formatExcelData = ( value ) => {

    const data = {
        journal: [],
        conference: [],
        book_chapter: [],
        thesis: []
    }

    value.forEach( (item, index) => {
      if( index === 0 || item.length === 0 ) return

      const structuredData = {
        title: item[0],
        date: item[1],
        type: item[2],
        authors: item[3],
        venue: item[4],
        link: item[5],
        description: item[6]
      }
      console.log(item)
      console.log(item[2])

      data[item[2]].unshift(structuredData)

    })

    return data

  }


export { getPublication, getPublicationFromExcel }