import logo from '../../assets/landingPageImages/logo.svg';
import bigsmall from '../../assets/landingPageImages/bgSmall.svg';

const Footer = () => {
  return (
    <div className="mt-[104px] max-w-[1440px] mx-auto px-4 md:px-10 xl:px-24">
      <div
        className="bg-cover bg-center rounded-lg pt-10 pb-[75px] px-6"
        style={{
          backgroundImage: `url(${bigsmall})`
        }}
      >
        <div className="flex flex-col items-center">
          <p className="text-center text-white text-lg md:text-2xl font-bold">
            Hello do you need assistance
          </p>

          <p className="text-center text-[#FCFCFC] mt-6 max-w-[60ch] mx-auto mb-10 leading-[24px] text-sm md:text-base font-normal">
            We acknowledge that purchasing or selling a digital business can be
            a challenging task. If you have any inquiries or need any help,
            please don't hesitate to get in touch with us at any time.
          </p>
          <button className="text-center text-[#3A56CD] bg-white w-fit mx-auto font-bold px-5 py-[10px] rounded-[4px]">
            Contact customer support
          </button>
        </div>
      </div>

      <div className="grid gap-9 md:flex md:justify-between border-y-[0.5px] border-[#ECEDEF] mt-10 pt-10 pb-14">
        <div>
          <img src={logo} alt="logo" /> <br />
          <p className="text-[#7B808C] w-[214px] ">
            Have discover your luxurious new home in the heart of the city
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-[#434A5B] font-bold">Sell</p>
          <ul className="text-[#7B808C] flex flex-col gap-7">
            <li className="text-sm md:text-base">Get Free Valuation</li>
            <li className="text-sm md:text-base">Sell now</li>
            <li className="text-sm md:text-base">How to sell</li>
            <li className="text-sm md:text-base">Add Listing</li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-[#434A5B] font-bold">Buy</p>
          <ul className="text-[#7B808C] flex flex-col gap-7">
            <li className="text-sm md:text-base">Browse</li>
            <li className="text-sm md:text-base">How to buy</li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-[#434A5B] font-bold">Smebud</p>
          <ul className="text-[#7B808C] flex flex-col gap-7">
            <li className="text-sm md:text-base">How we Help</li>
            <li className="text-sm md:text-base">Services</li>
            <li className="text-sm md:text-base">Pricing</li>
            <li className="text-sm md:text-base">Blog</li>
            <li className="text-sm md:text-base">Deal</li>
            <li className="text-sm md:text-base">Careers</li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-[#434A5B] font-bold">Help center</p>
          <ul className="text-[#7B808C] flex flex-col gap-7">
            <li className="text-sm md:text-base">FAQS</li>
            <li className="text-sm md:text-base">Contact customer support</li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-[#434A5B] font-bold">Category</p>
          <ul className="text-[#7B808C] flex flex-col gap-7">
            <li className="text-sm md:text-base">Business</li>
            <li className="text-sm md:text-base">Website</li>
            <li className="text-sm md:text-base">Apps</li>
            <li className="text-sm md:text-base">Software</li>
            <li className="text-sm md:text-base">Domains</li>
            <li className="text-sm md:text-base">Off market</li>
          </ul>
        </div>
      </div>

      <div className="flex justify-between pt-10 pb-[30px]">
        <p className="text-[#7B808C] text-sm md:text-base">©2023 -SMEBUD</p>
        <p className="text-[#7B808C] text-sm md:text-base">Privacy Policy - Terms & Conditions</p>
      </div>
    </div>
  );
};

export default Footer;
