import Amazon from "../../../../../src/assets/landingPageImages/Amazon.svg";
import Shop from '../../../../../src/assets/landingPageImages/Shop.svg';
import Rec from "../../../../../src/assets/landingPageImages/Rectangle.svg";
import Chart from '../../../../assets/images/imageSvg/Charts.svg'
import Check from '../../../../assets/images/imageSvg/Check.svg'


const LeftSide = () => {
    return (
        <div className="w-[48%]">
            <p className="text-[#7B808C] text-[14px]">E-commerce Store</p>

            <div className="flex">
                <p className="text-[36px] mr-3 ">Eweleyini</p>
                <div className="mt-[15px]">
                    <div className="flex w-[148px] justify-center aling-center h-[29px] rounded-lg p-1 bg-[#F2F5FF]">
                        <img src={Amazon} alt="Amazon" width="13px" height="13px" />
                        <img src={Shop} alt="Shop" width="13px" height="13px" />
                        <p className="text-[#3A56CD] self-center text-[14px]">
                            verified listing
                        </p>
                    </div>
                </div>

            </div>

            <p className="text-[#4B6EFF]">Sponsored</p>

            <div className="flex">
                <div className=" border-2 border-[#7B808C] m-3 w-24 p-4 h-6 rounded-full flex justify-center align-center">
                    <span className="self-center  text-[#565C6B] text-[14px]">
                        Ecommerce
                    </span>
                </div>
                <div className=" border-2 border-[#7B808C] p-4 w-24 h-6 m-3 rounded-full flex justify-center align-center">
                    <span className="self-center  text-[#565C6B] text-[14px]">
                        Business
                    </span>
                </div>
            </div>

            <div className="flex justify-between border-b-2 py-8">
                <div>
                    <p className="text-[#A1A5AD]">Site Age</p>
                    <span className="text-[#696E7C]">4 Yrs</span>
                </div>

                <div>
                    <p className="text-[#A1A5AD]">Monthly Profit</p>
                    <span className="text-[#696E7C]">USD 1,140/mo</span>
                </div>

                <div>
                    <p className="text-[#A1A5AD]">Profit Margin</p>
                    <span className="text-[#696E7C]">46%</span>
                </div>

                <div>
                    <p className="text-[#A1A5AD]">Profit Multiple</p>
                    <span className="text-[#696E7C]">1.7x</span>
                </div>

                <div>
                    <p className="text-[#A1A5AD]">Revenue Multiple</p>
                    <span className="text-[#696E7C]">0.8x</span>
                </div>
            </div>

            <p className="text-[#565C6B] pt-8">Since 2018 With Over $350,000+ In Sales "95% Organic
                Traffic" & More than +15,000 Customers! Free Marketing
                Strategy +4,900 Super Affiliates +22,000 Emails
            </p>

            <div className="pt-8">
                <img src={Rec} alt="rectangle" width="100%" />
            </div>


            <div className="w-full border-2 mt-10 p-4">
                <div className="mt-8 flex justify-center">
                    <div className=" flex justify-between align-center bg-[#F4F6FF] w-[280px] rounded-lg  p-4 py-2 h-[55px]  ">


                        <button className="hover:bg-[#4B6EFF] h-[40px] rounded-lg w-fit py-2 p-3 flex justify-center hover:text-white text-[#434A5B]" >Market Insights</button>

                        <button className="hover:bg-[#4B6EFF] h-[40px] rounded-lg w-fit py-2 p-3 flex justify-center hover:text-white text-[#434A5B]" >Perfomance</button>
                    </div>
                </div>

                <div>
                    <img src={Chart} alt="" />

                    <div className=" mt-8 flex justify-center">
                        <div className="border-2 border-[#7B808C] flex justify-center align-center rounded-lg p-2 w-[150px] ">
                            <p className="text-[#AAAAAA]">Get Alerts</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="w-full border-2 mt-10 p-4">

                <div className="mt-10 ">
                    <div className="flex justify-between">
                        <div className="flex justify-between">
                            <p className="text-[#434A5B] font-semibold" >Shopify Verified</p>
                            <img src={Check} alt="Check" width="16px" className="pb-4 ml-2" />
                        </div>
                        <img src={Shop} alt="shop" width="34px" height="34px" />
                    </div>

                    <p className="text-[20px] text-[#434A5B] my-[16px]">Eweleyini</p>
                    <p className=" text-[#434A5B]">Store activity from March 2022-March 2023 </p>

                    <div className="mt-6">
                        <div className="flex justify-start ">
                            <div className="border-2 border-[#b6b7ba] m-5 p-3 w-[150px] rounded-lg">
                                <p className="text-[#A1A5AD]">Customers</p>
                                <p className="text-[#696E7C] text-[16px]">12,000</p>
                            </div>

                            <div className="border-2 border-[#b6b7ba] m-5 p-3 w-[150px] rounded-lg">
                                <p className="text-[#A1A5AD]">Sales</p>
                                <p className="text-[#696E7C] text-[16px]">USD $22,897</p>
                            </div>

                            <div className="border-2 border-[#b6b7ba] m-5 p-3 w-[150px] rounded-lg">
                                <p className="text-[#A1A5AD]">Orders</p>
                                <p className="text-[#696E7C] text-[16px]">800</p>
                            </div>
                        </div>
                    </div>



                    <div className="flex">

                        <div className="border-r-2 pr-6 my-6 border-[#b6b7ba]">
                            <p className="text-[#A1A5AD] text-[16px]">Average order value</p>
                            <span className="text-[#696E7C] font-semibold">$42.</span>
                        </div>

                        <div className="border-r-2 px-6 my-6 border-[#b6b7ba]">
                            <p className="text-[#A1A5AD] text-[16px]">Average items per order</p>
                            <span className="text-[#696E7C] font-semibold">1.0</span>
                        </div>

                        <div className="pl-6 my-6 border-[#b6b7ba]">
                            <p className="text-[#A1A5AD] text-[16px]">Fulfilment rate</p>
                            <span className="text-[#696E7C] font-semibold">87.7</span>
                        </div>
                    </div>

                    <div className="flex">
                        <div className="border-r-2 pr-6 my-6 border-[#b6b7ba]">
                            <p className="text-[#A1A5AD] text-[16px]">Refund  Rate</p>
                            <span className="text-[#696E7C] font-semibold">0.0%</span>
                        </div>
                        <div className="pl-6 my-6 border-[#b6b7ba]">
                            <p className="text-[#A1A5AD] text-[16px]">Subscribed to email list</p>
                            <span className="text-[#696E7C] font-semibold">2,388</span>
                        </div>
                    </div>

                    <p className="text-[#434A5B]">Data is pulled directly from shopify.Seller is unable to edit</p>
                </div>

            </div>
        </div>
    )
}

export default LeftSide
