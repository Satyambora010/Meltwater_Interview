import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";

const Brands = () => {
  const navigate = useNavigate();
  const { brands, setBrands } = useContext<any>(UserContext);
  const [brand, setBrand] = useState("");

  return (
    <div className="justify-center items-center">
      <div className="text-3xl text-center font-bold p-10">One last Thing</div>
      <h3 className="text-center text-xl mb-4">
        Have you collaborated with brands in the past?
      </h3>
      <div className="flex flex-col items-center">
        <div className="flex gap-4 w-1/2 justify-center mb-4">
          <input
            value={brand}
            type="text"
            placeholder="brand"
            onChange={(e) => setBrand(e.target.value)}
            className="border-2 border-gray-300 rounded-md p-2 w-1/2"
          />
          <button
            className="bg-blue-500 text-white p-2 rounded-md w-1/5"
            onClick={() => {
              setBrands([...brands, brand]);
              setBrand("");
            }}
          >
            Add
          </button>
        </div>
        <ul>
          {brands.map((brand: string) => (
            <li key={brand}>{brand}</li>
          ))}
        </ul>
        <div className="flex gap-4 justify-center">
          <button onClick={() => navigate("/expertise")} type="button">
            Back
          </button>
          <h3>3/3</h3>
          <button onClick={() => navigate("/details")}>Finish</button>
        </div>
      </div>
    </div>
  );
};

export default Brands;
