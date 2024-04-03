import logo from '../../../public/images/logo.svg';


const NavBar = () => {
    return (
        <div className={styles.container}>
            <nav className={styles.nav}>
                <img src={logo} alt="logo" style={{ color: "white" }} />

                <div className={styles.aDiv}>
                    <a className={styles.aText} href="#">Browse</a>
                    <a className={styles.aText} href="#">About Us</a>
                    <a className={styles.aText} href="#">Services</a>
                    <a className={styles.aText} href="#">Pricing</a>
                    <a className={styles.aText} href="#">Blog</a>
                </div>

                <div className="mx-auto flex">
                    <span className="mx-3">
                        <button className=' bg-transparent border-2 w-40 h-11 rounded-lg text-white text-lg'>Log In</button>
                    </span>
                    <span className="mx-3">
                        <button className=' w-40 h-11 rounded-lg bg-white text-[#3A56CD] text-lg'>Sign Up</button>
                    </span>
                </div>

            </nav>




        </div>
    )
}

export default NavBar

const styles = {
    container: "px-24 bg-blue-100 h-20",
    aText: "text-white text-lg",
    nav: "flex justify-between items-center h-full",
    aDiv: "w-full flex justify-evenly px-20"
};


