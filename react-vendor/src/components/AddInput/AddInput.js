import React, {useEffect, useState} from "react";
import './AddInput.css'

const Text = {
    REQUIRED_FIELD: "*обязательное поле",
    CHOOSE: "Выберите..."
}

const AddInput = ({text, selectableFields, keyDB, onChange, isRequired, value, readOnly}) => {
    useEffect(() => {
        document.querySelectorAll('textarea').forEach(el => {
            el.style.height = el.setAttribute('style', 'height: ' + el.scrollHeight + 'px');
            el.classList.add('auto');
            el.addEventListener('input', e => {
                el.style.height = 'auto';
                el.style.height = (el.scrollHeight) + 'px';
            });
        });
    }, [])

    const [selectedValue, setSelectedValue] = useState(value)

    const handleSelectChange = (e) => {
        setSelectedValue(e.target.value);
        onChange && onChange(e)
    }
    return (
        <div className="add-input">
            <span>{text}</span>
            {
                (selectableFields && selectableFields.length > 0) ?
                    <select
                        id={keyDB}
                        disabled={readOnly}
                        required={isRequired}
                        onChange={handleSelectChange}
                        defaultValue={selectedValue}
                    >
                        <option key={-1} value={""}/>)
                        {selectableFields.map((item, index) => (
                            <option key={index} value={item}>{item}</option>)
                        )}
                    </select>
                    :
                    <textarea
                        rows="1"
                        id={keyDB}
                        onChange={(e) => onChange(e)}
                        defaultValue={value}
                        readOnly={readOnly}
                    />
            }

            {isRequired ? <div>{Text.REQUIRED_FIELD}</div> : null}
        </div>
    )
}

export default AddInput;