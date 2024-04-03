import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import filterIcon from '../../assets/images/filter-icon.png';
import rowHorizontal from '../../assets/images/row-horizontal-icon.png';
import sellingIcon from '../../assets/images/selling-icon.png';
import { SITE_ROUTES, GridViewTableBody } from '../../constants';
import { usePath } from '../../hooks/usePath';

const OverviewScreenHeader = () => {
  const currentPath = usePath();
  const [active, setActive] = useState(currentPath);

  return (
    <>
      <div>
        <span className="text-xs">
          Dashboard &lt; <span className="text-blue-500">All Listing</span>{' '}
        </span>
      </div>
      <div className="flex flex-col items-start md:flex-row md:items-center justify-between my-6">
        <h3 className="text-xl">
          {' '}
          {GridViewTableBody.length} Available Listing
        </h3>
        <div className="flex items-center w-2/4 justify-start md:justify-end">
          <Link to={SITE_ROUTES.addListing}>
            <button className="border border-blue-500 py-1 px-4 mx-2 rounded text-blue-500 hidden md:block">
              Add Listing
            </button>
          </Link>
          <button className="bg-gray-100 py-1 px-4 mx-0 md:mx-2 rounded text-gray-400 flex">
            Filter{' '}
            <span className="ml-2 flex items-center justify-center">
              <img src={filterIcon} alt="filter" />
            </span>{' '}
          </button>

          <Link
            to={SITE_ROUTES.overViewGridView}
            className={`border-gray-200 p-2 ${
              active == 'grid-view' ? 'bg-sky-100 text-blue-500' : 'bg-gray-100'
            } mx-2 rounded-full hover:cursor-pointer hidden md:block`}
          >
            <img src={rowHorizontal} alt="row horizontal" />
          </Link>
          <Link
            to={SITE_ROUTES.overViewListView}
            className={`border-gray-200 p-2 ${
              active == 'list-view' ? 'bg-sky-100 text-blue-500' : 'bg-gray-100'
            } mx-2 rounded-full hover:cursor-pointer hidden md:block`}
          >
            <img src={sellingIcon} alt="filter" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default OverviewScreenHeader;
