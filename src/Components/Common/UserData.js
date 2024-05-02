import React from 'react'
// import { connect } from 'react-redux'

// Import Components
import { Card, Divider, Tag, Typography } from 'antd'
// import UserProfileForm from '../Components/Layout/UserProfileForm'
// import UserBanner from '../Components/Common/UserBanner'
// import { useParams } from 'react-router-dom'
import ListContainer from './ListContainer'


const UserData = () => {   
    // const { id } = useParams()

    const publicationList = [
        {
          title: 'Blockchain Survey 1',
          link: 'https://google.com',
          keyword: 'Blockchain, Ethereum',
          description: 'This is a dummy description'
        },
        {
          title: 'This is a dummy title for research paper',
          link: 'https://google.com',
          keyword: 'Blockchain, Ethereum',
          description: 'This is a dummy description'
        },
        {
          title: 'Blockchain Survey 3',
          link: 'https://google.com',
          keyword: 'Blockchain, Fabric',
          description: 'This is a dummy description'
        },
        {
          title: 'Blockchain Survey 4',
          link: 'https://google.com',
          keyword: 'Blockchain, Solana',
          description: 'This is a dummy description'
        },
    ];

    return (
        <div>
            <Card hoverable title={ 'User Information' }>
                <Typography.Paragraph>Name: { 'MD. Yeasin Ali' }</Typography.Paragraph>
                <Typography.Paragraph>Designation: { 'Graduate Research Assistant' }</Typography.Paragraph>
                <Typography.Paragraph>Department: { 'CSE' }</Typography.Paragraph>
                <Typography.Paragraph>Email: { 'yeasin.ali@bracu.ac.bd' }</Typography.Paragraph>
                <Typography.Paragraph>Research Interest/Area: 
                  <Tag color={ 'success' }>Keyword 1</Tag> 
                  <Tag color={ 'success' }>Keyword 2</Tag>
                  <Tag color={ 'success' }>Keyword 3</Tag>
                </Typography.Paragraph>
            </Card>

            <Divider />
            
            <ListContainer 
                sectionTitle={ 'Uaser Research / Publications' }
                data={ publicationList }
            />

        </div>
    )
}


// Map State To Props
// const mapStateToProps = (state) => ({

// })

// Map Dispatch To Props
// const mapDispatchToProps = (dispatch) => ({ dispatch })

export default UserData