import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({ input }) {
  let annualData = [];
  annualData = calculateInvestmentResults({
    initialInvestment: Number(input.initialInvestment),
    annualInvestment: Number(input.annualInvestment),
    expectedReturn: Number(input.expectedReturn),
    duration: Number(input.duration),
  });
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {annualData.map((data) => (
          <tr key={data.year}>
            <td>{data.year}</td>
            <td>{formatter.format(data.valueEndOfYear)}</td>
            <td>{formatter.format(data.interest)}</td>
            <td>{formatter.format(data.totalInterest)}</td>
            <td>{formatter.format(data.investedCapital)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
