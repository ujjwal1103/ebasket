import React, { useState, useRef } from "react";
import { useNavigate,Link } from 'react-router-dom';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import AuthService from "../services/auth.service";

const required = (value) => {
  if (!value) {
    return (
      <div >
        This field is required!
      </div>
    );
  }
};

const Login = () => {
  let navigate = useNavigate();

  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setMessage("");
    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.login(username, password).then(
        () => {
          navigate("/home");
          window.location.reload();
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setLoading(false);
          setMessage(resMessage);
        }
      );
    } else {
      setLoading(false);
    }
  };

  return (
    <div className="lg:w-1/5 bg-slate-200 h-1/3 mt-32 m-auto shadow-lg">
      <div className="py-2">
        {/* <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className="w-full"
        /> */}
        <h2 className="text-center p-4  text-3xl font-homefont">Login To <span className="text-blue-700">Ebasket</span> </h2>
        <Form onSubmit={handleLogin} ref={form}>
          <div className="px-5">
            <label htmlFor="username" className="py-3">Username</label>
            <Input
              type="text"
              className="py-2 px-4 w-full my-4 shadow-md"
              name="username"
              value={username}
              onChange={onChangeUsername}
              validations={[required]}
            />
          </div>

          <div className="px-5" >
            <label htmlFor="password" className="py-3">Password</label>
            <Input
              type="password"
              className="py-2 px-4 w-full mt-4 bg-slate-100 shadow-md"
              name="password"
              value={password}
              onChange={onChangePassword}
              validations={[required]}
            />
          </div>

          <div className="px-5 my-4">
            <button disabled={loading} className="py-2 px-4 w-full mt-4 bg-blue-700 text-white hover:bg-blue-900">
              {loading && (
                <span>loading</span>
              )}
              <span>Login</span>
            </button>
          </div>

          <div className="px-5 my-4">
                <span className="py-2 px-4 block w-full mt-4 text-center">Dont have an account? <Link to="/register" className="text-blue-600 hover:text-blue-700">Signup</Link></span>
              </div>

          {message && (
            <div>
              <div className="bg-red-300 text-red-900 p-3 text-center" >
                {message}
              </div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
      </div>
    </div>
  );
};

export default Login;
