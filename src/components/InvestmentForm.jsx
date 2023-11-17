import GenericInput from "./GenericInput";

export default function InvestmentForm({currentData, onChangeSelect}) {
    return (
        <section id="user-input">
            <div className="input-group">
                <GenericInput id='initialInvestment' {...currentData.initialInvestment} onChangeSelect={onChangeSelect}/>
                <GenericInput id='annualInvestment'  {...currentData.annualInvestment} onChangeSelect={onChangeSelect}/>
            </div>
            <div className="input-group">
                <GenericInput id='expectedReturn'  {...currentData.expectedReturn} onChangeSelect={onChangeSelect}/>
                <GenericInput id='duration'  {...currentData.duration} onChangeSelect={onChangeSelect}/>
            </div>
        </section>

    );
};