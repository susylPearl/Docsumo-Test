import React, { useState } from "react";
import { useNavigate} from 'react-router-dom';
import "./Login.css";
import { ReactComponent as CompanyLogo } from "../images/icon.jsx";
import FloatingInput from "../components/FloatingInput";
import { login } from "../api/call";

const Login = () => {
  const [workEmail, setWorkEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const logoProps = {
    width: "36px",
    height: "36px",
    color: "#4d61fc",
  };
  let navigate = useNavigate();

  const handleEmailChange = (event) => {
    if (event && event.target) {
      setWorkEmail(event.target.value);
    }
  };

  const handlePasswordChange = (event) => {
    if (event && event.target) {
      setPassword(event.target.value);
    }
  };

  const handleLogin = async () => {
    const payload = {
      email: workEmail,
      password,
    };
    setLoading(true);
    const loginResponse = await login(payload);
    if (loginResponse) {
      setLoading(false);
      if (loginResponse.status_code !== 200) {
        setError(loginResponse.error);
        return;
      }
      navigate("/user-account", { state: loginResponse.data });
    }
  };

  return (
    <>
      <div className="container">
        <div className="content">
          <div className="header">
            <h1>Login to Docsumo</h1>
            <div>
              <CompanyLogo {...logoProps} />
            </div>
          </div>
          <div className="login-container">
            <FloatingInput
              label={"Work email"}
              inputType={"text"}
              handleInputChange={handleEmailChange}
            />
            <FloatingInput
              label={"Password"}
              inputType={"password"}
              handleInputChange={handlePasswordChange}
            />
            {error && <div className="error"><label>{error}</label></div>}
            <button onClick={handleLogin}>Login</button>
          </div>
          <div className="footer">
            <label>Don't have an account?</label>
            <button>Sign up</button>
          </div>
        </div>
        {loading && (
          <div className="loading-overlay">
            <div className="loading" style={{ position: "absolute" }}>
              <div />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Login;
