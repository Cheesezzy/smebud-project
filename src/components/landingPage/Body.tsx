import Rectangle from "../subComponents/Rectangle"

const Body = () => {
    return (
        <div className="p-32">
            <div >
                <h3 className="font-extrabold text-[30px] text-[#434A5B]">Browse top online businesses </h3> <br />

                <span className="text-[#565C6B] text-[18px]">
                    These are all revenue generating websites, ecommerce stores and <br />
                    other online businesses
                </span>

            </div>

            <div className='flex mt-5 justify-between'>
                <div className="flex">
                    <div className=' bg-[#F6F8FF] m-3 w-24 p-5 h-10 rounded-full flex justify-center align-center'>
                        <span className='self-center  text-[#4B6EFF] text-[14px]' >
                            Ecommerce
                        </span>
                    </div>
                    <div className=' p-5 w-20 h-10 m-3 rounded-full flex justify-center align-center border-2' >
                        <span className='self-center  text-[#565C6B] text-[14px]'>
                            Apps
                        </span>
                    </div>
                    <div className='border-2 w-38 p-5 m-3 h-10 rounded-full flex justify-center align-center'>
                        <span className='self-center  text-[#565C6B] text-[14px]'>
                            Content/Advertising
                        </span>
                    </div>
                    <div className=' border-2 p-5 w-20 m-3 h-10 rounded-full flex justify-center align-center'>
                        <span className='self-center  text-[#565C6B] text-[14px]'>
                            SaaS
                        </span>
                    </div>
                </div>

                <div className=' border-2 p-5 w-20 m-3 h-10 flex justify-center align-center'>
                    <span className='self-center  text-[#565C6B] text-[14px]'>
                        Filter
                    </span>
                </div>
            </div>

            <div className="flex border-2 justify-between p-5 self-center">
                <p className="text-[#7B808C] self-center" >e.g Fitness Blog, Shopify stores</p>

                <button className="rounded-sm bg-[#3A56CD] h-10 w-28 text-white">Search</button>
            </div>

            <div className="flex justify-between">
                <Rectangle />
                <Rectangle />
                <Rectangle />
            </div>

            <div className="flex justify-between">
                <Rectangle />
                <Rectangle />
                <Rectangle />
            </div>

            <div className="mt-[24px]">
                <a href="#" className="text-[#3A56CD] underline"> See More</a>
            </div>
        </div>
    )
}

export default Body
