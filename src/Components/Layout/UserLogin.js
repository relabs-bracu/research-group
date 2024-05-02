import React from 'react';
import { Button, Form, Input, Typography } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { login } from '../../Service/Actions/authAction';
import { useDispatch, useSelector } from 'react-redux'
// import { Navigate } from 'react-router-dom';


// const onFinish = (values) => {
//   console.log('Success:', values);
// };

// const onFinishFailed = (errorInfo) => {
//   console.log('Failed:', errorInfo);
// };

const UserLogin = () => {
  const dispatch = useDispatch()
  // const userWithPrivilege = useSelector(state => console.log({ state }))

  const _onSubmit = values => {
    // const { dispatch } = this.props
    
    // Dispatch Login Action
    dispatch( login(values) )
  }

// On Submit Error
const _onSubmitError = err => {
    console.error(err)
}

return(
  <Form
    name="basic"
    labelCol={{ span: 24 }}
    wrapperCol={{ span: 24 }}
    style={ formStyle }
    initialValues={{ remember: true }}
    onFinish={ _onSubmit }
    // onFinishFailed={onFinishFailed}
    autoComplete="off"
    layout={ 'vertical' }
  >
    <div style={{ textAlign: 'center' }}>
      <div>
        <UserOutlined style={{ fontSize: '26px', border: '1px solid grey', padding: '10px', color: 'grey', borderRadius: '50%' }}/>
      </div>
      <Typography.Text strong style={{ fontSize: '25px' }}>Login Now !</Typography.Text>
    </div>

    <Form.Item
       label={ <label style={ { color: 'rgba(100 100 100 / 92%)' } }>Email</label> }
      name="email"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
       label={ <label style={ { color: 'rgba(100 100 100 / 92%)' } }>Password</label> }
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password />
    </Form.Item>

      <Typography.Text type="secondary" strong style={{ display: 'block', marginBottom: '20px' }}>
        Don't have an account ? <a href='/home'> Register</a>
      </Typography.Text>

    <Form.Item>
      <Button type="primary" htmlType="submit" block>
        Submit
      </Button>
    </Form.Item>
  </Form>
)};

const formStyle = { 
  minWidth: 320, 
  padding: '25px 30px', 
  // border: '1px solid rgb(186, 186, 186)', 
  borderRadius: '10px', 
  fontWeight: 'bold', 
  backgroundColor: '#ffffff' 
}

export default UserLogin;