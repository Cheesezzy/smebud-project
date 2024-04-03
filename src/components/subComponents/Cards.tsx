import CardsComponents from "./CardsComponents"

const Cards = () => {
    return (
        <div className="px-[96px] pt-[110px]">
            <div className="px-[450px] p-2">
                <p className="text-center text-[#3A56CD] rounded-full bg-[#F4F6FF] w-auto">Need Help Listing or selling multiple businesses? Our Team can help</p>
            </div>

            <div className="mt-[45px]">
                <h3 className="text-center font-bold text-[24px] text-[#434A5B]">How the Valuation Tool Works</h3>
                <p className="text-center mt-[24px] text-[#565C6B] px-[350px]">
                    When you provide Smebud with your inputs, we utilise them to
                    analyse numerous factors such as the type of business, its model,
                    age, category, and more. Furthermore, we examine the level of
                    interest that potential buyers have in websites similar to
                    yours by comparing it with thousands of sites that have been sold on Smebud.
                </p>
            </div>
            <CardsComponents />
        </div>
    )
}

export default Cards
