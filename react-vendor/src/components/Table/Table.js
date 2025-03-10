import React, {useMemo} from "react";
import {getCoreRowModel, useReactTable, flexRender, getFilteredRowModel, getSortedRowModel} from '@tanstack/react-table'
import {useNavigate} from "react-router-dom";
import "./Table.css"
import sortImage from "../Resources/sort.svg"
import columnsData from "./Columns";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import {useCompanies} from "../../services/serviceHooks";
import {LoginService} from "../../services/LoginService";

const Table = ({ columnFilters }) => {
    const isLoggedIn = LoginService.isAuthenticated()
    const columns = useMemo(() => columnsData.filter((c) => isLoggedIn || c.isPublic), [])
    const navigate = useNavigate();

    const {
        isPending,
        error,
        data,
        refetch
    } = useCompanies()

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
        if (originalRow.extId !== undefined) {
            navigate(`/${originalRow.extId}`)
        }
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