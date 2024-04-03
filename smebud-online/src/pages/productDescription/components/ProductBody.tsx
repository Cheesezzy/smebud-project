import LeftSide from "./productBodyComponents/LeftSide"
import RightSide from "./productBodyComponents/RightSide"

const ProductBody = () => {
    return (
        <div>
            <div className="bg-[#ededed] flex justify-between p-[50px]">
                <LeftSide />
                <RightSide />
            </div>
        </div>
    )
}

export default ProductBody
