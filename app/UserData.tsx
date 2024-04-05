"use client";
import { createContext, useEffect, useState, useContext } from "react";
import axios from "axios";


const UserContext = createContext({
  userData: "",
  isUserDataLoading: true,
});

export default function AppUserContext({
  children,
}: {
  children: React.ReactNode;
}) {
  //...
  const [userData, setData] = useState("");
  const [isUserDataLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getDetails = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get("/api/user/details");
        setData(JSON.stringify(res.data));
        console.log(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getDetails();
  }, []);
  //...

  return (
    <UserContext.Provider value={{ userData, isUserDataLoading }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  return useContext(UserContext);
}
