import {calculateInvestmentResults, formatter} from '../util/investment';

export default function InvestmentResults({currentData}) {
    // console.log(currentData);
    const printAllLines = (currentData)  => {
        console.table(currentData);
        const computedData = calculateInvestmentResults({
                    initialInvestment: currentData.initialInvestment.value,
                    annualInvestment: currentData.annualInvestment.value,
                    expectedReturn: currentData.expectedReturn.value,
                    duration: currentData.duration.value,
                }
            );
        // console.table(computedData);
        let interestSummed = 0;
        let totalInvestement = currentData.initialInvestment.value;
        return computedData.map(year => {
            interestSummed += year.interest;
            totalInvestement += year.annualInvestment;

            return (
                <tr key={year.year}>
                    <td>{year.year}</td>
                    <td>{formatter.format(year.valueEndOfYear)}</td>
                    <td>{formatter.format(year.interest)}</td>
                    <td>{formatter.format(interestSummed)}</td>
                    <td>{formatter.format(totalInvestement)}</td>
                </tr>
            );
        });
    }

    return (
        <>
                <table id="result">
                    <thead>
                        <tr>
                            <th>Year</th>
                            <th>Investment Annual</th>
                            <th>Intest (Year)</th>
                            <th>Total Interest</th>
                            <th>Invested Capital</th>
                        </tr>
                    </thead>
                    <tbody>
                    { printAllLines(currentData) }
                    </tbody>
                </table>
        </>
    );
};