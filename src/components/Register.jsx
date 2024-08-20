import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [user, setUser] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const { userName, email, password, confirmPassword } = user;
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("passwords don't match");
    } else {
      try {
        const response = await axios.post("http://localhost:4000/register", {
          userName,
          email,
          password,
        });
        console.log(response.status);
        if (response.status === 201) {
          navigate("/login");
        }
      } catch (error) {
        console.log({ error });
      }
    }
  };

  return (
    <div className="flex items-center justify-center h-[88.6vh] bg-[url('/hero-img.jpg')] bg-no-repeat bg-cover">
      <form onSubmit={handleSubmit} className="grid px-12 py-8 border bg-white">
        <center className="font-bold text-[30px]">Sign Up</center>

        <label htmlFor="username">User name</label>
        <input
          className="bg-slate-300 w-80 px-4 py-1 rounded"
          name="userName"
          type="text"
          placeholder="Enter your username"
          value={userName}
          onChange={onInputChange}
        />
        <label className="mt-3" htmlFor="email">
          Email
        </label>
        <input
          className="bg-slate-300 w-80 px-4 py-1 rounded"
          name="email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={onInputChange}
        />
        <label className="mt-3" htmlFor="password">
          Password
        </label>
        <input
          className="bg-slate-300 w-80 px-4 py-1 rounded"
          name="password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={onInputChange}
        />
        <label className="mt-3" htmlFor="confirmPassword">
          Confirm Password
        </label>
        <input
          className="bg-slate-300 w-80 px-4 py-1 rounded"
          name="confirmPassword"
          type="password"
          placeholder="Enter your password again"
          value={confirmPassword}
          onChange={onInputChange}
        />
        <button className="bg-slate-500 w-80 px-4 py-1 mt-3 rounded">
          click
        </button>
        <span className="mt-2">
          Have an account?{" "} Click
          <Link className="text-slate-600 font-bold" to="/login">
            {" "}
             Here
          </Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
