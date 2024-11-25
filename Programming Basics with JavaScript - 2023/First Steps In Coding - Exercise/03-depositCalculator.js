function depositCalculator(input) {

    let depositedSum = Number(input[0]);
    let termOfDeposit = Number(input[1]);
    let annualInterestRate = Number(input[2]);

    let annualInterest = depositedSum * annualInterestRate / 100;
    let annualOneMonth = annualInterest / 12;
    let totalDeposit = depositedSum + termOfDeposit * annualOneMonth;

    console.log(totalDeposit);
}

depositCalculator(["200","3","5.7"]);