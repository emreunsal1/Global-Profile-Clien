import React from "react";
import { useNavigate } from "react-router-dom";


export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="logo">LOGO</div>
      <div className="title">Welcome To Global Profile</div>
      <div className="button" onClick={()=> navigate('/auth/login')}>
        Start
      </div>
    </div>
  );
}
