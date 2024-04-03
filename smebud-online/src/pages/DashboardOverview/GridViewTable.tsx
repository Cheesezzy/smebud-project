import React from 'react';

const GridViewTable = ({ GridViewTableHead, GridViewTableBody }: any) => {
  return (
    <table className="w-full table-auto">
      <thead className="">
        <tr className="text-left p-4 border border-x-0 border-t-0 border-b-gray-200">
          {GridViewTableHead.map(({ id, tHead }: any) => (
            <th
              key={id}
              className="px-4 py-2 text-gray-500 first:px-0 last:px-0"
            >
              {' '}
              {tHead}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className='overflow-y-auto'>
        {GridViewTableBody.map((items: any) => {
          return (
            <tr className=" even:bg-gray-100 ">
              <td className="px-4 py-4 text-gray-400 first:px-0">
                {items.listingNumber}
              </td>
              <td className="px-4 py-4 text-gray-400">
                {items.nichesAndStates}
                <span
                  className={`h rounded-full w-32 h-9 px-2 py-1  text-xs ml-2 ${
                    items.status == 'Investors'
                      ? 'text-green-400 bg-green-50'
                      : 'text-blue-400 bg-blue-100'
                  }`}
                >
                  {items.status}
                </span>
              </td>
              <td className="px-4 py-4 text-gray-400">{items.monetization}</td>
              <td className="px-4 py-4 text-gray-400">{items.price}</td>
              <td className="px-4 py-4 text-gray-400">
                {items.listingCreated}
              </td>
              <td className="px-4 py-4 text-gray-400 cursor-pointer hover:underline hover:text-gray-500 last:px-0">
                View
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default GridViewTable;
