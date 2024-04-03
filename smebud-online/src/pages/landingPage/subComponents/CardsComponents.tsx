import card1 from '../../../assets/landingPageImages/card1.svg';
import card2 from '../../../assets/landingPageImages/card2.svg';
import card3 from '../../../assets/landingPageImages/card3.svg';

const items = [
  {
    label: ' Precise and immediate Valuation',
    description:
      'When you provide Smebud with your inputs, we utilise them to analyse numerous factors such as the type of business, its model, age, category, and more. Furthermore, we examine',
    img: card1
  },
  {
    label: ' Precise and immediate Valuation',
    description:
      'When you provide Smebud with your inputs, we utilise them to analyse numerous factors such as the type of business, its model, age, category, and more. Furthermore, we examine',
    img: card2
  },
  {
    label: ' Precise and immediate Valuation',
    description:
      'When you provide Smebud with your inputs, we utilise them to analyse numerous factors such as the type of business, its model, age, category, and more. Furthermore, we examine',
    img: card3
  }
];

const CardsComponents = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 py-10">
      {items.map((item, index) => (
        <div
          key={index}
          className="rounded-2xl bg-[#F6F6F7] p-6"
          style={{ boxShadow: '-20px 40px 80px #F1F1F1' }}
        >
          <div
            className="relative rounded-lg overflow-hidden w-full h-[192px] bg-red-500"
            style={{
              background: `url(${item.img})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          ></div>
          <p className="pt-6 pb-4 text-base md:text-xl font-bold text-[#434A5B] ">
            {item.label}
          </p>
          <p className="text-[#565C6B] leading-[30px] text-sm md:text-lg">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CardsComponents;
