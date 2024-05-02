import React from "react";
import { useSelector } from 'react-redux'

// import components
import { CalendarOutlined, PaperClipOutlined, ReadOutlined } from "@ant-design/icons";
import { Card, Space, Tag, Typography } from "antd";

const Event = ({ dataSource, sourceType }) => {

    return(
        <Card style={{ marginBottom: '15px' }}>
            <Space direction={ 'vertical' }>
                <Space direction={ 'horizontal' }>
                    <Typography.Title level={ 5 } style={{ margin: '0' }}>
                        <PaperClipOutlined style={{ paddingRight: '3px' }}/> 
                        { dataSource?.title ?? '-' }
                    </Typography.Title>
                </Space>
                {
                    sourceType === 'project' &&
                    [
                        <Space>
                            <Typography.Text underline>Project keyword: </Typography.Text> 
                            {
                                dataSource?.keyword?.map( tag =>  <Tag color={ "purple" } style={{ margin: 0 }}> { tag }</Tag> ?? '-')
                            }
                        </Space>,
                        
                        dataSource?.project_location &&
                        <Typography.Text><Typography.Text underline>Location:</Typography.Text>{ dataSource.project_location }</Typography.Text>
                    ]
                }

                <Typography.Text><Typography.Text underline>Investigator:</Typography.Text> { dataSource?.author_list?.join(', ') }</Typography.Text>

                {
                    sourceType !== 'project' && sourceType !== 'funding' &&
                    <Space direction={ 'horizontal' }>
                        <CalendarOutlined />
                        <Typography.Text>Date: { dataSource?.createdAt ?? '-' }</Typography.Text>
                    </Space>
                }
                <Typography.Text type={ 'secondary' } style={{ display: 'block', textAlign: 'justify' }}>{ dataSource?.description ?? dataSource?.about ?? '-' }</Typography.Text>
                
                {
                    dataSource?.other_info &&
                    <Typography.Text><Typography.Text underline>Additional Information: </Typography.Text>  { dataSource?.other_info }</Typography.Text>
                }
                {
                    dataSource?.link &&
                    <Typography.Text>Useful Link: <a target={'_blank'} href={ dataSource?.link }> { dataSource?.link }</a></Typography.Text>
                }
                {
                    (dataSource?.file_url || dataSource?.project_report) &&
                    <Typography.Text>File Download: <a target={'_blank'} href={ dataSource?.file_url ?? dataSource?.project_report }>Click Here</a></Typography.Text>
                }
            </Space>
        </Card>
    )
}

export default Event