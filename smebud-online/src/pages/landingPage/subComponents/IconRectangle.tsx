import Rectagle50 from '../../../assets/landingPageImages/Rectangle50.svg';

const IconRectangle = () => {
  return (
    <div
      className="bg-cover bg-center md:h-[400px] mt-[104px] px-4 md:px-10 xl:px-24"
      style={{
        backgroundImage: `url(${Rectagle50})`,
        width: '100%',
        height: 640
      }}
    >
      <div className="pt-[50px]">
        <p className="text-center text-white max-w-[83ch] mx-auto rounded-lg bg-[#3653DA] px-4 py-6 leading-[30px] text-sm md:text-lg">
          At our platform, trust and integrity are of utmost importance, and we
          take it to an unparalleled level. Our team of experts conducts a
          thorough review of the claimed financial and operational performance
          of the listings. In addition to that, we gather financial and
          operational data directly from top-notch platforms like Shopify,
          Stripe, Quickbooks Online, Admob, Google Analytics, and many others.
          When you browse our listings, make sure to look out for the
          verification icons that indicate the authenticity of the information
          provided.
        </p>
      </div>
    </div>
  );
};

export default IconRectangle;
