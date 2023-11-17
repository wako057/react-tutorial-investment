import InvestmentForm from "./InvestmentForm";
import InvestmentResults from "./InvestmentResults";
import {useState} from "react";

const INITIAL_INPUT = {
    initialInvestment: { label:'Initial Invest', value: 10000, step: 100},
    annualInvestment: { label:'Annual Invest', value: 1200, step: 100},
    expectedReturn: { label:'Expected Return', value: 5.5, step: 0.01},
    duration: { label:'Duration', value: 12, step: 1},
};

export default function Layout() {

    const [ currentData, setCurrentData] = useState(INITIAL_INPUT);

    function handleOnChangeSelect({inputIdentifier, newValue, step, label}) {
        setCurrentData(prevUserInput => {
            return {
                ...prevUserInput,
                [inputIdentifier] : {label: label, value: parseFloat(newValue), step},
            }
        })
    }
    return (
        <>
            <div className="center">
                <InvestmentForm currentData={currentData} onChangeSelect={handleOnChangeSelect}/>
                { duration.value == 0 && <p>Please enter a duration greater than 0</p>}
                { duration.value > 0 && <InvestmentResults currentData={currentData}/>}
            </div>
        </>
    );
}