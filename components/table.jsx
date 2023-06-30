"use client"

import useTableService from "@/services/tableService";

export const Table = ({onDetailAction, onDeleteAction, ...props}) => {
    const tableService = new useTableService()
    return (
        <table className={`flex flex-col gap-2.5 w-full `}>
            <thead className="w-full">
            <tr className={`grid grid-rows-1 w-full h-8 px-3 rounded-lg grid-cols-2 place-content-center place-items-center`} style={{"gridTemplateColumns": `repeat(${props?.columns.length}, minmax(0, 1fr)`} }>
                    {props?.columns.map((column,key) => (
                        <th className="flex h-full w-full justify-center items-center " key={key}>
                            <span className="truncate text-xs font-['Montserrat'] font-semibold text-[#acacac]">{column.title}</span>
                        </th>
                    ))}
            </tr>
            </thead>

            <tbody className={`flex flex-col gap-2.5 w-full `}>
            {
                props?.data.length === 0 &&
                <tr className="flex w-full justify-center items-center text-sm font-['Montserrat'] text-black mt-2.5 delay-700"><td>No Data Available</td></tr>
            }
            {props?.data.map((row,rowKey) => (
                <tr key={rowKey} className={`bg-white grid grid-rows-1 w-full h-20 px-3 rounded-lg grid-cols-2 place-content-center place-items-center`} style={{"gridTemplateColumns": `repeat(${props?.columns.length}, minmax(0, 1fr)`} }>
                    {props?.columns.map((column,key) => (
                        <td className="flex h-full w-full justify-center items-center" key={key}>
                            {
                                column.type === "image" ?
                                <img src={tableService.readProperty(row, column)} className="min-h-0 min-w-0 w-16 shrink-0"/>

                                :

                                    column.type === "merge" ?

                                        <span className="truncate whitespace-nowrap text-sm font-['Montserrat'] text-black">{tableService.mergeColumns(row, props?.columns, column)}</span>

                                :

                                    column.type === "actions" ?

                                        <span className="flex justify-center items-center gap-6">
                                            <button onClick={() => onDetailAction(row) }>
                                                <img
                                                    src="https://file.rendit.io/n/wKFYQEwKMy5UOkupmgnF.svg"
                                                    className="hover:scale-105 min-h-0 min-w-0 mr-px relative w-5 shrink-0"
                                                />
                                            </button>
                                             <button onClick={() => onDeleteAction(row) }>
                                              <img
                                                  src="https://file.rendit.io/n/dCXBHDB13CroFdgy2PGy.svg"
                                                  className="hover:scale-105 min-h-0 min-w-0 relative w-4 shrink-0"
                                              />
                                             </button>
                                        </span>

                                :

                                <span className="truncate whitespace-nowrap text-sm font-['Montserrat'] text-black">{tableService.readProperty(row, column)}</span>
                            }
                        </td>
                    ))}
                </tr>
            ))}
            </tbody>
        </table>
    );
}
