import Rectangle from './subComponents/Rectangle';
import filterIcon from '../../assets/images/filter-icon.png';
import Vector from '../../assets/images/imageSvg/Vector.svg';
import { useState } from 'react';
import arrowDown from '../../assets/images/imageSvg/arrowDown.svg';

const Body = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="max-w-[1440px] pt-[136px] mx-auto px-4 md:px-10 xl:px-24">
      {/* heading */}
      <div>
        <h3 className="font-extrabold text-lg md:text-2xl text-[#434A5B]">
          Browse top online businesses{' '}
        </h3>
        <p className="text-[#565C6B] max-w-[50ch] leading-[30px] text-sm md:text-lg">
          These are all revenue generating websites, ecommerce stores and other
          online businesses
        </p>
      </div>

      {/* search bar */}
      <div
        className="p-6 mt-6 border-[0.5px] border-[#F1F1F1] bg-white"
        style={{
          boxShadow: '0px 20px 40px rgba(235, 235, 235, 0.3)'
        }}
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="hidden self-start md:flex flex-wrap gap-[10px]">
            <button className="border-box bg-[#F7F8FF] border-[0.5px] border-transparent py-[5px] px-6 text-sm text-[#4B6EFF] rounded-full hover:bg-[#F7F8FF] focus:bg-[#F7F8FF] focus:outline-[#F7F8FF]">
              Ecommerce
            </button>
            <button className="border-box bg-white border-[0.5px] border-[#A1A5AD] py-[5px] px-6 text-sm text-[#565C6B] rounded-full hover:bg-[#F7F8FF] focus:bg-[#F7F8FF] focus:outline-[#F7F8FF]">
              Apps
            </button>
            <button className="border-box bg-white border-[0.5px] border-[#A1A5AD] py-[5px] px-6 text-sm text-[#565C6B] rounded-full hover:bg-[#F7F8FF] focus:bg-[#F7F8FF] focus:outline-[#F7F8FF]">
              Content/Advertising
            </button>
            <button className="border-box bg-white border-[0.5px] border-[#A1A5AD] py-[5px] px-6 text-sm text-[#565C6B] rounded-full hover:bg-[#F7F8FF] focus:bg-[#F7F8FF] focus:outline-[#F7F8FF]">
              SaaS
            </button>
          </div>

          <button className="border-[0.5px] border-[#A1A5AD] px-[30px] py-[10px] flex justify-center items-center gap-2 rounded-[4px] hover:border-[#565C6B] focus:border-[#565C6B] focus:outline-none self-start md:self-end">
            <img src={filterIcon} alt="filterIcon" />
            <span>Filter</span>
          </button>
        </div>

        <form className="flex items-center pr-4 gap-4 border border-[#D9DBDE] rounded-[4px] my-6">
          <div className="relative w-full">
            {/* text-[#7B808C] */}
            <input
              className="p-5 w-full focus:outline-none"
              type="text"
              placeholder="e.g Fitness Blog,Shopify stores"
            />
          </div>

          <button className="hidden md:block rounded-[4px] px-[30px] py-2 hover:bg-blue-700 bg-[#3A56CD] text-[#FCFCFC]">
            Search
          </button>
        </form>

        <button className="flex md:hidden items-center justify-between h-12 w-full">
          <span className=''>Categories</span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.3513 15.3C11.8383 15.3 11.3254 15.1021 10.937 14.7138L6.15938 9.93611C5.94687 9.72361 5.94687 9.37188 6.15938 9.15938C6.37188 8.94687 6.72361 8.94687 6.93611 9.15938L11.7138 13.937C12.0655 14.2888 12.6371 14.2888 12.9888 13.937L17.7664 9.15938C17.9789 8.94687 18.3307 8.94687 18.5432 9.15938C18.7557 9.37188 18.7557 9.72361 18.5432 9.93611L13.7655 14.7138C13.3772 15.1021 12.8642 15.3 12.3513 15.3Z"
              fill="#4B6EFF"
            />
          </svg>
        </button>
      </div>

      {/* result */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Rectangle />
        <Rectangle />
        <Rectangle />
        <Rectangle />
        <Rectangle />
        <Rectangle />
      </div>

      <div className="mt-6">
        <a href="#" className="text-[#3A56CD] font-bold underline">
          See More
        </a>
      </div>
    </div>
  );
};

export default Body;
