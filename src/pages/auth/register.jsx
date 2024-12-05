import React, { useState } from "react";
import { Button, Checkbox, Form } from "antd";
import AUTH from "../../services/auth";
import Input from "antd/es/input/Input";

export default function Register() {
  const [isFreelance, setIsFreelance] = useState(false);

  const registerPersonelFormSubmitHandler = async (values) => {
    try {
      const response = await AUTH.register({
        email: values.email,
        password: values.password,
      });
      console.log("API response:", response);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const registerCustomerHandler = async (values) => {
    console.log("values :>> ", values);
    const response = await AUTH.register(values);
    console.log("response :>> ", response);
  };

  return (
    <div className="auth-register">
      <div className="auth-register-container">
        <div className="register-section">
          <h2>Personal Registration</h2>
          <Form
            layout="vertical"
            onFinish={registerPersonelFormSubmitHandler}
            autoComplete="off"
          >
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
              rules={[
                { required: true, message: "Please enter your password!" },
              ]}
            >
              <Input type="password" placeholder="*********" />
            </Form.Item>

            <Form.Item
              label="Confirm Password"
              name="passwordConfirm"
              dependencies={["password"]}
              rules={[
                { required: true, message: "Please confirm your password!" },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error("Passwords do not match!"));
                  },
                }),
              ]}
            >
              <Input type="password" placeholder="*********" />
            </Form.Item>

            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form>
        </div>

        <div className="register-section">
          <h2>Customer Registration</h2>
          <Form
            layout="vertical"
            onFinish={registerCustomerHandler}
            autoComplete="off"
          >
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: "Please enter your name!" }]}
            >
              <Input placeholder="Name" />
            </Form.Item>

            <Form.Item
              label="Surname"
              name="surname"
              rules={[
                { required: true, message: "Please enter your surname!" },
              ]}
            >
              <Input placeholder="Surname" />
            </Form.Item>

            <Form.Item
              label="E-mail"
              name="email"
              rules={[
                { required: true, message: "Please enter your email!" },
                { type: "email", message: "Please enter a valid email!" },
              ]}
            >
              <Input placeholder="abc@gmail.com" />
            </Form.Item>

            <Form.Item
              label="Phone Number"
              name="phone"
              rules={[
                { required: true, message: "Please enter your phone number!" },
                {
                  pattern: /^[0-9]{10,11}$/,
                  message: "Please enter a valid phone number!",
                },
              ]}
            >
              <Input placeholder="05xxxxxxxxx" />
            </Form.Item>

            <Form.Item>
              <Checkbox
                checked={isFreelance}
                onChange={(e) => setIsFreelance(e.target.checked)}
              >
                I am working freelance
              </Checkbox>
            </Form.Item>

            <Form.Item label="Company Name" name="companyName">
              <Input placeholder="Company" />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please enter your password!" },
                { min: 6, message: "Password must be at least 6 characters!" },
              ]}
            >
              <Input type="password" placeholder="*********" />
            </Form.Item>

            <Form.Item
              label="Confirm Password"
              name="passwordConfirm"
              dependencies={["password"]}
              rules={[
                { required: true, message: "Please confirm your password!" },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error("Passwords do not match!"));
                  },
                }),
              ]}
            >
              <Input type="password" placeholder="*********" />
            </Form.Item>

            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
