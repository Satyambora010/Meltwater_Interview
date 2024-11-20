import { createContext, useState } from "react";

export const UserContext = createContext({});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [name, setName] = useState("");
  const [expertise, setExpertise] = useState<string[]>([]);
  const [brands, setBrands] = useState<string[]>([]);
  const [lifestyle, setLifestyle] = useState<boolean>(false);
  const [beauty, setBeauty] = useState<boolean>(false);
  const [food, setFood] = useState<boolean>(false);
  return (
    <UserContext.Provider
      value={{
        name,
        setName,
        expertise,
        setExpertise,
        brands,
        setBrands,
        lifestyle,
        setLifestyle,
        beauty,
        setBeauty,
        food,
        setFood,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
