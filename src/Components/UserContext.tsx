import { createContext, useState } from "react";

export const UserContext = createContext({});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [name, setName] = useState("");
  const [expertise, setExpertise] = useState<string[]>([]);
  const [brands, setBrands] = useState<string[]>([]);
  return (
    <UserContext.Provider
      value={{ name, setName, expertise, setExpertise, brands, setBrands }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
