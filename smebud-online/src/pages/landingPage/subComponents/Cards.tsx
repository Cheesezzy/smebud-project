import CardsComponents from './CardsComponents';

const Cards = () => {
  return (
    <div className="my-[104px] max-w-[1440px] mx-auto px-4 md:px-10 xl:px-24">
      <p className="text-center text-[10px] md:text-lg text-[#3A56CD] rounded-full w-fit font-bold mx-auto bg-[#F4F6FF] p-[10px]">
        Need Help Listing or selling multiple businesses? Our Team can help
      </p>

      <div className="mt-10">
        <h3 className="text-center font-bold text-lg md:text-2xl text-[#434A5B]">
          How the Valuation Tool Works
        </h3>

        <p className="text-center text-sm leading-[30px] mt-6 text-[#565C6B] md:text-lg max-w-[76ch] mx-auto">
          When you provide Smebud with your inputs, we utilise them to analyse
          numerous factors such as the type of business, its model, age,
          category, and more. Furthermore, we examine the level of interest that
          potential buyers have in websites similar to yours by comparing it
          with thousands of sites that have been sold on Smebud.
        </p>
      </div>
      <CardsComponents />
    </div>
  );
};

export default Cards;
