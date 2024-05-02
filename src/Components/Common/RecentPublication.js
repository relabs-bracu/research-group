import React from "react";
import { connect } from 'react-redux'

// import component
import ListContainer from "./ListContainer";

import { getPublication } from '../../Service/Actions/publicationAction'

class RecentPublication extends React.PureComponent {

  componentDidMount(){
    const { dispatch, publicationList, isLoading } = this.props
    console.log({ publicationList, isLoading })
    dispatch( getPublication({ limit: 6, page: 1 }) )
  }

  // sort the publication list 
  _getSortedPublication( publicationList ){
    let data = []
    if( publicationList?.results ){
      data = [...publicationList.results]?.reverse()
    }
    return data
  }
    
  render(){
    const { publicationList } = this.props
    const sortedPublicationList = this._getSortedPublication( publicationList )
      return(
          <div>
              <ListContainer 
                  sectionTitle={ "Recent Publications" } 
                  data={{ listData: sortedPublicationList }}
                  listType={ 'publication' }
                  isPaginated={ false }
              />
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

export default connect( mapStateToProps, mapDispatchToProps )( RecentPublication )