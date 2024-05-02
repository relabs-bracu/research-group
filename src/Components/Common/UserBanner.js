import { GithubFilled, LinkedinFilled } from "@ant-design/icons"
import { Image, Space, Tag, Typography } from "antd"

import userPic from '../../Assets/user-profile.png'
import researchgate from '../../Assets/researchgate.png'
import googleSCholar from '../../Assets/google_scholar.png'

const UserBanner = () => {
    return(
        <Space direction='vertical'>
            <Image
                width={200}
                src={ userPic }
            />
            <Typography.Text strong>
                Md. Yeasin Ali | Research Assistant
            </Typography.Text>
            <Typography.Text strong>
                Department of Computer Science and Engineering, BRAC University
            </Typography.Text>
            <Typography.Text type='secondary'>
                Author ID: <Tag color={ 'success' }>123456</Tag>
            </Typography.Text>

            <Space direction="horizontal">
                <img 
                    preview={ 'false' }
                    src={ researchgate }
                    width={ 30 }
                    alt={ 'researchgate-logo' }
                />
                <img 
                    preview={ 'false' }
                    src={ googleSCholar }
                    width={ 30 }
                    alt={ 'google scholar logo' }
                />
                <GithubFilled  style={{ fontSize: 25 }}/>
                <LinkedinFilled style={{ fontSize: 25 }}/>
            </Space>


        </Space>
    )
}

export default UserBanner