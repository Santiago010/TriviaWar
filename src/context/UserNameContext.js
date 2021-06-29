import React, { createContext, useState, useEffect } from "react";

export const UserNameContext = createContext(null);

export const UserNameProvider = ({ children }) => {
  const [userName, setUserName] = useState(
    JSON.parse(localStorage.getItem("user") || null)
  );

  useEffect(() => {
    try {
      localStorage.setItem("user", JSON.stringify(userName));
    } catch (error) {
      localStorage.removeItem("user");
    }
  });
  return (
    <UserNameContext.Provider value={{ userName, setUserName }}>
      {children}
    </UserNameContext.Provider>
  );
};
