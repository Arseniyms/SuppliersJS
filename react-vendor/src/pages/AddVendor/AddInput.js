import React, {useEffect} from "react";
import './AddInput.css'

const Text = {
    REQUIRED_FIELD: "*обязательное поле"
}

const AddInput = ({text, keyDB, onChange, isRequired, value}) => {
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

    return (
        <div className="add-input">
            <span>{text}</span>
            <textarea
                rows="1"
                id={keyDB}
                onChange={(e) => onChange(e)}
                defaultValue={value}
            />
            {isRequired ? <div>{Text.REQUIRED_FIELD}</div> : null}
        </div>
    )
}

export default AddInput;