import React from 'react';
import { BookOutlined, EditOutlined, FileDoneOutlined } from '@ant-design/icons';
import { Avatar, Button, Card, Divider, List, Pagination, Space, Tag, Typography, ConfigProvider } from 'antd';

// import images
import userPic from '../../Assets/user-profile.png'
import google_scholar from '../../Assets/google_scholar.png'
import researchgate from '../../Assets/researchgate.png'
import orcid from '../../Assets/orcid.png'
import linkdin from '../../Assets/linkdin.png'
import github from '../../Assets/github.png'
import portfolio from '../../Assets/portfolio.png'
import profileImages from '../../Assets/profile-images'


// const ListContainer = ({ sectionTitle, data, listType, isAuthenticated, isPaginated = true, dataCollector }) => { // this is for paginated data fetched from backend 
const ListContainer = ({ sectionTitle, data, listType, isAuthenticated, isPaginated = false, dataCollector }) => {

  // const dummyData = [
  //   {
  //     title: "Conducting security ceremony using AR/VR",
  //     author_list: [ "Author One", "Author Two", "Author Three" ],
  //     venue: "",
  //     date: "",
  //     keyword: ["SSI", "Security", "IOT"],
  //     abstract: "This is a test abstract. This is a test abstract This is a test abstract This is a test abstract This is a test abstract This is a test abstract. This is a test abstract This is a test abstract This is a test abstract This is a test abstract . This is a test abstract This is a test abstract. "
  //   },
  //   {
  //     title: "Passwordless authentication using ssi",
  //     author_list: [ "Author One", "Author Two", "Author Three" ],
  //     venue: "",
  //     date: "",
  //     keyword: ["SSI", "Security", "IOT"],
  //     abstract: "This is a test abstract"
  //   },
  //   {
  //     title: "Ownership transfer in consumer IOT",
  //     author_list: [ "Author One", "Author Two", "Author Three" ],
  //     venue: "",
  //     date: "",
  //     keyword: ["SSI", "Security", "IOT"],
  //     abstract: "This is a test abstract"
  //   }
  // ]
  const publicationTypeLabel = (type) => {
    const mapLabel = {
      journal: "Journal",
      conference: "Conference",
      book_chapter: "Book Chapter",
      thesis: "Thesis"
    }

    return mapLabel[ type ]
  }

  return (
    <Card 
      className='custom-card-head'
      title={ 
        <Typography.Title level={ 2 } bodyStyle={{  }} style={{ textAlign: 'center', color: 'white', fontSize: '24px', backgroundColor: '#173149' }}>--- { sectionTitle } ---</Typography.Title> 
      } 
    >
        <List
          // size='small'
          loading={ data?.listData ? false : true }
          grid={{ gutter: [16, 32], column: 3, xs: 1, sm: 1, md: 2, lg: 2, xxl: 4}}
          pagination={ 
            isPaginated ? 
               {
                  showQuickJumper: true, 
                  total: data?.paginationData?.total,
                  pageSize: data?.paginationData?.next?.limit ?? 9,
                  onChange: (page, limit) => { dataCollector( limit, page ) }
               } 
              : 
              false
          }
          dataSource={ data?.listData ?? [] }
          // dataSource={ dummyData ?? [] }
          itemLayout={ 'vertical' }
          renderItem={(item, index) => (
              <List.Item style={{ width: '97%', padding: '17px 17px 0 17px', border: '1px solid rgb(248, 248, 248)' }}>
                {console.log({CC: data?.paginationData?.total})}
                  <List.Item.Meta
                    style={ listType === 'profile' ? { display: 'block', textAlign: 'center', marginInlineEnd: 0 } : { }}
                    className=''
                    // avatar={ 
                    //   listType === 'profile' && 
                    //   <Space direction={ 'vertical' }>
                    //     <Avatar src={ item?.profilePicture ? item.profilePicture : userPic } size={ 160 }  style={{ ...STYLE.customAvatar }}/> 
                    //   </Space>
                    // }

                    title={
                      listType === 'profile' ?
                      <Space direction={ 'vertical' }>
                        <Avatar src={ item?.profilePicture ? profileImages[item.profilePicture] : userPic } shape='square' size={ 215 } /> 
                        {console.log({ IMAGE: item.profilePicture, profileImages})}
                        <a  style={{ color: '#262626', fontSize: '16px' }} rel="noreferrer" target="_blank">{ item?.name ?? '-' }</a>
                        {/* {
                          isAuthenticated && 
                          <Button style={{ padding: '4px 8px', borderRadius: '50%' }}><a href={'/userprofile/' + item?._id }><EditOutlined  style={{ color: 'red' }} size={ 18 } /></a></Button>

                        } */}

                      </Space>
                      :
                      <a href={ item?.link ?? '' } rel="noreferrer" target="_blank" style={{ color: '#094d8d' }}><FileDoneOutlined style={{ fontSize: 18, paddingRight: '5px' }}/>{ item?.title ?? '' }</a>
                    }

                    description={ 
                      <Space direction='vertical' size={[0, 5]} style={{ width: '100%' }}> 
                        { 
                          listType === 'profile' && 
                            <Space  style={{ width: '100%', display: 'block', textAlign: 'center'}}>
                              <Space direction={ 'vertical' }>
                                <Typography.Text type='secondary'>{ item?.designation ?? '-' }</Typography.Text>
                                <Typography.Text type='secondary'>{ item?.officialEmail ?? '-' }</Typography.Text> 
                                {
                                  item?.current_workplace &&
                                <Divider type={ 'vertical' } style={ STYLE.dividerStyle } />
                                }
                                {/* <Typography.Text type='secondary'>{ item?.current_workplace ?? 'Brac University' }</Typography.Text>  */}
                                <Typography.Text type='secondary'>{ item?.current_workplace ?? '' }</Typography.Text> 
                              </Space>
                              <Space wrap={ true } size={[ 0, 0 ]}>
                                <span style={{ paddingRight: '5px',  textAlign: 'center'  }}>Research Interest:</span> 
                                {
                                  item?.researchInterest?.split(',')?.map( item =>  <Tag color={ "purple" }> { item }</Tag> )
                                }
                                {/* <Tag color={ "purple" }> { 'SSI' }</Tag>
                                <Tag color={ "purple" }> { 'Web' }</Tag> */}
                              </Space>
                              <div wrap={ true } style={{ padding: '10px' }}>
                                {
                                  [
                                    item?.linkdin && <a href={ item?.linkdin } target={ '_blank' }><Avatar src={ linkdin } size={ 25 }/></a>,
                                    item?.googleScholar && <a href={ item?.googleScholar } target={ '_blank' }><Avatar src={ google_scholar } size={ 25 }/></a>,
                                    item?.researchgate && <a href={ item?.researchgate } target={ '_blank' }><Avatar src={ researchgate } size={ 25 }/></a>,
                                    item?.github && <a href={ item?.github } target={ '_blank' }><Avatar src={ github } size={ 25 }/></a>,
                                    item?.personalWebsite && <a href={ item?.personalWebsite } target={ '_blank' }><Avatar src={ portfolio } size={ 25 }/></a>
                                  ]
                                }
                                
                                {/* <a href={ 'https://google.com' } target={ '_blank' }><Avatar src={ orcid } size={ 25 }/></a> */}
                              </div>
                            </Space>
                        }
                        
                        {
                          listType === 'publication' && 
                          [
                            <Space direction={ 'vertical' } className='publication-space-item'>
                              {/* { item.keyword }) */}
                              
                              {/* <Typography.Text style={{ color: 'grey' }}> */}
                              <Typography.Text >
                                <Typography.Text style={{ color: 'rgb(9, 77, 141)'}}>Authors: </Typography.Text> 
                                { item?.authors ?? '-' }
                              </Typography.Text>
                              <Typography.Text>
                                {/* {  */}
                                  <Typography.Text style={{ color: 'rgb(9, 77, 141)'}}> { publicationTypeLabel(item?.type) + ": "  }</Typography.Text>{  item?.venue + " || " ?? '-' } 
                                {/* } */}
                                 
                                <Tag color={ "geekblue" } style={{ margin: '0 0 0 5px', padding: '0 3px' }}> {  item?.date ?? '-' } </Tag>
                              </Typography.Text>
                              {/* <Divider style={{ margin: '15px 0 0 0' }}/> */}
                              
                              {
                                item?.keyword &&
                                <Space direction='horizontal' wrap={ true }>
                                  {
                                    item?.keyword?.map( tag =>  <Tag color={ "purple" } style={{ margin: 0 }}> { tag }</Tag> ?? '-')
                                  }
                                </Space>
                              }
                              <Space className='publication-space-item-paragraph'>
                                <Typography.Text type='secondary' >
                                  {/* <Typography.Text type='secondary' underline>Description:</Typography.Text> */}
                                  { item?.description ? item?.description?.slice(0, 600) + '.......' : 'Abstract not available at the moment.' }
                                </Typography.Text>
                              </Space>
                            </Space>,
                            
                          ]
                        }

                      </Space> }
                  />
               {/* {
                  listType === 'profile' && 
                  <div wrap={ true } bodyStyle={{ padding: '5px 10px' }}>
                    <a href={ 'https://google.com' } target={ '_blank' }><Avatar src={ linkdin } size={ 25 }/></a>
                    <a href={ 'https://google.com' } target={ '_blank' }><Avatar src={ google_scholar } size={ 25 }/></a>
                    <a href={ 'https://google.com' } target={ '_blank' }><Avatar src={ researchgate } size={ 25 }/></a>
                    <a href={ 'https://google.com' } target={ '_blank' }><Avatar src={ orcid } size={ 25 }/></a>
                    <a href={ 'https://google.com' } target={ '_blank' }><Avatar src={ github } size={ 25 }/></a>
                    <a href={ 'https://google.com' } target={ '_blank' }><Avatar src={ portfolio } size={ 25 }/></a>
                  </div>
                } */}
                <Divider/>
                <Divider/>
              </List.Item>
          ) }
        />
    </Card>
  );
};

const STYLE = {
  dividerStyle: {
    fontSize: '18px',
    borderWidth: '2px',
    borderColor: '#e5dada',
    fontWeight: '700',
    margin: 'auto 5px'
  },
  customAvatar: {
    marginInlineEnd: 0
  }
}

export default ListContainer;