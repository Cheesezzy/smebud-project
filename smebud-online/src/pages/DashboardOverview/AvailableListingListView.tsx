import React from 'react';
import DashBoardWrapper from '../../component/DashBoardWrapper';
import OverviewScreenHeader from './OverviewScreenHeader';
import amazonIcon from '../../assets/images/amazon-icon.png';
import shopifyIcon from '../../assets/images/shopify-icon.png';
import {
  ListViewTableHead,
  ListViewTableBody,
  GridViewTableBody
} from '../../constants';

const AvailableListingListView = () => {
  return (
    <DashBoardWrapper>
      <>
        <OverviewScreenHeader />
        <div className="overflow-y-auto h-full">
          {GridViewTableBody.map((item: any) => (
            <div className="bg-white p-4 my-4" key={item.listingNumber}>
              <div className="flex flex-col md:flex-row w-full">
                <div className="bg-sky-100 w-full h-48 md:h-54 md:w-2/6 p-2 md:m-2"></div>
                <div className="flex flex-col w-full md:w-5/6 m-2">
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between pr-4 w-full border border-x-0 border-t-0 border-b-gray-200 pb-2">
                    <div className="flex flex-col md:flex-row md:items-center">
                      <h3 className="text-black">Confidential</h3>
                      <button className="md:block bg-gray-100 py-1 px-4 mx-2 rounded text-gray-400 flex">
                        {item.listingNumber}
                      </button>
                      <span className="flex items-center rounded-full h-6 px-2 py-1 max-w-xs text-xs md:ml-2 text-blue-400 bg-blue-50">
                        <img
                          src={amazonIcon}
                          alt="amazon icon"
                          className="mr-1"
                        />
                        <img
                          src={shopifyIcon}
                          alt="shopify icon"
                          className="mr-1"
                        />
                        Verified listing
                      </span>
                    </div>
                    <div className="hidden md:block">
                      <h4 className="text-xs text-right text-gray-400">
                        Asking Price
                      </h4>
                      <h3 className="text-lg text-right text-black">
                        USD {item.price}
                      </h3>
                    </div>
                  </div>
                  <div className="border border-t-0 border-x-0 border-b-gray-200 py-4">
                    <div className="overflow-x-auto">
                      <table className="md:w-full table my-2 md:my-0 w-[650px]">
                        <thead>
                          <tr>
                            {ListViewTableHead.map(({ id, tHead }) => (
                              <th
                                className="text-left text-gray-400 text-sm"
                                key={`${(Math.random() * 1000000).toString()}`}
                              >
                                {tHead}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            {ListViewTableBody.map(({ id, tBody }) => (
                              <td
                                className="text-left text-gray-500 text-sm"
                                key={`${(Math.random() * 1000000).toString()}`}
                              >
                                {tBody}
                              </td>
                            ))}
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p className="text-left text-gray-500 text-sm md:px-2 pt-2">
                      {item.paragraph}
                    </p>
                  </div>
                  <div className="flex flex-col w-full md:flex-row justify-between items-left md:items-center my-2">
                    <div className="flex w-full my-2 justify-start md:my-0 md:w-2/4 text-gray-400">
                      <p className="mr-2 md:mr-4">Multiple</p>
                      <span className="mr-2 md:mr-4">.</span>
                      <p className="mr-2 md:mr-4">2.3x profit</p>
                      <span className="mr-2 md:mr-4">.</span>
                      <p className="mr-2 md:mr-4">0.5 revenue</p>
                    </div>
                    <div className=" md:hidden my-2">
                      <h4 className="text-xs text-left text-gray-400">
                        Asking Price
                      </h4>
                      <h3 className="text-lg text-left text-black">
                        USD {item.price}
                      </h3>
                    </div>
                    <div className="flex w-full md:w-2/4 justify-evenly">
                      <button className="w-48 justify-center py-1 px-4 border mr-2 md:mx-2 border-blue-500 rounded text-blue-500 flex">
                        Watch
                      </button>
                      <button className="w-48 justify-center text-center py-1 ml-2 md:mx-2 px-4 bg-sky-100 rounded text-blue-500 flex">
                        View listing
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    </DashBoardWrapper>
  );
};

export default AvailableListingListView;
