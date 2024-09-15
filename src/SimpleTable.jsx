import {
    useReactTable,
    getCoreRowModel,
    flexRender,
    getPaginationRowModel,
    getSortedRowModel,
    getFilteredRowModel

} from '@tanstack/react-table';
import data from '../MOCK_DATA.json';
import dayjs from 'dayjs';
import { useState } from 'react';

function SimpleTable() {

    const columns = [
        {
            header: "ID",
            accessorKey: "id",
            footer:"My ID"
        },
        {
            header: "Nombres",
            accessorKey: "name",
            footer:"Mi nombre"
        },
        {
            header: "Apellido",
            accessorKey: "lastname",
            footer:"Mi apellido"
        },
        {
            header: "Email",
            accessorKey: "email",
            footer:"Mi Email"
        },
        {
            header: "Country",
            accessorKey: "country",
            footer:"Mi pais"
        },
        {
            header: "Fecha Nacimiento",
            accessorKey: "dateofBirth",
            footer:"Mi fecha Nac",
            cell:(info) => dayjs(info.getValue()).format("DD/MM/YYYY")
        },

    ];

    const [sorting,setSorting] = useState([]);
    const [filtering,setFiltering]=useState("");

    const table = useReactTable({ 
        data, 
        columns, 
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel:getPaginationRowModel() ,
        getSortedRowModel:getSortedRowModel(),
        getFilteredRowModel:getFilteredRowModel(),
        state:{
            sorting,
            globalFilter:filtering
        },
        onSortingChange:setSorting,
        onGlobalFilterChange:setFiltering,
    });
    return (
        <div className="flex flex-col mt-8">
            <input
                className='mb-5'
                type="text"
                value={filtering}
                placeholder="Type filter"
                onChange={e => setFiltering(e.target.value)}
            />
            <table className=" table min-w-full text-center text-sm font-light text-surface dark:text-white">
                <thead>
                    {
                        table.getHeaderGroups().map(headerGroup => (
                            <tr className="border-b border-neutral-700 bg-neutral-800 text-neutral-50 dark:border-neutral-600 dark:bg-neutral-700"
                                key={headerGroup.id}>
                                {
                                    headerGroup.headers.map(header => (
                                        <th className="whitespace-nowrap px-6 py-4 font-medium"
                                            key={header.id}
                                            onClick={header.column.getToggleSortingHandler()}
                                            >
                                            {flexRender(header.column.columnDef.header,
                                            header.getContext())}
                                            {
                                              {  'asc': '⬆', 'desc': '⬇'} [
                                                header.column.getIsSorted() ?? null
                                            ]
                                            }
                                            
                                        </th>
                                    ))
                                }
                            </tr>
                        ))
                    }
                </thead>
                <tbody>
                    {
                        table.getRowModel().rows.map(row => (
                            <tr className="border-b border-success-200 bg-success-100 text-neutral-800"
                                key={row.id}>
                                    {row.getVisibleCells().map(cell => (
                                <td className="whitespace-nowrap px-6 py-4 font-medium">
                                    {flexRender(cell.column.columnDef.cell,
                                    cell.getContext()) }
                                </td>
                                ))}
                            </tr>
                        ))
                    }

                </tbody>
                <tfoot>
                    {
                        table.getFooterGroups().map(footerGroup =>(
                            <tr className="border-b border-neutral-200 font-medium dark:border-white/10"
                                key={footerGroup.id}>
                                {footerGroup.headers.map(footer =>(
                                    <th key ={footer.id}>
                                        {flexRender(
                                            footer.column.columnDef.footer,
                                            footer.getContext()
                                        )}
                                    </th>
                                ))}
                            </tr>
                        ))
                    }
                </tfoot>
            </table>
            <button onClick={()=> table.setPageIndex(0)}>
                Primer Pagina
            </button>
            <button onClick={()=> table.previousPage()}>
                Pagina Anterior
            </button> 
            <button onClick={()=> table.nextPage()}>
                Pagina Siguiente
            </button> 
            <button onClick={()=> table.setPageIndex(table.getPageCount() - 1)}>
                Ultima Pagina
            </button> 

        </div>
    )

}
export default SimpleTable