
import React, {useMemo} from "react";
import {getCoreRowModel, useReactTable, flexRender, getFilteredRowModel, getSortedRowModel} from '@tanstack/react-table'
import "./Table.css"
import sortImage from "./sort.svg"
import mDataJSON from './mdata.json'
import columnsData from "./Columns";

const Table = ({ columnFilters }) => {
    const data = useMemo(() => mDataJSON, [])
    const columns = useMemo(() => columnsData, [])

    const customFilterFn = (rows, columnId, filterValue) => {
        console.log(rows, columnId, filterValue)
    }

    const table = useReactTable({
        data,
        columns,
        state: {
            globalFilter: columnFilters
        },
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getSortedRowModel: getSortedRowModel(),
        columnResizeMode: "onChange"
    });

    return (
        <div className="table-container" key="table-container">
            <table width={table.getTotalSize()} key="table">
                {
                    table.getHeaderGroups().map((headerGroup, index) => (
                        <thead key={index}>
                            <tr key={headerGroup.id}>{headerGroup.headers.map(header => (
                                <th width={header.getSize()} key={header.id}>
                                    <div className="header-sorting">
                                        <span className="header-sorting-text">
                                            {header.column.columnDef.header}
                                        </span>
                                        <div>
                                           {header.column.getCanSort() && (
                                               <button onClick={ header.column.getToggleSortingHandler() }>
                                                   <img src={sortImage} alt=""/>
                                               </button>
                                           )}
                                        </div>
                                    </div>
                                    <div
                                        onMouseDown={
                                            header.getResizeHandler()
                                        }
                                        onTouchStart={
                                            header.getResizeHandler()
                                        }
                                        className={
                                            `resizer ${
                                                header.column.getIsResizing() ? 'isResizing' : ''
                                            }`
                                        }
                                    />
                                </th>
                            ))}
                            </tr>
                        </thead>
                    ))
                }
                <tbody>
                {
                    table.getRowModel().rows.map((rowModel) => (
                        <tr key={rowModel.id}>
                            {rowModel.getVisibleCells().map(cell =>
                                <td width={cell.column.getSize()} key={cell.id}>
                                    {
                                        flexRender(
                                            cell.column.columnDef.cell,
                                            cell.getContext()
                                        )
                                    }
                                </td>
                            )}
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    );
}

export default Table;