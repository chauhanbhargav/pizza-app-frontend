import React, { useEffect } from "react";
import { Input, Row, Col, Button, message, Form, Card } from "antd";
import Navbar from "../../components/Navbar";
import Loading from "../../components/Loading";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { NavLink, Redirect } from "react-router-dom";

const SignIn = ({ error, user, isLoading, authWatcher, setAuthError,history }) => {
  const onSignIn = (values) => {
    authWatcher(values);
  };

  useEffect(() => {
    if (!error) return;
    message.error(error);
  }, [error]);

  useEffect(() => {
    if (!user) return;
    history.push('/')
  }, [user]);

  useEffect(() => {
    setAuthError(null);
  }, []);

  return (
    <div className="container">
      <Navbar />
      <div className="content-container">
        <Form onFinish={onSignIn}>
          <Row justify="center" align="center">
            <Col span={6}>
                <div className="form-group">
                    <Form.Item
                    name="email"
                    rules={[
                        {
                        required: true,
                        type: "email",
                        message: "Please input your email!",
                        },
                    ]}>
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="email" />
                    </Form.Item>
                </div>
                <div className="form-group">
                    <Form.Item
                    name="password"
                    rules={[
                        { required: true, message: "Please input your password!" },
                    ]}>
                    <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="password" />
                    </Form.Item>
                </div>
                <div className="form-group">
                    <Form.Item>
                    <Button type="primary" block htmlType="submit">
                        Sign In
                    </Button>
                    </Form.Item>
                </div>
                <div className="form-group" align="center">
                    <NavLink 
                        to="/signup" 
                        onClick={() => setAuthError(null)}
                    >
                        New User? Sign Up
                    </NavLink>
                </div>
            </Col>
          </Row>
        </Form>
      </div>
      {isLoading && <Loading />}
    </div>
  );
};

export default SignIn
