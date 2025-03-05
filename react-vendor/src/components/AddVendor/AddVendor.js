import React, {useMemo, useRef} from "react";
import Navbar from "../Navbar/Navbar";
import AddInput from "./AddInput";
import "./AddVendor.css"
import columnsData from "../Table/Columns";

const Text = {
    TITLE: "Добавление нового поставщика",
    ADD: "Добавить",
    PLACEHOLDER: "Ввод",
    SAVE: "Сохранить"
}

const AddVendor = () => {
    const columns = useMemo(() => columnsData, [])
    const requiredColumns = useMemo(() => columnsData.filter(i => i.isRequired), [])
    const [isButtonEnabled, setIsButtonEnabled] = React.useState(requiredColumns.length === 0);
    const resultRef = useRef(new Map(columns.map(i => [i.accessorKey, i.defaultValue])));

    const handleChange = (e) => {
        resultRef.current.set(e.target.id, e.target.value);

        setIsButtonEnabled(
            requiredColumns.every(column => {
                return resultRef.current.get(column.accessorKey) !== "";
            })
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const obj = Object.fromEntries(resultRef.current)

        fetch('http://127.0.0.1:9090/users/', {
            method: 'POST',
            body: JSON.stringify(obj)
        })
            .then(res => {console.log(res)})
            .catch(err => {console.log(err)});
    }

    return (
        <div >
            <Navbar/>
            <div className="add-container">
                <form className="add-vendor">
                    <h1>{Text.TITLE}</h1>

                    {columns.map(column => (
                        <AddInput
                            text={column.header}
                            key={column.accessorKey}
                            keyDB={column.accessorKey}
                            onChange={handleChange}
                            isRequired={column.isRequired}
                        />
                    ))}
                </form>
                <div className="button-background">
                    <button disabled={!isButtonEnabled} onClick={handleSubmit}>{Text.SAVE}</button>
                </div>
            </div>
        </div>
    )
}

export default AddVendor;