import rec from '../../../../assets/landingPageImages/Rectangle.svg'

const Display = () => {
    return (
        <div className='bg-[#FEFCFC] p-[150px]'>
            <p className='text-[#434A5B] text-[24px] font-semibold'>People who are similar to you also engaged with</p>

            <div className='flex justify-between'>

                <div className='mt-[56px] p-[24px] bg-[#FFFFFF] w-fit'>
                    <img src={rec} alt="rectangle" />
                    <p className='py-[24px] text-[#4B6EFF] text-[25px]'>E-commerce- USD 12,000</p>
                    <p className='w-[350px] text-[#565C6B] text-[16px]'>Lorem ipsum dolor sit amet consectetur. Nulla convallis eget praesent tortor id quisque purus. </p>
                </div>

                <div className='mt-[56px] p-[24px] bg-[#FFFFFF] w-fit'>
                    <img src={rec} alt="rectangle" />
                    <p className='py-[24px] text-[#4B6EFF] text-[25px]'>E-commerce- USD 12,000</p>
                    <p className='w-[350px] text-[#565C6B] text-[16px]'>Lorem ipsum dolor sit amet consectetur. Nulla convallis eget praesent tortor id quisque purus. </p>
                </div>

                <div className='mt-[56px] p-[24px] bg-[#FFFFFF] w-fit'>
                    <img src={rec} alt="rectangle" />
                    <p className='py-[24px] text-[#4B6EFF] text-[25px]'>E-commerce- USD 12,000</p>
                    <p className='w-[350px] text-[#565C6B] text-[16px]'>Lorem ipsum dolor sit amet consectetur. Nulla convallis eget praesent tortor id quisque purus. </p>
                </div>
            </div>
        </div>
    )
}

export default Display
