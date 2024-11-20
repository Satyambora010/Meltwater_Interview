import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";

export interface DeTails {
  name: string;
  category: string[];
  brands: string[];
}

const Home = () => {
  const { name, setName } = useContext<any>(UserContext);
  const navigate = useNavigate();
  const handleNext = () => {
    navigate("/expertise");
  };
  return (
    <div className="justify-center items-center">
      <div className="text-3xl text-center font-bold p-10">Welcome</div>
      <h3 className="text-center text-xl mb-4">How should we call you</h3>
      <div className="flex flex-col items-center">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="name"
          className="border-2 border-gray-300 rounded-md p-2 w-1/2 mb-4"
        />
        <div className="flex gap-4 justify-center">
          <h3>1/3</h3>
          <button onClick={handleNext}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
