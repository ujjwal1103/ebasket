import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import AuthService from "../services/auth.service";
import { Link } from "react-router-dom";
const required = (value) => {
  if (!value) {
    return (
      <div className="text-red-600 mb-2">
        This field is required!
      </div>
    );
  }
};

const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="text-red-600 mb-2" >
        This is not a valid email.
      </div>
    );
  }
};

const vusername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="text-red-600 mb-2" >
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="text-red-600 mb-2">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

const Register = () => {
  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    setMessage("");
    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.register(username, email, password).then(
        (response) => {
          setMessage(response.data.message);
          setSuccessful(true);
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setMessage(resMessage);
          setSuccessful(false);
        }
      );
    }
  };

  return (
    <div className="lg:w-1/5 bg-slate-200 h-1/3 mt-32 m-auto shadow-lg">
      <div className="py-2">
        
      <h2 className="text-center p-4  text-3xl font-homefont">Signup To <span className="text-blue-700">Ebasket</span> </h2>
        <Form onSubmit={handleRegister} ref={form}>
          {!successful && (
            <div className="lg:mx-3 mx-6">
              <div className="lg:px-5">
                <label htmlFor="username" className="py-3">Username</label>
                <Input
                  type="text"
                  className="py-2 px-4 w-full my-4 shadow-md"
                  name="username"
                  value={username}
                  onChange={onChangeUsername}
                  validations={[required, vusername]}
                />
              </div>

              <div className="lg:px-5" >
                <label htmlFor="email">Email</label>
                <Input
                  type="text"
                  className="py-2 px-4 w-full my-4 shadow-md"
                  name="email"
                  value={email}
                  onChange={onChangeEmail}
                  validations={[required, validEmail]}
                />
              </div>

              <div className="lg:px-5 ">
                <label htmlFor="password">Password</label>
                <Input
                  type="password"
                  className="py-2 px-4 w-full my-4 shadow-md"
                  name="password"
                  value={password}
                  onChange={onChangePassword}
                  validations={[required, vpassword]}
                />
              </div>

              <div className="lg:px-5 my-4 mx-6">
                <button className="py-2 px-4 w-full mt-4 rounded bg-blue-700 text-white hover:bg-blue-900">Sign Up</button>
              </div>
              <div className="px-5 my-4">
                <span className="py-2 px-4 block w-full mt-4 text-center">Already have an Account? <Link to="/login" className="text-blue-600 hover:text-blue-700">Login</Link></span>
              </div>
            </div>
          )}

          {message && (
            <div className="">
              <div
                
              >
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

export default Register;