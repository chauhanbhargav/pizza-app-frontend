import React, { useEffect } from "react";
import { Input, Row, Col, Button, message, Form } from "antd";

import Navbar from "../../components/Navbar";
import Loading from "../../components/Loading";
import { NavLink, Redirect } from "react-router-dom";

const SignUp = ({ error, user, isLoading, signUpWatcher, setAuthError, history }) => {
  const onSignUp = (values) => {
    signUpWatcher(values);
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
        <Form onFinish={onSignUp}>
          <Row justify="center" align="center">
            <Col span={6}>
              <div className="form-group">
                <Form.Item
                  name="name"
                  rules={[
                    { required: true, message: "Please input your name!" },
                  ]}
                >
                  <Input placeholder="Name" />
                </Form.Item>
              </div>
              <div className="form-group">
                <Form.Item
                  name="email"
                  rules={[
                    {
                      required: true,
                      type: "email",
                      message: "Please input your email!",
                    },
                  ]}
                >
                  <Input placeholder="E-mail" />
                </Form.Item>
              </div>
              <div className="form-group">
                <Form.Item
                  name="password"
                  rules={[
                    { required: true, message: "Please input your password!" },
                  ]}
                >
                  <Input.Password placeholder="Password" />
                </Form.Item>
              </div>
              <div className="form-group">
                <Button type="primary" htmlType="submit" block>
                  Sign Up
                </Button>
              </div>
              <div className="form-group" align="center">
                <NavLink 
                    to="/signin" 
                    onClick={() => setAuthError(null)}
                >
                    Existing User? Sign In
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

export default SignUp;
