"use client";
import { createContext, useEffect, useState, useContext } from "react";
import axios from "axios";

type UserDataType = {
  userData: {
    name: string;
    username: string;
    account_balance: [{ main_balance: number }];
  };
  isUserDataLoading: boolean;
};
const UserContext = createContext<UserDataType>({
  userData: {
    name: "",
    username: "",
    account_balance: [{ main_balance: 0 }],
  },
  isUserDataLoading: true,
});

export default function AppUserContext({
  children,
}: {
  children: React.ReactNode;
}) {
  //...
  const [userData, setData] = useState([]);
  const [isUserDataLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getDetails = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get("/api/user");
        setData(res.data);
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
