import React from 'react';
import PropTypes from 'prop-types';
import { SIDEBAR_MENU, LOGIN_USER } from '../constants/index';

const DashBoardWrapper = ({ children }: any) => {
  return (
    <div className="flex flex-col md:flex-row w-full md:h-screen">
      <div className="bg-white w-1/6 hidden md:block ">
        <div className="w-full mb-24">
          <h3 className="ml-4 md:ml-6 mt-4 text-gray-500">Menu</h3>
          {SIDEBAR_MENU.map((items) => {
            return (
              <div className="flex items-center my-7 ml-4 md:ml-6 first:mt-4" key={items.id}>
                <span className="cursor-pointer mr-2">
                  <img src={items.icon} alt="overview" />
                </span>
                <p className="cursor-pointer text-gray-500">{items.label}</p>
              </div>
            );
          })}
        </div>
        <div className="h">
          <h3 className="ml-2 md:ml-4 mt-4 text-gray-500 mb-6">Profile</h3>
          <div className="border border-gray-100 flex items-center p-4 w-5/6 mx-auto bg-sky-50">
            <span className="mr-4 rounded-full h-12 w-12">
              <img src={LOGIN_USER.headShot} alt="profile headshot" />
            </span>
            <div>
              <p className="text-gray-500">{LOGIN_USER.fullName}</p>
              <p className="text-blue-500 text-xs cursor-pointer">
                View Profile
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-sky-50 w-full md:w-5/6 p-4 overflow-y-auto">{children}</div>
    </div>
  );
};

DashBoardWrapper.propTypes = {
  children: PropTypes.element
};

export default DashBoardWrapper;
