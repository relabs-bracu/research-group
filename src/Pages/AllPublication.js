import React from "react";
import { connect } from 'react-redux'
import { Divider } from "antd";

// import component
import ListContainer from "../Components/Common/ListContainer";

import { getPublication, getPublicationFromExcel } from '../Service/Actions/publicationAction'

class AllPublication extends React.PureComponent {

  componentDidMount(){
    const { dispatch, publicationList, isLoading } = this.props
    console.log({ publicationList, isLoading })
    // dispatch( getPublication({ limit: 9, page: 1 }) )
    dispatch( getPublicationFromExcel() )
  }

  // sort the publication list 
  _getSortedPublication( publicationList ){
    let data = []
    if( publicationList?.results ){
      data = [...publicationList.results]?.reverse()
    }
    return data
  }

  // set updated list data
  _setUpdatedListData = (limit, page) => {
    const { dispatch } = this.props
    console.log({ limit, page })
    dispatch( getPublication({ limit, page }) )

  }
    
  render(){
      const { publicationList } = this.props
      const sortedPublicationList = this._getSortedPublication( publicationList )
      const paginationData = { total: publicationList?.total, next: publicationList?.next, previous: publicationList?.previous }

      console.log({ publicationList, sortedPublicationList })

      return(
          <div>
              <ListContainer 
                  sectionTitle={ "Journals" } 
                  data={{ listData: publicationList.journal, paginationData }}
                  listType={ 'publication' }
                  dataCollector={ this._setUpdatedListData }
                  isPaginated={ false }
              />
              <Divider />
              <ListContainer 
                  sectionTitle={ "Conferences" } 
                  data={{ listData: publicationList.conference, paginationData }}
                  listType={ 'publication' }
                  dataCollector={ this._setUpdatedListData }
                  isPaginated={ false }
              />
              <Divider />
              <ListContainer 
                  sectionTitle={ "Book Chapters" } 
                  data={{ listData: publicationList.book_chapter, paginationData }}
                  listType={ 'publication' }
                  dataCollector={ this._setUpdatedListData }
                  isPaginated={ false }
              />
              <Divider />
              <ListContainer 
                  sectionTitle={ "Thesis Supervision" } 
                  data={{ listData: publicationList.thesis, paginationData }}
                  listType={ 'publication' }
                  dataCollector={ this._setUpdatedListData }
                  isPaginated={ false }
              />
              <Divider />
          </div>
      )
  }
}

// reducers state value as props
const mapStateToProps = state => ({
  publicationList: state?.publication?.publicationList ?? [],
  isLoading: state?.publication?.isLoading ?? false
})

// dispatcher as props
const mapDispatchToProps = dispatch => ({ dispatch })

export default connect( mapStateToProps, mapDispatchToProps )( AllPublication )