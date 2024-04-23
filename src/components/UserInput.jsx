// import { useState } from "react";

export default function UserInput({ onChangeUser, userInputData }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <label htmlFor="initialInvestment">Initial Investment:</label>
        <input
          type="number"
          value={userInputData.initialInvestment}
          onChange={(e) => onChangeUser("initialInvestment", e.target.value)}
          required
        />
      </div>
      <div className="input-group">
        <label htmlFor="annualInvestment">Annual Investment:</label>
        <input
          type="number"
          value={userInputData.annualInvestment}
          onChange={(e) => onChangeUser("annualInvestment", e.target.value)}
        />
      </div>
      <div className="input-group">
        <label htmlFor="expectedReturn">Expected Return:</label>
        <input
          type="number"
          value={userInputData.expectedReturn}
          onChange={(e) => onChangeUser("expectedReturn", e.target.value)}
        />
      </div>
      <div className="input-group">
        <label htmlFor="duration">Duration:</label>
        <input
          type="number"
          value={userInputData.duration}
          onChange={(e) => onChangeUser("duration", e.target.value)}
        />
      </div>
    </section>
  );
}
