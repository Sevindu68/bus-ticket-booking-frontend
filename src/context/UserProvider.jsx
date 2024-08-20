import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const storedRole = sessionStorage.getItem("userRole");
    if (storedRole) {
      setUserRole(storedRole);
    }
  }, []);

  const setNewUser = (role) => {
    if (role) {
      sessionStorage.setItem("userRole", role);
      setUserRole(role);
    } else {
      sessionStorage.removeItem("userRole");
      setUserRole(null);
    }
  };

  return (
    <UserContext.Provider value={{ userRole, setNewUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);