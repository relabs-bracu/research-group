import React from "react";
import { Card, Divider } from "antd";
import { connect } from 'react-redux'
import * as XLSX from 'xlsx';

// import component
import ListContainer from "../Components/Common/ListContainer";

// import utils and actions
import { getUser, getUserFromExcel } from '../Service/Actions/userAction'

//import images
import team_1 from '../Assets/team_1.jpg'

class Members extends React.PureComponent {
  componentDidMount(){
    const { dispatch, userList, isLoading } = this.props
    // dispatch( getUser({limit: 9, page: 1}) )
    console.log("CALLED")
    dispatch( getUserFromExcel() )

  }

  // set updated list data
  _setUpdatedListData = (limit, page) => {
    const { dispatch } = this.props
    console.log({ limit, page })
    dispatch( getUser({ limit, page }) )
  }

    render(){
      const { userList, isAuthenticated } = this.props
      // const paginationData = { total: userList?.total, next: userList?.next, previous: userList?.previous }
      console.log({ userList })
      return(
          <Card>
              <div style={ STYLE.sliderContainer }>
                <img src={ team_1 }  style={ STYLE.contentStyle } />
              </div>
              <Divider />
              <ListContainer 
                  sectionTitle={ "Director" } 
                  // data={{ listData: userList?.results, paginationData }} // this is for data from backend with pagination
                  data={{ listData: userList.director }}
                  listType={ 'profile' }
                  isAuthenticated= { isAuthenticated }
                  isPaginated={ false }
                  dataCollector={ this._setUpdatedListData }
              />
              <Divider />
              <ListContainer 
                  sectionTitle={ "Faculty Members" } 
                  // data={{ listData: userList?.results, paginationData }} // this is for data from backend with pagination
                  data={{ listData: userList.lecturer }}
                  listType={ 'profile' }
                  isAuthenticated= { isAuthenticated }
                  isPaginated={ false }
                  dataCollector={ this._setUpdatedListData }
              />
              <Divider />
              <ListContainer 
                  sectionTitle={ "Research Assistants" } 
                  // data={{ listData: userList?.results, paginationData }} // this is for data from backend with pagination
                  data={{ listData: userList?.research_assistant }}
                  listType={ 'profile' }
                  isAuthenticated= { isAuthenticated }
                  isPaginated={ false }
                  dataCollector={ this._setUpdatedListData }
              />
              <Divider />
              <ListContainer 
                  sectionTitle={ "Students" } 
                  // data={{ listData: userList?.results, paginationData }} // this is for data from backend with pagination
                  data={{ listData: userList.current_student }}
                  listType={ 'profile' }
                  isAuthenticated= { isAuthenticated }
                  isPaginated={ true }
                  dataCollector={ this._setUpdatedListData }
              />
          </Card>
      )
    }
}

const STYLE = {
  sliderContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    marginBottom: '30px'
  },
  contentStyle: {  
    flexShrink: 0,
    maxHeight: '450px',
    minWidth: '100%',
    minHeight: '100%',
    objectFit: 'cover',
  }
}



// reducers state value as props
const mapStateToProps = state => ({
  userList: state?.user?.userList ?? [],
  isLoading: state?.user?.isLoading ?? false,
  isAuthenticated: state?.user?.isAuthenticated ?? false,
})

// dispatcher as props
const mapDispatchToProps = dispatch => ({ dispatch })

export default connect( mapStateToProps, mapDispatchToProps )( Members )
