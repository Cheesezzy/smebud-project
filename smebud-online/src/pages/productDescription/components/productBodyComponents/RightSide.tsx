import shoppingCart from '../../../../assets/images/imageSvg/shoppingCart.svg'
import box from '../../../../assets/images/imageSvg/box.svg'
import Circle from '../../../../assets/images/imageSvg/Circle.svg'
import tickCircle from '../../../../assets/images/imageSvg/tickCircle.svg'

const RightSide = () => {
    return (
        <div className="w-[48%]">
            <div className='bg-[#F1F1F1]'>
                <p className='text-white text-[18px] bg-[#3A56CD] w-full h-[76px] rounded-t-lg p-[24px] '>
                    About the Business
                </p>
                <div className='p-5'>
                    <div className='p-5 border-b-2'>
                        <p className='text-[#A1A5AD] text-[16px] pb-3'> Site Description</p>
                        <a href="#" className='text-[#4B6EFF] text-[16px]'>https://www.ewelyni.com/</a>
                        <p className='pt-5 text-[#696E7C] '>
                            Ewelyni is a brand that sells Bags and Sunglasses at a
                            competitive price majority of products don't exceed $49
                            which makes the brand the best competitor in the market
                            with its prices <br /> <br />

                            After being launched on December 1st it has seen over
                            450,000 visitors, received a lot of mentions on Instagram
                            has been featured all over the world online Through Small
                            medium, and Big Influencers.
                        </p>

                        <div className='flex justify-center pt-[24px]'>
                            <a href="#" className='text-[#4B6EFF] text-[16px]'>Read All</a>
                        </div>

                    </div>

                    <div className=' p-10 '>
                        <p className='text-[#434A5B] text-[16px]'>Monetisation Method</p>

                        <div className='flex mt-5 '>
                            <span className='bg-[#3A56CD] w-[32px] h-[32px] rounded-full flex justify-center mr-5'>
                                <img src={shoppingCart} alt="shoppingCart" width="16px" height="11px" />
                            </span>
                            <p className='text-[16px] text-[#696E7C]'>Self fulfilment of inventory</p>
                        </div>

                        <div className='flex mt-5'>
                            <span className='bg-[#3A56CD] w-[32px] h-[32px] rounded-full flex justify-center mr-5'>
                                <img src={box} alt="box" width="16px" height="11px" />
                            </span>
                            <p className='text-[16px] text-[#696E7C]'>Drop-shipping</p>
                        </div>

                        <div className=" mt-8">
                            <div className="border-2 border-[#3A56CD] flex justify-center align-center rounded-lg p-2 w-[150px] ">
                                <p className="text-[#3A56CD]">Get NDA </p>
                            </div>
                        </div>
                    </div>


                    <div className='p-5'>
                        <div className='bg-[#F8F9FF] w-[456px] h-[76px] p-5 py-6 rounded-md'>
                            <p className='text-[#AAAAAA] text-[18px]'>About the Seller</p>
                        </div>

                        <div className='flex mt-10'>
                            <img src={Circle} alt="circle" />

                            <div className='ml-5 '>
                                <p className='text-[#696E7C] my-2'>Hamza Bobson</p>
                                <span className='text-[#696E7C] '>Marrakech, Morocco</span>
                            </div>
                        </div>


                        <div className="mx-auto flex mt-5">
                            <span className="mx-3">
                                <button className=" bg-[#3A56CD] border-2 w-40 h-11 rounded-lg text-white text-lg">
                                    Contact Seller
                                </button>
                            </span>
                            <span className="mx-3">
                                <button className=" w-40 h-11 rounded-lg border-[#3A56CD] bg-transparent border-2 text-[#3A56CD] text-lg">
                                    Make Offer
                                </button>
                            </span>
                        </div>

                        <div className='mt-[40px]'>
                            <p className='text-[#696E7C] text-[16px]'>After being launched on December 1st it has seen over 450,000 visitors,
                                received a lot of mentions on Instagram </p>
                            <a href="#" className='text-[#4B6EFF]'>Read More.</a>
                        </div>

                        <div className='mt-[32px] '>
                            <p className='text-[16px] text-[#434A5B] font-semibold'>Verification Process</p>

                            <div className='flex mt-[29px]'>
                                <img src={tickCircle} alt="tickCircle" />
                                <p className='ml-3 text-[#696E7C]'>Email address</p>
                            </div>

                            <div className='flex mt-[29px]'>
                                <img src={tickCircle} alt="tickCircle" />
                                <p className='ml-3 text-[#696E7C]'>Goverment ID</p>
                            </div>

                            <div className='flex mt-[29px]'>
                                <img src={tickCircle} alt="tickCircle" />
                                <p className='ml-3 text-[#696E7C]'>Phone number</p>
                            </div>
                        </div>

                        <div className='mt-[32px]'>
                            <p className='text-[16px] text-[#434A5B] font-semibold'>Payment</p>

                            <div className='flex mt-[29px]'>
                                <img src={tickCircle} alt="tickCircle" />
                                <p className='ml-3 text-[#696E7C]'>Escrow</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default RightSide
