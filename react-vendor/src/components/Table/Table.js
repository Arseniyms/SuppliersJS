
import React, {useState} from "react";
import {getCoreRowModel, useReactTable, flexRender, getFilteredRowModel, getSortedRowModel} from '@tanstack/react-table'
import "./Table.css"
import sortImage from "./sort.svg"

const DATA = [
    {
        name: "b",
        website: "web.com1",
        FIO: "FIO1",
        phone: "phone1",
        mail: "mail@mail.ru1",
        address: "address1"
    },
    {
        name: "c",
        website: "web.com2",
        FIO: "FIO2",
        phone: "phone3",
        mail: "mail@mail.ru3",
        address: "address4"
    },
    {
        name: "a",
        website: "asd",
        FIO: "asd",
        phone: "asd",
        mail: "mail@mail.asd",
        address: "address4"
    },
]

const columns = [
    {
        accessorKey: 'name',
        header: 'Имя',
        cell: (props) => <p>{props.getValue()}</p>
    },
    {
        accessorKey: 'website',
        header: 'Сайт',
        cell: (props) => <p>{props.getValue()}</p>,
    },
    {
        accessorKey: 'FIO',
        header: 'ФИО',
        cell: (props) => <p>{props.getValue()}</p>,
    },
    {
        accessorKey: 'phone',
        header: 'Телефон',
        enableSorting: false,
        cell: (props) => <p>{props.getValue()}</p>,
    },
    {
        accessorKey: 'mail',
        header: 'Эл. Почта',
        enableSorting: false,
        cell: (props) => <p>{props.getValue()}</p>,
    },
    {
        accessorKey: 'address',
        header: 'Адрес',
        enableSorting: false,
        cell: (props) => <p>{props.getValue()}</p>,
    }
]

const Table = ({ columnFilters }) => {

    const [data, setData] = useState(DATA);

    const table = useReactTable({
        data,
        columns,
        state: {
            globalFilter: columnFilters
        },
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getSortedRowModel: getSortedRowModel(),
        columnResizeMode: "onChange",
    });

    console.log(columnFilters);
    return (
        <div className="table-container">
            <table width={table.getTotalSize()}>
                {
                    table.getHeaderGroups().map(headerGroup => (
                        <thead>
                            <tr key={headerGroup.id}>{headerGroup.headers.map(header => (
                                <th width={header.getSize()} colSpan={header.colSpan} key={header.id}>
                                    <div className="header-sorting">
                                        <span className="header-sorting-text"> {header.column.columnDef.header} </span>
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
                {
                    table.getRowModel().rows.map((rowModel) => (
                        <tbody>
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
                        </tbody>
                    ))
                }
            </table>
        </div>
    );
}

export default Table;