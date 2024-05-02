import React from 'react';
import { Button, Form, Input, Typography } from 'antd';
import { UserOutlined } from '@ant-design/icons';
// import { Navigate } from 'react-router-dom';

const onFinish = (values) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const UserRegistration = () => (
  <Form
    name="basic"
    labelCol={{ span: 24 }}
    wrapperCol={{ span: 24 }}
    style={ formStyle }
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
    layout={ 'vertical' }
  >
    <div style={{ textAlign: 'center' }}>
      <div>
        <UserOutlined style={{ fontSize: '26px', border: '1px solid grey', padding: '10px', color: 'grey', borderRadius: '50%' }}/>
      </div>
      <Typography.Text strong style={{ fontSize: '25px' }}>Join Now !</Typography.Text>
    </div>
    <Form.Item
      label={ <label style={ { color: 'rgba(100 100 100 / 92%)' } }>Full name</label> }
      name="name"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input />
    </Form.Item>

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
        Already a member ? <a href='/login'> Login</a>
      </Typography.Text>

    <Form.Item>
      <Button type="primary" htmlType="submit" block>
        Submit
      </Button>
    </Form.Item>
  </Form>
);

const formStyle = { 
  minWidth: 320, 
  padding: '25px 30px', 
  // border: '1px solid rgb(186, 186, 186)', 
  borderRadius: '10px', 
  fontWeight: 'bold', 
  backgroundColor: '#ffffff' 
}

export default UserRegistration;