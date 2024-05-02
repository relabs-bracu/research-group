import React, { useEffect } from 'react'
// import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'

// Import Components
import { Form, Select, Button, Space, Divider, Input, DatePicker, Card } from 'antd'
import { CloseSquareOutlined, PlusOutlined } from '@ant-design/icons';
import ListContainer from '../Common/ListContainer';
import { connect } from 'react-redux';



// form label and field ratio
const formItemLayout = {
    labelAlign: 'left',
    labelCol: {
      xs: {
        span: 24,
      }
    },
    wrapperCol: {
      xs: {
        span: 24,
      }
    },
  };


const UserProfileForm = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        // dispatch( get )
    },[])
        
    const publicationList = [
        {
          title: 'Blockchain Survey 1',
          link: 'https://google.com',
          keyword: 'Blockchain, Ethereum',
          description: 'This is a dummy description'
        },
        {
          title: 'Blockchain Survey 2',
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
            
            <Divider />
            <Form 
                name='assignedProperty' 
                layout={ 'vertical' }
                { ...formItemLayout } 
                // onFinish={ assignQuestionToBankOnFinish }
                // form={ form }
            >
                <Form.Item
                    name='name'
                    label={ <label style={ { color: 'rgba(100 100 100 / 92%)' } }>Name</label> }
                    initialValue={ "Md. Yeasin Ali" }
                    rules={[
                    {
                        required: true,
                        message: 'Missing name',
                    },
                    ]}
                >
                    <Input />
                </Form.Item> 

                <Form.Item
                    name="designation"
                    label={ <label style={ { color: 'rgba(100 100 100 / 92%)' } }>Designation</label> }
                    initialValue={ "Research Assistant" }
                    rules={[{ required: true, message: 'Please input your designation!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="department"
                    label={ <label style={ { color: 'rgba(100 100 100 / 92%)' } }>Department</label> }
                    initialValue={ "CSE" }
                    rules={[{ required: true, message: 'Please input your department!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="institute"
                    label={ <label style={ { color: 'rgba(100 100 100 / 92%)' } }>Institute</label> }
                    initialValue={ "BRAC University" }
                    rules={[{ required: true, message: 'Please input your institute!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label={ <label style={ { color: 'rgba(100 100 100 / 92%)' } }>Contact No.</label> }
                    initialValue={ "yeasin.ali@bracu.ac.bd" }
                    name="mobileNo"
                    rules={[{ required: true, message: 'Please enter your mobile no !' }]}
                >
                    <Input />
                </Form.Item>
                
                <Form.Item
                    label={ <label style={ { color: 'rgba(100 100 100 / 92%)' } }>Research Area</label> }
                    // initialValue={ "yeasin.ali@bracu.ac.bd" }
                    name="researchArea"
                    rules={[{ required: true, message: 'Please enter keywork of your researh area/category !' }]}
                >
                    <Select
                        mode="tags"
                        style={{
                        width: '100%',
                        }}
                        placeholder="Tags Mode"
                        // onChange={handleChange}
                        // options={options}
                    />
                </Form.Item>

                <Form.Item
                    label={ <label style={ { color: 'rgba(100 100 100 / 92%)' } }>Google Scholar Profile</label> }
                    // initialValue={ "yeasin.ali@bracu.ac.bd" }
                    name="googleScholar"
                    // rules={[{ required: true, message: 'Please enter your mobile no !' }]}
                    placeholder={ "Enter google scholar profile url" }
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label={ <label style={ { color: 'rgba(100 100 100 / 92%)' } }>Researchgate Profile</label> }
                    // initialValue={ "yeasin.ali@bracu.ac.bd" }
                    name="researchgate"
                    // rules={[{ required: true, message: 'Please enter your mobile no !' }]}
                    placeholder={ "Enter researchgate profile url" }
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label={ <label style={ { color: 'rgba(100 100 100 / 92%)' } }>Personal blog/website/profile</label> }
                    // initialValue={ "yeasin.ali@bracu.ac.bd" }
                    name="personalWebsite"
                    // rules={[{ required: true, message: 'Please enter your mobile no !' }]}
                    placeholder={ "Enter personal profile/blog url" }
                >
                    <Input />
                </Form.Item>




                {/* ******************************* */}

                <Divider orientation={'center'} />
                        {/* <CloseCircleOutlined style={{color:'#f75454', fontSize: '20px'}} onClick={() => remove(field.name)} /> */}
                {/* </Divider>  */}
              
                <Form.List 
                    name='tripWithQuestion'
                    rules={[
                        {
                            validator: async (_, names) => {
                            if (!names || names.length < 1) {
                                return Promise.reject(new Error('At least 2 Options'));
                            }
                            },
                        },
                    ]}
                >
                    {(fields, { add, remove }) => (
                    <>
                        {fields.map((field, index) => (
                        <Space key={field.key} direction='vertical' style={{width: '100%'}}>
                            <Card>
                            <Form.Item
                                {...field}
                                label={ 'Title of the paper - ' + ( index + 1 )  }
                                name={[field.name, 'paperTitle']}
                                validateTrigger={['onChange', 'onBlur']}
                                rules={[
                                    {
                                    required: true,
                                    message: 'Please select question.',
                                    },
                                ]}
                                // noStyle
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                            {...field}
                            key={'xxx'}
                            label={ 'Publication Year' }
                            name={[field.name, 'publicationYear']}
                            validateTrigger={['onChange', 'onBlur']}
                            // rules={[
                            //     {
                            //         required: true,
                            //         message: 'Please select any option.',
                            //     },
                            // ]}
                            // noStyle
                            >
                               <DatePicker />
                                    
                            </Form.Item>

                            <Form.Item
                                {...field}
                                label={ 'Authors' }
                                name={[field.name, 'paperAuthor']}
                                validateTrigger={['onChange', 'onBlur']}
                                // rules={[
                                //     {
                                //     required: true,
                                //     message: 'Please select question.',
                                //     },
                                // ]}
                                // noStyle
                            >
                                 <Select
                                    mode="tags"
                                    style={{
                                    width: '100%',
                                    }}
                                    placeholder="Tags Mode"
                                    // onChange={handleChange}
                                    // options={options}
                                />
                            </Form.Item>

                            <Form.Item
                                {...field}
                                label={ 'Abstract/description ' }
                                name={[field.name, 'paperAbstract']}
                                validateTrigger={['onChange', 'onBlur']}
                                // rules={[
                                //     {
                                //         required: false,
                                //         message: 'Please enter abstract/description',
                                //     },
                                // ]}
                                // noStyle
                            >
                                <Input />
                            </Form.Item>

                            <Divider orientation={'center'}>
                                <Button onClick={() => remove(field.name)} style={{ color: '#d8952f' }}>
                                    Clear This Paper Info    
                                    <CloseSquareOutlined style={{color:'#f75454', fontSize: '20px'}} />
                                </Button>
                            </Divider>   
                            </Card>
                            <Divider orientation={'center'} />
                        </Space>
                        ))}

                        <Form.Item>
                        <Button type='dashed' danger onClick={() => add()} block icon={<PlusOutlined />}>
                            Add New Paper Info
                        </Button>
                        </Form.Item>
                    </>
                    )}
                </Form.List>
                
                <Form.Item>
                    <Button type='primary' htmlType='submit' block>
                        Save Profile
                    </Button>
                </Form.Item>
            </Form>

            <Divider orientation={'center'} />

            <ListContainer 
                sectionTitle={ 'Uaser Research / Publications' }
                data={ publicationList }
                listType={ 'publication' }
            />
        </div>
    )
}

// Props Validation
// AssignQuestion.propTypes = {
//     orgList: PropTypes.array
// }

// AssignQuestion.defaultProps = {
//     orgList: []
// }

// // Map State To Props
// const mapStateToProps = (state) => ({

// })

// // Map Dispatch To Props
// const mapDispatchToProps = (dispatch) => ({ dispatch })

// reducers state value as props
const mapStateToProps = state => ({
    publicationList: state?.publication?.publicationList ?? [],
    isLoading: state?.publication?.isLoading ?? false
  })
  
  // dispatcher as props
  const mapDispatchToProps = dispatch => ({ dispatch })

export default connect( mapStateToProps, mapDispatchToProps )( UserProfileForm )