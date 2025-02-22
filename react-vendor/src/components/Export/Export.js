import React, {useMemo, useState} from "react";
import Navbar from "../Navbar/Navbar";
import "./Export.css"
import columnsData from "../Table/Columns";
import SelectableColumn from "./SelectableColumn";
import excelImage from '../Resources/excel.svg'
import pdfImage from '../Resources/pdf.svg'

const Text = {
    EXPORT: "Экспорт",
    DESCRIPTION: "Выберите колонки, которые хотите выгрузить",
    COLUMNS: "Колонки",
    ALL: "Все",
    EXPORT_EXCEL: "\nExcel",
    EXPORT_PDF: "\nPDF"
}


const Export = () => {
    const columns = useMemo(() => columnsData, [])

    const [selectedColumns, setSelectedColumns] = useState(columns.filter(x => x.isDefaultToExport))
    const columnsToSelect = columns.filter(i => !selectedColumns.includes(i))

    const onAdd = (column) => {
        if (column.header !== undefined) {
            setSelectedColumns([...selectedColumns, column])
        }
    }

    const onDelete = (column) => {
        setSelectedColumns(selectedColumns.filter(i => i !== column))
    }

    const addAll = () => {
        setSelectedColumns(columns)
    }

    return (
        <div>
            <Navbar/>

            <div className="main-container">
                <div className="to-select-container">
                    <div className="all-to-select">
                        <span>{Text.DESCRIPTION}</span>
                        <button onClick={addAll}>
                            {Text.ALL}
                        </button>
                    </div>

                    <ul>
                        {columnsToSelect.map((column, i) => (
                            <li key={i}>
                                <SelectableColumn column={column} onClick={onAdd} isSelected={false}/>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="selected-container">
                    <h1>{Text.EXPORT}</h1>

                    <div className="selected-columns">
                        <ul>
                            {selectedColumns.map((column, i) => (
                                <li key={i}>
                                    {
                                        <SelectableColumn column={column} onClick={onDelete} isSelected={true}/>
                                    }
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="to-export-buttons">
                    <ExportButton image={excelImage} text={Text.EXPORT_EXCEL} />
                    <ExportButton image={pdfImage} text={Text.EXPORT_PDF} />
                </div>
            </div>
        </div>
    )
}

const ExportButton = ({image, text, onClick}) => {
    return(
        <div className="export-button">
            <button onClick={onClick}>
                <img src={image} alt="" />
            </button>
            <span className="export-button-text">
                {Text.EXPORT}
                <strong>{text}</strong>
            </span>
        </div>
    )
}

export default Export;