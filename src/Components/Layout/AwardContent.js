import React from 'react';
import { BookOutlined } from '@ant-design/icons';
import { Avatar, Card, Divider, List, Space, Tag, Typography } from 'antd';
import userPic from '../../Assets/user-profile.png'



const AwardContent = ({ data }) => {


  return (
    <Card
      title={ <Typography.Text style={{ textAlign: 'center', color: '#2b2e30', fontSize: '16px', display: 'block' }}>{ 'Award and Recognition List' }</Typography.Text> } 
    >
        <List
          grid={{ gutter: [32, 16], column: 2, xs: 1, sm: 1, md: 2}}
          pagination={[ 'bottom', 'center' ]}
          dataSource={ data }
          itemLayout={ 'vertical' }
          renderItem={(item, index) => (
              <List.Item style={{ width: '90%' }}>
                <List.Item.Meta
                  className={'award-title'}
                  title={ 
                    <Space>
                      <Typography.Text style={{ color: "#6468ff", margin: '0px' }}>
                        <BookOutlined style={{ paddingRight: '5px', color: '#3a3a3a' }}/>
                        {
                          item?.award_title ?? '-'
                        } 
                      </Typography.Text>
                    </Space>
                  }
                  description={ 
                    <Space direction='vertical' size={[0, 5]}> 
                      <Typography.Text>Awarded work: <a style={{ color: '#474747' }} href={ item?.link ?? '-' } >{ item?.work_title ?? '-' }</a></Typography.Text>             
                      <Divider direction={ 'horizontal' } style={{ margin: "0" }}/>
                      <Typography.Text type={ 'secondary' }>Author/Contributor: { item?.author_list ?? '-' }</Typography.Text>             
                      <Typography.Text type={ 'secondary' }>Awarded by: { item?.awarded_by ?? '-' }</Typography.Text>             
                      <Typography.Text type={ 'secondary' }>Organized by: { item?.organizer ?? '-' }</Typography.Text>             
                      <Typography.Text type={ 'secondary' }>Date: { item?.date ?? '-' }</Typography.Text>             
                      <Typography.Text type={ 'secondary' }>Other info: { item?.other_info ?? '-' }</Typography.Text>       
                      {/* {
                        item?.link &&
                        <Typography.Text>Useful link: <a href={ item?.link } target={ '_blank' }>{ item?.link }</a></Typography.Text>             
                      } */}

                      {
                        item?.award_image &&
                        <Typography.Text type={ 'secondary' }>Image: <a href={ item?.award_image ?? '-' }>Click Here</a></Typography.Text>             
                      }      
                    </Space> }
                />
                <Divider direction={ 'horizontal' }/>
              </List.Item>
          )}
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
  }
}

export default AwardContent;