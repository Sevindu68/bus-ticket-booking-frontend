import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
import { useUser } from "../context/UserProvider";

const Login = () => {
  const [user, setUser] = useState({
    userName: "",
    password: "",
  });

  const navigate = useNavigate();
  const { setNewUser } = useUser();

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:4000/login", user);
    //console.log(response.data);
    const { role } = response.data;
    if(role){
      setNewUser(role);
      navigate("/")
    }
    
    //
  };

  return (
    <div className="flex items-center justify-center h-[88.6vh] bg-[url('/hero-img.jpg')] bg-no-repeat bg-cover">
      <form onSubmit={handleSubmit} className="grid px-8 py-12 border bg-white">
        <center className="font-bold text-[30px]">Sign In</center>
        <label htmlFor="userName">User name</label>
        <input
          className="bg-slate-300 w-80 px-4 py-1 rounded"
          name="userName"
          type="text"
          placeholder="Enter your username"
          required
          value={user.userName}
          onChange={onInputChange}
        />
        <label className="mt-5" htmlFor="username">
          Password
        </label>
        <input
          className="bg-slate-300 w-80 px-4 py-1 rounded"
          name="password"
          placeholder="Enter your password"
          type="password"
          required
          value={user.password}
          onChange={onInputChange}
        />
        <button className="bg-slate-500 w-80 px-4 py-1 mt-5 rounded">
          click
        </button>
        <span className="mt-2">
          Don't Have an account? Click
          <Link className="text-slate-600 font-bold" to="/register">
            {" "}
            Here
          </Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
