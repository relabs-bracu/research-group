import axios from 'axios'
import * as XLSX from 'xlsx';

import { setIsLoading , setUserList } from '../Reducers/userReducer'

// import config
import { USER } from '../../Config/config'

// Get members data from backend
const getUser = ({ limit = 9, page = 1 }) => {
    return async dispatch => {
        try {
            const response = await axios.get( `${ USER.GET_ALL }?limit=${ limit }&page=${ page }` )
            const userList = response?.data
            console.log({ userList })
            // const transformedData = transformVerifiersLastPositionGeoLocation(data)            
            

            dispatch(setUserList( userList ))
            // 'CALL END')
            // dispatch(activateSocketConnection())
        } catch (error) {
            // dispatch(setError(error.response.data.message))
        }
    }
}

// Get members data from excel
const getUserFromExcel = () => {
    return async dispatch => {
        try {
            const filePath = require('../../Db/db-user.csv');
            const bufferResponse = await fetch(filePath)
            const data = await bufferResponse.arrayBuffer()

            const workbook = XLSX.read(data, { type: 'array' });
            const sheetName = workbook.SheetNames[0]; // Assume only one sheet
            const sheet = workbook.Sheets[sheetName];
            const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
            const userList = formatExcelData(jsonData)
            console.log({sheet, jsonData, userList});

            dispatch(setUserList( userList ))
        } catch ( err ) {
            console.error( err )
            // dispatch(setError(error.response.data.message))
        }
    }
}

const formatExcelData = ( value ) => {

    const data = {
        director: [],
        professor: [],
        lecturer: [],
        research_assistant: [],
        current_student: [],
        // undergradeStudents:[],
        collaborator: []
    }

    value.forEach( (item, index) => {
      if( index === 0 || item.length === 0 ) return

      const structuredData = {
        timestamp: item[0],
        // email: item[1], // skipped intentionall. Form submitted from this address
        name: item[2],
        designation: item[3],
        // studentIditem[4], // skipped intentionally
        currentWorkplace: item[5],
        officialEmail: item[6],
        // personalEmail: item[7] // skipped intentionally
        // contactNo: item[8] //skipped intentionally
        country: item[9],
        researchInterest: item[10],
        github: item[11],
        linkdin: item[12],
        googleScholar: item[13],
        researchgate: item[14],
        personalWebsite: item[15],
        // uploadedImage: item[16], // images are renamed with official email to make it unique
        memberType: item[17],
        profilePicture: item[18].trim()
      }
    //   console.log(item)
    //   console.log(item[17])

      data[item[17]].push(structuredData)

    })

    return data

  }




export { getUser, getUserFromExcel }