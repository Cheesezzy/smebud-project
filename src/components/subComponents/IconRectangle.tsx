import Rectagle50 from '/images/Rectangle50.svg';



const IconRectangle = () => {
  return (
    <div className={styles.container} style={{ backgroundImage: `url(${Rectagle50})`, width: "100%", height: 480 }}>
      <div className='pt-[70px]'>
        <div className='rounded-lg bg-[#3653DA] p-[25px] h-[150px]'>
          <h3 className='text-center text-white'>At our platform, trust and integrity are of utmost importance,
            and we take it to an unparalleled level. Our team of experts conducts
            a thorough review of the claimed financial and operational performance
            of the listings. In addition to that, we gather financial and operational
            data directly from top-notch platforms like Shopify, Stripe, Quickbooks Online,
            Admob, Google Analytics, and many others. When you browse our listings, make
            sure to look out for the verification icons that indicate the authenticity of
            the information provided.
          </h3>
        </div>
      </div>


    </div>
  )
}

export default IconRectangle

const styles = {
  container: "bg-cover bg-center px-[250px]",
}
