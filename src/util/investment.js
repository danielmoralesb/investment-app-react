// This function expects a JS object as an argument
// The object should contain the following properties
// - initialInvestment: The initial investment amount
// - annualInvestment: The amount invested every year
// - expectedReturn: The expected (annual) rate of return
// - duration: The investment duration (time frame)
export function calculateInvestmentResults({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
}) {
  const annualData = [];
  let investmentValue = initialInvestment;
  let prevInterestArray = [];
  let prevInterest;
  let investedCapital;
  let totalInterest = 0;

  for (let i = 0; i < duration; i++) {
    const interestEarnedInYear = investmentValue * (expectedReturn / 100);
    investmentValue += interestEarnedInYear + annualInvestment;
    prevInterest = interestEarnedInYear;
    prevInterestArray.push(prevInterest);
    prevInterest = prevInterestArray[i - 1];

    if (prevInterest == null) {
      prevInterest = 0;
    }

    let sum = 0;
    for (let i = 0; i < prevInterestArray.length; i++) {
      sum += prevInterestArray[i];
    }

    totalInterest = sum;
    investedCapital = investmentValue - totalInterest;

    annualData.push({
      year: i + 1, // year identifier
      interest: interestEarnedInYear, // the amount of interest earned in this year
      valueEndOfYear: investmentValue, // investment value at end of year
      totalInterest: totalInterest, // total interest earned so far
      investedCapital: investedCapital, // investment added in this year
    });
  }
  // console.log(
  //   "calculateInvestmentResults: " +
  //     initialInvestment +
  //     annualInvestment +
  //     expectedReturn +
  //     duration
  // );
  return annualData;
}

// The browser-provided Intl API is used to prepare a formatter object
// This object offers a "format()" method that can be used to format numbers as currency
// Example Usage: formatter.format(1000) => yields "$1,000"
export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
