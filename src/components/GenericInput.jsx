export default function GenericInput({id, label, value, step, onChangeSelect}) {
    // console.log({id, label, value, step, onChangeSelect});
    return (
        <p>
            <label htmlFor={id}>{label}</label>
            <input
                id={id}
                type="number"
                min="0"
                step={step}
                onChange={(event) => onChangeSelect({
                    inputIdentifier: id,
                    newValue: event.target.value,
                    step,
                    label
                })}
                value={value}
            />
        </p>
    );
}