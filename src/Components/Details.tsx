import { useContext } from "react";
import { UserContext } from "./UserContext";

const Details = () => {
  const { name, brands, expertise } = useContext<any>(UserContext);
  return (
    <div className="justify-center items-center w-full">
      <div className="text-3xl text-center font-bold p-10 w-full">Details</div>
      <h1 className="text-center text-xl">Name: {name}</h1>
      <h1 className="text-center text-xl">Brands: {brands.join(", ")}</h1>
      <h1 className="text-center text-xl">Expertise: {expertise.join(", ")}</h1>
    </div>
  );
};

export default Details;
