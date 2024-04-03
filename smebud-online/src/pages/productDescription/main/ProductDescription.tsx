import Footer from "../../landingPage/Footer"
import NavBar from "../../landingPage/NavBar"
import ProductBody from "../components/ProductBody"
import AdviceComponent from "../components/productBodyComponents/AdviceComponent"
import Display from "../components/productBodyComponents/Display"
import SubNav from "../components/SubNav"


const ProductDescription = () => {
    return (
        <div>
            <NavBar />
            <SubNav />
            <ProductBody />
            <AdviceComponent />
            <Display />
            <Footer />
        </div>
    )
}

export default ProductDescription
