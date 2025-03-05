import React, {useMemo} from "react";
import {getCoreRowModel, useReactTable, flexRender, getFilteredRowModel, getSortedRowModel} from '@tanstack/react-table'
import "./Table.css"
import sortImage from "../Resources/sort.svg"
import columnsData from "./Columns";
import {useQuery} from "@tanstack/react-query";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";

const Table = ({ columnFilters }) => {
    const columns = useMemo(() => columnsData, [])

    const {
        isPending,
        error,
        data,
        refetch
    } = useQuery({
        queryKey: ['companies'],
        queryFn: async () => {
            const response = await fetch('http://127.0.0.1:9090/users')
            return await response.json()
        }
    })

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

    const onCompanyClick = (originalRow) => {
        console.log(originalRow.extId !== undefined)
    }

    if (isPending) { return <div className="table-loader"><Loader/></div>  }

    if (error) { return <div className="table-error"><Error onClick={() => refetch()}/></div> }
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
                                            <button onClick={header.column.getToggleSortingHandler()}>
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
                        <tr key={rowModel.id} onClick={() => onCompanyClick(rowModel.original)}>
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