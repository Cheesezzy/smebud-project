import { url } from 'inspector';
import React from 'react';
import { Link } from 'react-router-dom';
import DashBoardWrapper from '../../component/DashBoardWrapper';
import { OverViewScreenCard } from '../../constants';

const DashboardOverviewScreen = () => {
  return (
    <DashBoardWrapper>
      <div className=" pt-9">
        <h3 className="text-black text-xl px-4">Dashboard Overview</h3>
        <div className="flex items-center mt-6 p-4 w-full mx-auto">
          {OverViewScreenCard.map((item: any) => (
            <div
              className="bg-white rounded w-2/4 py-4 px-4 mx-2"
              key={`${(Math.random() * 1000000).toString()}`}
            >
              <div className="flex items-center justify-between mb-9">
                <p className="text-gray-400 text-sm">{item.label}</p>
                <Link to={item.url} className="cursor-pointer">
                  <p className="text-blue-500 text-xs">See all</p>
                </Link>
              </div>
              <div className="h">
                <p className="text-gray-500">{item.total}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashBoardWrapper>
  );
};

export default DashboardOverviewScreen;
