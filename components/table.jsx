"use client"

import { usePathname, useRouter } from 'next/navigation'
import Link from "next/link";
import Image from "next/image"
import useTableService from "@/services/tableService";

export const Table = (props) => {
    const tableService = new useTableService()
    return (
        <table className={`flex flex-col gap-2.5 w-full `}>

            <tr className={`grid grid-rows-1 w-full h-20 px-3 rounded-lg grid-cols-2 place-content-center place-items-center`} style={{"grid-template-columns": `repeat(${props?.columns.length}, minmax(0, 1fr)`} }>
                {props?.columns.map((column,key) => (
                    <th className="flex h-full w-full justify-center items-center " key={key}>
                        <span className="truncate text-xs font-['Montserrat'] font-semibold text-[#acacac]">{column.title}</span>
                    </th>
                ))}
            </tr>

            {props?.data.map((row,rowKey) => (
                <tr key={rowKey} className={`bg-white grid grid-rows-1 w-full h-20 px-3 rounded-lg grid-cols-2 place-content-center place-items-center`} style={{"grid-template-columns": `repeat(${props?.columns.length}, minmax(0, 1fr)`} }>
                    {props?.columns.map((column,key) => (
                        <td className="flex h-full w-full justify-center items-center" key={key}>
                            {
                                column.type === "image" ?
                                <img src={tableService.readProperty(row, column)} className="min-h-0 min-w-0 w-16 shrink-0"/>

                                :

                                    column.type === "merge" ?

                                        <span className="truncate whitespace-nowrap text-sm font-['Montserrat'] text-black">{tableService.mergeColumns(row, props?.columns, column)}</span>

                                :

                                <span className="truncate whitespace-nowrap text-sm font-['Montserrat'] text-black">{tableService.readProperty(row, column)}</span>
                            }
                        </td>
                    ))}
                </tr>
            ))}
        </table>
    );
}
