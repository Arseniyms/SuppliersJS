import React, {useEffect, useMemo, useState} from "react";
import "./Export.css"
import columnsData from "../../components/Table/Columns";
import SelectableColumn from "./SelectableColumn";
import excelImage from '../../components/Resources/excel.svg'
import pdfImage from '../../components/Resources/pdf.svg'

import {useLocalStorage} from "../../services/useLocalStorage";
import {exportToExcel} from "../../services/exports/exportToExcel";
import {exportToPdf} from "../../services/exports/exportToPDF";

const Text = {
    EXPORT: "Экспорт",
    DESCRIPTION: "Выберите колонки, которые хотите выгрузить",
    COLUMNS: "Колонки",
    ALL: "Все",
    EXPORT_EXCEL: "\nExcel",
    EXPORT_PDF: "\nPDF"
}

const Export = () => {
    const { setItem, getItem} = useLocalStorage('selectedExportColumns');
    const columns = useMemo(() => columnsData, [])

    const [selectedColumns, setSelectedColumns] = useState(
        () => {
            const savedColumns = getItem()
            if (!savedColumns || savedColumns.length === 0) {
                return columns.filter(x => x.isDefaultToExport)
            }
            return columns.filter(x => savedColumns.includes(x.accessorKey))
        }
    )
    const columnsToSelect = columns.filter(i => !selectedColumns.includes(i))

    useEffect(() => {
        setItem(selectedColumns.map(x => x.accessorKey))
    }, [selectedColumns])

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
                                    {<SelectableColumn column={column} onClick={onDelete} isSelected={true}/>}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="to-export-buttons">
                    <ExportButton image={excelImage} text={Text.EXPORT_EXCEL} onClick={() => exportToExcel(getItem())} />
                    {/*<ExportButton image={pdfImage} text={Text.EXPORT_PDF} onClick={exportToPdf} />*/}
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