import { useState } from 'react';
import iconMinus from '../../assets/landingPageImages/IconMinus.svg';
import iconPlus from '../../assets/landingPageImages/IconPlus.svg';
import { questions } from './data';

const Faq = () => {
  const [showInfo, setShowInfo] = useState(Array(questions.length).fill(false));

  const handleClick = (index: number) => {
    setShowInfo((prevState) =>
      prevState.map((value, i) => (i == index ? !value : value))
    );
  };

  return (
    <div className="max-w-[1440px] mx-auto my-[104px] px-4 md:px-10 xl:px-24">
      <div className="text-center mb-10">
        <p className="font-bold text-lg md:text-2xl text-[#434A5B] text-center">
          Frequently Asked Question
        </p>
        <p className="text-[#565C6B] max-w-[30ch] mx-auto leading-[30px] text-sm md:text-lg md:max-w-full pt-6">
          Everything you need to know about the product and billing.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {questions.map((question, index) => (
          <div key={question.id} className="">
            <div className="border-b-2 p-5">
              <div className="flex justify-between ">
                <span className="text-[#434A5B] font-bold">
                  {question.title}
                </span>
                <div onClick={() => handleClick(index)}>
                  <img
                    src={showInfo[index] ? iconMinus : iconPlus}
                    alt="icon"
                  />
                </div>
              </div>
              {showInfo[index] && (
                <p className="text-[#8E929D] mt-[8px]">{question.info}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
