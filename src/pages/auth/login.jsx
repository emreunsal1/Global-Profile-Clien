import React from "react";
import AUTH from "../../services/auth";
import { useNavigate } from "react-router-dom";

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
        <form onSubmit={loginFormSubmitHandler}>
          <label>Email:</label>
          <input name="email" placeholder="abc@gmail.com"></input>
          <label>Password:</label>
          <input name="password"></input>
          <button>Login</button>
        </form>
      </div>
      <div className="customer-login">
        <div className="title">Customer</div>
        <form>
          <label>Email:</label>
          <input placeholder="abc@gmail.com"></input>
          <label>Password:</label>
          <input placeholder="*********"></input>
        </form>
      </div>
      <div onClick={() => navigate("/auth/register")}>register</div>
    </div>
  );
}
