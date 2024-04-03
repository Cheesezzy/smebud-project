import Rec from '../../../assets/landingPageImages/Rectangle.svg';
import Amazon from '../../../assets/landingPageImages/Amazon.svg';
import Shop from '../../../assets/landingPageImages/Shop.svg';

const Rectangle = () => {
  return (
    <div
      className="border-1 w-full h-[650px] rounded-sm p-5 mt-5 border-[0.5px] border-[#F1F1F1] bg-white"
      style={{
        boxShadow: '0px 20px 40px rgba(235, 235, 235, 0.3)'
      }}
    >
      <img src={Rec} alt="rectangle" />

      <div className="flex justify-between mt-[24px]">
        <div className="flex flex-col justify-between align-center">
          <h3 className="text-[16px] font-bold">Confidential </h3>
          <span className="text-[#3A56CD] mt-1">Sponsored</span>
        </div>

        <div className="flex flex-1 justify-around w-[148px] h-[29px] mx-[12px] align-center rounded-lg p-1 bg-[#F2F5FF]">
          <img src={Amazon} alt="Amazon" width="13px" height="13px" />
          <img src={Shop} alt="Shop" width="13px" height="13px" />
          <p className="text-[#3A56CD] self-center text-[14px]">
            verified listing
          </p>
        </div>

        <div className="flex flex-col justify-between align-center">
          <p className="text-[#A1A5AD] text-[14px] self-end">Asking Price</p>
          <span className="font-bold mt-4">USD $431,000</span>
        </div>
      </div>

      <div className="flex justify-between mt-[31px]">
        <span>
          <p className="text-[#A1A5AD] text-[14px] ">Type </p>
          <p className="text-[#696E7C] mt-[8px] text-[14px]">Eccomerce</p>
        </span>

        <span>
          <p className="text-[#A1A5AD] text-[14px] ">Industry</p>
          <p className="text-[#696E7C] mt-[8px] text-[14px]">Eccomerce</p>
        </span>

        <span>
          <p className="text-[#A1A5AD] text-[14px] ">Site age</p>
          <p className="text-[#696E7C] mt-[8px] text-[14px]">Eccomerce</p>
        </span>

        <span>
          <p className="text-[#A1A5AD] text-[14px] ">Net Profit</p>
          <p className="text-[#696E7C] mt-[8px] text-[14px]">Eccomerce</p>
        </span>
      </div>

      <div className="my-[24px]">
        <span>
          <p className="text-[#A1A5AD] text-[14px] ">Monetization</p>
          <p className="text-[#696E7C] mt-[8px] text-[14px]">Eccomerce</p>
        </span>
      </div>

      <div className="border-t-2 p-[16px] ">
        <p className="text-[16px] text-[#696E7C]">
          Lorem ipsum dolor sit amet consectetur. Nulla convallis eget praesent
          tortor id.{' '}
        </p>
      </div>

      <div className="flex justify-around mt-[4px] flex-1">
        <p className="text-[#565C6B]">Multiple</p>
        <p className="text-[#565C6B]">2.3x profit</p>
        <p className="text-[#565C6B]">0.5 revenue</p>
      </div>

      <div className="mx-auto flex gap-6 mt-[18px]">
        <button className=" bg-transparent border-2 border-[#3A56CD] w-full h-11 rounded-lg text-[#3A56CD] text-lg">
          Watch
        </button>
        <button className="w-full h-11 rounded-lg bg-[#F1F4FF] text-[#3A56CD] text-lg">
          View listing
        </button>
      </div>
    </div>
  );
};

export default Rectangle;
