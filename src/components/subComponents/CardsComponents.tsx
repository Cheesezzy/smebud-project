import Card1 from '/images/Card1.svg';
import Card2 from '/images/Card2.svg';
import Card3 from '/images/Card3.svg';


const CardsComponents = () => {
    return (
        <div className='flex justify-between mt-[80px]'>
            <div className='rounded-lg bg-[#F6F6F7] p-[26px] width-[90%] m-[20px]'>
                <img src={Card1} alt="Card1" width="100%" height="192px" />
                <p className='mt-[70px] text-[20px] font-bold text-[#434A5B] '>Precise and immediate Valuation</p>
                <p className='mt-[16px] text-[#565C6B]'>
                    When you provide Smebud with your inputs,
                    we utilise them to analyse numerous factors
                    such as the type of business, its model, age,
                    category, and more. Furthermore, we examine
                </p>
            </div>

            <div className='rounded-lg bg-[#F6F6F7] p-[26px] width-[90%] m-[20px]'>
                <img src={Card2} alt="Card2" width="100%" height="192px" />
                <p className='mt-[70px] text-[20px] font-bold text-[#434A5B] '>Precise and immediate Valuation</p>
                <p className='mt-[16px] text-[#565C6B]'>
                    When you provide Smebud with your inputs, we utilise
                    them to analyse numerous factors such as the type of
                    business, its model, age, category, and more. Furthermore,
                    we examine
                </p>
            </div>

            <div className='rounded-lg bg-[#F6F6F7] p-[26px] width-[90%] m-[20px]'>
                <img src={Card3} alt="Card3" width="100%" height="192px" />
                <p className='text-[20px] font-bold text-[#434A5B] '>Precise and immediate Valuation</p>
                <p className='mt-[16px] text-[#565C6B]'>
                    When you provide Smebud with your inputs, we utilise
                    them to analyse numerous factors such as the type of
                    business, its model, age, category, and more. Furthermore,
                    we examine
                </p>
            </div>
        </div>
    )
}

export default CardsComponents
