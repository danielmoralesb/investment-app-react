import { useState } from "react";

import Header from "./components/header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

const INITIAL_VALUES = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

function App() {
  let [userInput, setUserInput] = useState(INITIAL_VALUES);

  function handleChange(inputId, newValue) {
    setUserInput((prevUserInput) => ({
      ...prevUserInput,
      [inputId]: newValue,
    }));
  }

  const inputValid = userInput.duration >= 1;

  return (
    <>
      <Header />
      <UserInput userInputData={userInput} onChangeUser={handleChange} />
      {!inputValid && (
        <p className="center">Please enter a duration greater than zero.</p>
      )}
      {inputValid && <Results input={userInput} />}
    </>
  );
}

export default App;
