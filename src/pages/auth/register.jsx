import React from "react";
import AUTH from "../../services/auth";

export default function Register() {
  const registerFormSubmitHandler = async (e) => {
    e.preventDefault();
    const { email, password } = e.target;
    const response = await AUTH.register({
      email: email.value,
      password: password.value,
    });
  };
  return (
    <div>
      <div>
        <div className="personal-login">
          <div className="title">Personal</div>
          <form onSubmit={registerFormSubmitHandler}>
            <label>Email:</label>
            <input name="email" placeholder="abc@gmail.com"></input>
            <label>Password:</label>
            <input name="password"></input>
            <button>register</button>
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
      </div>
    </div>
  );
}
