import bg from '../../assets/landingPageImages/bg.svg';

const HeroSection = () => {
  return (
    <>
      <div
        className="relative bg-cover bg-center flex flex-col justify-center items-center pt-[88px] md:pt-[70px] pb-[103px]"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="flex justify-center items-center flex-col gap-6 ">
          <span className="text-lg text-white rounded-2xl bg-[#5778FF] py-[5px] px-4 inline-block">
            #Marketplace For All
          </span>

          <h1 className="text-white max-w-[30ch] px-6 md:text-[40px] text-[25px] font-bold text-center ">
            The Top Platform For Purchasing and Selling Good & Services.
          </h1>
          <p className="max-w-[50ch] text-center text-[20px] px-6 text-white">
            "Connecting buyers and sellers worldwide with seamless transactions
            and trusted experiences."
          </p>
        </div>

        <div className="mx-auto flex my-6">
          <span className="mx-3">
            <button className=" bg-transparent border-2 w-40 h-11 rounded-lg text-white text-lg">
              Get Valuation
            </button>
          </span>
          <span className="mx-3">
            <button className=" w-40 h-11 rounded-lg bg-white text-[#3A56CD] text-lg">
              Sell Now
            </button>
          </span>
        </div>

        <div
          className="max-w-[1151px] w-[85%] mx-auto h-[121px] bottom-[-80px] left-1/2 -translate-x-1/2 absolute flex items-center justify-between bg-white rounded-lg px-6 gap-[75px] overflow-hidden"
          style={{
            boxShadow: '0px 20px 40px rgba(235, 235, 235, 0.3)'
          }}
        >
          <div>
            <p style={{ fontSize: 20, color: '#565C6B' }}>Trending:</p>
          </div>

          <div className="w-full min-w-[900px] flex justify-between flex-nowrap overflow-hidden">
            <div className="bg-[#FBFCFF] w-20 h-10 rounded-full flex justify-center align-center">
              <button className="self-center  hover:text-blue-500 text-[#565C6B] text-[14px]">
                SaaS
              </button>
            </div>
            <div className="bg-[#FBFCFF] w-20 h-10 rounded-full flex justify-center align-center">
              <button className="self-center hover:text-blue-500 text-[#565C6B] text-[14px]">
                Blog
              </button>
            </div>

            <div className=" bg-[#FBFCFF] w-20 h-10 rounded-full flex justify-center align-center">
              <button className="self-center hover:text-blue-500 text-[#565C6B] text-[14px]">
                Shopify
              </button>
            </div>
            <div className="bg-[#FBFCFF] w-20 h-10 rounded-full flex justify-center align-center">
              <button className="self-center hover:text-blue-500 text-[#565C6B] text-[14px]">
                Amazon
              </button>
            </div>
            <div className=" bg-[#FBFCFF] w-20 h-10 rounded-full flex justify-center align-center">
              <button className="self-center hover:text-blue-500 text-[#565C6B] text-[14px]">
                Apps
              </button>
            </div>
            <div className=" bg-[#FBFCFF] w-20 h-10 rounded-full flex justify-center align-center">
              <button className="self-center hover:text-blue-500 text-[#565C6B] text-[14px]">
                Adsense
              </button>
            </div>
            <div className=" bg-[#FBFCFF] w-24 h-10 rounded-full flex justify-center align-center">
              <button className="self-center hover:text-blue-500 text-[#565C6B] text-[14px]">
                Ecommerce
              </button>
            </div>
            <div className=" bg-[#FBFCFF] w-20 h-10 rounded-full flex justify-center align-center">
              <button className="self-center hover:text-blue-500 hover:text-bluebutton text-[#565C6B] text-[14px]">
                Content
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;

const styles = {
  seCon: 'flex flex-col justify-center items-center'
};
