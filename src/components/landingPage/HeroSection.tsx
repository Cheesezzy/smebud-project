import bg from '/images/bg.svg';

const HeroSection = () => {
    return (
        <>
            <div className={styles.container} style={{ backgroundImage: `url(${bg})`, height: 600 }}>
                <div className={styles.seCon} style={{ paddingTop: 75 }}>
                    <div className={styles.span}>
                        <span style={{ fontSize: 12, color: "white", borderRadius: 16, backgroundColor: "#5778FF", padding: 5 }}>#Marketplace For All</span>

                        <h1 className={styles.bigFont} style={{ fontSize: 48, maxWidth: 876 }}>The Top Platform For Purchasing <span style={{ alignSelf: "center" }}> and Selling Good & Services.</span></h1>
                        <p className={styles.smallFont} style={{ fontSize: 20, color: "white", maxWidth: 600 }}>"Connecting buyers and sellers worldwide with seamless </p>
                        <span style={{ alignSelf: "center", fontSize: 20, color: "white", maxWidth: 400 }}>transactions and trusted experiences."</span>
                    </div>

                    <div className="mx-auto flex my-8">
                        <span className="mx-3">
                            <button className=' bg-transparent border-2 w-40 h-11 rounded-lg text-white text-lg'>Get Valuation</button>
                        </span>
                        <span className="mx-3">
                            <button className=' w-40 h-11 rounded-lg bg-white text-[#3A56CD] text-lg'>Sell Now</button>
                        </span>
                    </div>
                </div>
            </div>

            <div className={styles.postion}>
                <div style={{ backgroundColor: "white", borderRadius: 8, maxWidth: 1151, height: 120, width: "100%", paddingInline: 40, display: 'flex', alignItems: "center", justifyContent: "around", }} className="shadow-lg">

                    <div className='mr-24'>
                        <p style={{ fontSize: 20, color: "#565C6B" }}>Trending:</p>
                    </div>

                    <div className='flex justify-evenly' style={{ flex: 1 }}>
                        <div className=' bg-[#FBFCFF] w-20 h-10 rounded-full flex justify-center align-center'>
                            <span className='self-center text-[#565C6B] text-[14px]'>
                                SaaS
                            </span>
                        </div>
                        <div className=' bg-[#FBFCFF] w-20 h-10 rounded-full flex justify-center align-center'>
                            <span className='self-center  text-[#565C6B] text-[14px]'>
                                Blog
                            </span>
                        </div>
                        <div className=' bg-[#FBFCFF] w-20 h-10 rounded-full flex justify-center align-center'>
                            <span className='self-center  text-[#565C6B] text-[14px]'>
                                Shopify
                            </span>
                        </div>
                        <div className=' bg-[#FBFCFF] w-20 h-10 rounded-full flex justify-center align-center'>
                            <span className='self-center  text-[#565C6B] text-[14px]'>
                                Amazon
                            </span>
                        </div>
                        <div className=' bg-[#FBFCFF] w-20 h-10 rounded-full flex justify-center align-center'>
                            <span className='self-center  text-[#565C6B] text-[14px]'>
                                Apps
                            </span>
                        </div>
                        <div className=' bg-[#FBFCFF] w-20 h-10 rounded-full flex justify-center align-center'>
                            <span className='self-center  text-[#565C6B] text-[14px]'>
                                Adsense
                            </span>
                        </div>
                        <div className=' bg-[#FBFCFF] w-24 h-10 rounded-full flex justify-center align-center'>
                            <span className='self-center  text-[#565C6B] text-[14px]'>
                                Ecommerce
                            </span>
                        </div>
                        <div className=' bg-[#FBFCFF] w-20 h-10 rounded-full flex justify-center align-center'>
                            <span className='self-center  text-[#565C6B] text-[14px]'>
                                Content
                            </span>
                        </div>
                    </div>


                </div>
            </div>

        </>
    )
}

export default HeroSection

const styles = {
    container: "bg-cover bg-center",
    seCon: "flex flex-col justify-center items-center",
    span: " flex justify-center items-center flex-col",
    bigFont: "text-white font-bold w-full h-60 flex flex-col justify-center",
    smallFont: "w-full flex justify-center ",
    postion: "absolute inset-0 flex items-center justify-center top-80 mt-48"
};
