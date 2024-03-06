import { PencilIcon } from '@heroicons/react/24/outline'
import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
  } from '@tanstack/react-table'
  import { useState, useEffect, useMemo } from 'react'
  
  type Growth = {
    id: number
    age: number
    weigth: number
    notes?: string
  }
  
  const GrowthTable = () => {
    const [data, setData] = useState<Growth[]>([])
  
    const defaultData: Growth[] = useMemo(() => ([
      {
          id: 200,
          notes: 'Average of 10 Chickens',
          age: 1,
          weigth: 300
      },
      {
          id: 201,
          notes: 'Average of 10 Chickens',
          age: 2,
          weigth: 420
      },
      {
          id: 202,
          notes: 'Average of 10 Chickens',
          age: 3,
          weigth: 560
      },
      {
          id: 203,
          notes: 'Average of 8 Chickens',
          age: 4,
          weigth: 620
      },
      {
          id: 204,
          notes: 'Average of 10 Chickens',
          age: 5,
          weigth: 700
      },
      {
          id: 205,
          notes: 'Average of 10 Chickens',
          age: 6,
          weigth: 850
      },
    ]), [])

    useEffect(() => {
        setData([...defaultData])
    }, [defaultData])

    const handleEditDetails = (id: number) => {
        console.log(id);
    }
    
    const columnHelper = createColumnHelper<Growth>()
    
    const columns = [
      columnHelper.accessor('id', {
        cell: ({ getValue }) => (
          <div
            className='flex flex-row justify-start align-center'
          >
            <>
              {getValue()}
            </>
          </div>
        ),
        header: () => (
          <div className='flex items-center justify-start'>
            #{' '}
          </div>
          ),
      }),
      columnHelper.accessor(row => row.age, {
        id: 'age',
        cell: info => <i>{info.getValue() }</i>,
        header: () => <span>Age (Weeks)</span>,
      }),
      columnHelper.accessor('weigth', {
        header: 'Weigth (Grams)',
      }),
      columnHelper.accessor('notes', {
        header: 'Notes',
      }),
      columnHelper.accessor('id', {
        cell: ({ getValue }) => (
          <div
            className='flex flex-row justify-start align-center'
          >
            <>
              <button className='flex items-center bg-neutral-400 hover:bg-neutral-300 text-xs text-neutral-900 font-light py-1 px-2 rounded-md' onClick={() => handleEditDetails(getValue())}>
                  Edit{' '}
                  <PencilIcon className='h-auto w-3 ml-1' />
              </button>
            </>
          </div>
        ),
        header: () =>(
              <div className='flex items-center justify-start text-neutral-300 text-xs font-semibold'>
                  Action
              </div>
          ),
      })
    ]
  
    const table = useReactTable({
      data,
      columns,
      state: {},
      getCoreRowModel: getCoreRowModel()
    })
  
    return (
      <div className="p-2 max-w-full overflow-x-scroll">
        <table className='w-full min-w-3xl table-auto border-collapse border border-neutral-700'>
          <thead>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <th key={header.id} className='bg-neutral-900 text-neutral-300 text-xs font-semibold text-left border-none border-slate-400 px-2 py-2'>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map(row => (
              <tr key={row.id}>
                {row.getVisibleCells().map(cell => (
                  <td
                    key={cell.id}
                    className={`w-auto bg-neutral-900 text-neutral-200 text-xs font-normal px-2 py-2 border-t border-neutral-700`}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
  
  export default GrowthTable;