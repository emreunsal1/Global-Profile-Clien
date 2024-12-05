import React from "react";
import AUTH from "../../services/auth";
import { useNavigate } from "react-router-dom";
import { Button, Checkbox, Form, Input } from "antd";

export default function Login() {
  const navigate = useNavigate();
  const loginFormSubmitHandler = async (e) => {
    e.preventDefault();
    const { email, password } = e.target;
    const response = await AUTH.login({
      email: email.value,
      password: password.value,
    });
    if (response) {
      navigate("/main");
    }
  };

  return (
    <div>
      <div className="personal-login">
        <div className="title">Personal</div>
        <Form onSubmit={loginFormSubmitHandler}>
          <Form.Item
            rules={[
              { required: true, message: "Please enter your email!" },
              { type: "email", message: "Please enter a valid email!" },
            ]}
            label="Email"
            name="email"
          >
            <Input placeholder="abc@gmail.com" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please enter your password!" }]}
          >
            <Input type="password" placeholder="*********" />
          </Form.Item>
          <Button>Login!</Button>
        </Form>
      </div>
      <div className="customer-login">
        <div className="title">Customer</div>
        <Form>
          <Form.Item
            rules={[
              { required: true, message: "Please enter your email!" },
              { type: "email", message: "Please enter a valid email!" },
            ]}
            label="Email"
            name="email"
          >
            <Input placeholder="abc@gmail.com" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please enter your password!" }]}
          >
            <Input type="password" placeholder="*********" />
          </Form.Item>
        </Form>
      </div>
      <Button onClick={() => navigate("/auth/register")}>register</Button>
    </div>
  );
}
