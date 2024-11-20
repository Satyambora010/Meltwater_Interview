import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";

const Expertise = () => {
  const navigate = useNavigate();
  const {
    expertise,
    setExpertise,
    name,
    lifestyle,
    setLifestyle,
    beauty,
    setBeauty,
    food,
    setFood,
  } = useContext<any>(UserContext);
  const handleNext = () => {
    if (lifestyle) setExpertise([...expertise, "Lifestyle"]);
    if (beauty) setExpertise([...expertise, "Beauty"]);
    if (food) setExpertise([...expertise, "Food"]);
    navigate("/brands");
  };
  return (
    <div className="justify-center items-center">
      <div className="text-3xl text-center font-bold p-10">Hi {name}</div>
      <h3 className="text-center text-xl mb-4">What is your expertise?</h3>
      <div className="flex flex-col items-center">
        <div className="flex gap-4 mb-4">
          <label>
            <input
              type="checkbox"
              checked={lifestyle}
              onChange={() => setLifestyle(!lifestyle)}
            />
            <span>LifeStyle</span>
          </label>
          <label>
            <input
              type="checkbox"
              checked={beauty}
              onChange={() => setBeauty(!beauty)}
            />
            <span>Beauty</span>
          </label>
          <label>
            <input
              type="checkbox"
              checked={food}
              onChange={() => setFood(!food)}
            />
            <span>Food</span>
          </label>
        </div>

        <div className="flex gap-4 justify-center">
          <button onClick={() => navigate("/")} type="button">
            Back
          </button>
          <h3>2/3</h3>
          <button onClick={handleNext} type="submit">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
