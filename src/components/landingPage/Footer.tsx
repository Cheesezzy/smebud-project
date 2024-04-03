import logo from '../../../public/images/logo.svg';


const Footer = () => {
    return (
        <div className='pt-[50px] px-[170px]'>
            <div className='py-[50px] flex justify-between border-b-2 border-t-2'>
                <div >
                    <img src={logo} alt="logo" /> <br />

                    <p className='text-[#7B808C] '>Have discover your luxurious new home in the heart of the city</p>
                </div>
                <div>
                    <p className='text-[#434A5B] font-bold'>Sell</p> <br />
                    <ul className='text-[#7B808C]'>
                        <li>
                            Get Free Valuation
                        </li>
                        <li>
                            Sell now
                        </li>
                        <li>
                            How to sell
                        </li>
                        <li>
                            Add Listing
                        </li>
                    </ul>
                </div>

                <div>
                    <p className='text-[#434A5B] font-bold'>Buy</p> <br />
                    <ul className='text-[#7B808C]'>
                        <li>Browse</li>
                        <li>How to buy</li>
                    </ul>
                </div>

                <div>
                    <p className='text-[#434A5B] font-bold'>Smebud</p> <br />
                    <ul className='text-[#7B808C]'>
                        <li>How we Help</li>
                        <li>Services</li>
                        <li>Pricing</li>
                        <li>Blog</li>
                        <li>Deal</li>
                        <li>Careers</li>
                    </ul>
                </div>

                <div>
                    <p className='text-[#434A5B] font-bold'>Help center</p> <br />
                    <ul className='text-[#7B808C]'>
                        <li>FAQS</li>
                        <li>Contact customer support</li>
                    </ul>
                </div>

                <div>
                    <p className='text-[#434A5B] font-bold'>Category</p> <br />
                    <ul className='text-[#7B808C]'>
                        <li>Business</li>
                        <li>Website</li>
                        <li>Apps</li>
                        <li>Software</li>
                        <li>Domains</li>
                        <li>Off market</li>
                    </ul>
                </div>
            </div>

            <div className='flex justify-between py-[30px]'>
                <p className='text-[#7B808C]'>©2023 -SMEBUD</p>
                <p className='text-[#7B808C]'>Privacy Policy - Terms & Conditions</p>
            </div>
        </div>
    )
}

export default Footer
