import Frame_seven_two from '../../assets/landingPageImages/Frame_seven_two.svg';
import Frame_seven_three from '../../assets/landingPageImages/Frame_seven_three.svg';
import Frame_seven_four from '../../assets/landingPageImages/Frame_seven_four.svg';
import Frame_seven_five from '../../assets/landingPageImages/Frame_seven_five.svg';

const MeetTheTeam = () => {
  return (
    <>
      <div className="bg-[#F6F6F6]">
        <div className="py-[104px] max-w-[1440px] mx-auto px-4 md:px-10 xl:px-24">
          <div>
            <p className="text-center text-lg max-w-[15ch] mx-auto md:max-w-full md:text-2xl font-bold text-[#434A5B]">
              20,000 buyers new buyers join monthly
            </p>
            <p className="text-center mt-6 leading-[30px] text-sm md:text-lg max-w-[28ch] mx-auto md:max-w-full text-[#565C6B]">
              Everything you need to know about the product and billing.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="relative overflow-hidden rounded-[6px]  h-[336px] md:h-[586px]">
              <img
                src={Frame_seven_two}
                alt="Frame"
                className="absolute w-full h-full inset-0 object-cover object-bottom"
              />
            </div>
            <div className="relative overflow-hidden rounded-[6px]  h-[336px] md:h-[586px]">
              <img
                src={Frame_seven_three}
                alt="Frame"
                className="absolute w-full h-full inset-0 object-cover object-bottom"
              />
            </div>
            <div className="relative overflow-hidden rounded-[6px]  h-[336px] md:h-[586px]">
              <img
                src={Frame_seven_four}
                alt="Frame"
                className="absolute w-full h-full inset-0 object-cover object-bottom"
              />
            </div>
            <div className="relative overflow-hidden rounded-[6px]  h-[336px] md:h-[586px]">
              <img
                src={Frame_seven_five}
                alt="Frame"
                className="absolute w-full h-full inset-0 object-cover object-bottom"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MeetTheTeam;
