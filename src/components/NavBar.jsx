import { Link } from "react-router-dom";
import { useUser } from "../context/UserProvider";
import axios from "axios";

const NavBar = () => {
  const { userRole } = useUser();
  const { setNewUser } = useUser();


  console.log(userRole);
  const logout = async() => {
    setNewUser(null)
    const response = await axios.post("http://localhost:4000/logout");
    
    console.log(response);
  };
  return (
    <nav className="flex bg-blue-300  px-7 py-5 items-center ">
      <Link to="/">
        <span className="p-4 bg-cyan-600">Logo</span>
      </Link>

      {!userRole && (
        <div className="mr-5 flex gap-5 justify-end w-[100%]">
          <Link to="/login">
            <button className="bg-red-50 px-4 py-2">Sign In</button>
          </Link>
          <Link to="/register">
            <button className="bg-red-50 px-4 py-2">Sign Up</button>
          </Link>
        </div>
      )}
      {userRole === "Admin" && (
        <div className="mr-5 flex gap-5 justify-end w-[100%]">
          <Link to="/admin">
            <button className="bg-red-50 px-4 py-2">Admin Panel</button>
          </Link>
          <Link to="">
            <button onClick={logout} className="bg-red-50 px-4 py-2">
              Logout
            </button>
          </Link>
        </div>
      )}
      {userRole === "Normal" && (
        <div className="mr-5 flex gap-5 justify-end w-[100%]">
          <Link to="">
            <button className="bg-red-50 px-4 py-2">Profile</button>
          </Link>
          <Link to="">
            <button onClick={logout} className="bg-red-50 px-4 py-2">
              Logout
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
