import down from '../../../../assets/images/imageSvg/down.svg'

const AdviceComponent = () => {
    return (
        <div className='bg-[#FEFCFC]'>
            <div className="flex justify-around p-[140px]">
                <div className='px-20'>
                    <p className='text-[#434A5B] text-[24px] font-semibold'>Buying Advice</p>
                    <p className='text-[#565C6B] text-[18px] pt-4 w-[530px]'>Smebud platform is free for buyers. Here are our tips for first-time buyers:</p>

                    <div className='pt-[52px]'>
                        <span className='flex justify-between'>
                            <p className='text-[#434A5B] text-[18px] w-[90%]'>Before making an offer</p>
                            <img src={down} alt="arrowDown" />
                        </span>

                        <span className='flex justify-between pt-[52px]'>
                            <p className='text-[#434A5B] text-[18px] w-[90%]'>After Making an offer</p>
                            <img src={down} alt="arrowDown" />
                        </span>
                    </div>
                </div>

                <div className='px-20'>
                    <p className='text-[#434A5B] text-[24px] font-semibold'>Services</p>
                    <p className='text-[#565C6B] text-[18px] pt-4 '>We provide a suite of services to help you</p>

                    <div className='pt-[52px]'>
                        <span className='flex justify-between'>
                            <p className='text-[#434A5B] text-[18px] w-[90%]'>Legal</p>
                            <img src={down} alt="arrowDown" />
                        </span>

                        <span className='flex justify-between py-[52px]'>
                            <p className='text-[#434A5B] text-[18px] w-[90%]'>Due Dilligence</p>
                            <img src={down} alt="arrowDown" />
                        </span>

                        <span className='flex justify-between'>
                            <p className='text-[#434A5B] text-[18px] w-[90%]'>Finder</p>
                            <img src={down} alt="arrowDown" />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdviceComponent
