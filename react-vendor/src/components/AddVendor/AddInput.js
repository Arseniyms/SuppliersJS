import React, {useEffect, useState} from "react";
import './AddInput.css'

const AddInput = ({text, keyDB, onChange}) => {
    const [inputValue, setInputValue] = useState('');

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
            />
        </div>
    )
}

export default AddInput;