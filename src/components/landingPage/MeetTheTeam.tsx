import Frame72 from '../../../public/images/Frame72.svg';
import Frame73 from '../../../public/images/Frame73.svg';
import Frame75 from '../../../public/images/Frame75.svg';
import Frame76 from '../../../public/images/Frame76.svg';
import bgSmall from '../../../public/images/bgSmall.svg';



const MeetTheTeam = () => {
    return (
        <>
            <div className="p-[102px] bg-[#F6F6F6]">
                <div>
                    <p className='text-center text-[24px] text-[#434A5B]'>20,000 buyers new buyers join monthly</p>
                    <p className='text-center mt-[24px] text-[18px] text-[#565C6B]'>Everything you need to know about the product and billing.</p>
                </div>

                <div className='flex mt-[40px] justify-around'>
                    <img src={Frame72} alt="Frame" />
                    <img src={Frame73} alt="Frame" />
                    <img src={Frame76} alt="Frame" />
                    <img src={Frame75} alt="Frame" />
                </div>
            </div>

            <div className='mt-[104px] flex justify-center self-center'>
                <div className='bg-cover bg-center rounded-lg' style={{ backgroundImage: `url(${bgSmall})`, height: 320, width: "80%" }}>
                    <div className='flex flex-col mt-[50px] px-[317px]'>
                        <p className='text-center text-white text-[24px]'>Hello do you need assistance</p>

                        <p className='text-center text-[#FCFCFC] mt-[22px]'>We acknowledge that purchasing or selling a digital
                            business can be a challenging task. If you have any
                            inquiries or need any help, please don't hesitate to
                            get in touch with us at any time.
                        </p>

                        <div className='px-[180px] mt-[50px]'>
                            <div className='text-center text-[#3A56CD] bg-white rounded-md p-[10px] '>
                                <button className=''>Contact customer support</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>

    )
}

export default MeetTheTeam
