
import Image from 'next/image';
import logo from "./Images/logo.png"
function Header() {
  return (
      <div className=" container flex flex-col sm:flex-row md:gap-6 gap-3  sm:justify-evenly justify-center py-10 items-center ">
          
          <div className="w-3/5 lg:w-2/5 flex justify-center">
              <Image className=" w-4/4 lg:w-3/5 lg:w-full" src={ logo} />  
          </div>

          <div className=" sm:h-80 text-center flex flex-col justify-center  lg:text-2xl text-xl ">
          <p className=" font-bold py-5 text-4xl">Cobra Plast</p>
          <p>Manufacturing of plastic containers</p>
          <p>Siblin - Main Road</p>
          <p>+961 71 113 333</p>
        </div>
      
      <div className="w-full sm:w-2/5 h-60 flex justify-center sm:p-0 pt-4 ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13289.82404742071!2d35.422623153489894!3d33.61941636836581!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ee5326f17ac3f%3A0x3bba0e7ea361bbeb!2z2KrYtdmG2YrYuSDYp9mE2LnYqNmI2KfYqiDYp9mE2KjZhNin2LPYqtmK2YPZitipIC1DT0JSQVBMQVNU!5e0!3m2!1sen!2sus!4v1714199861607!5m2!1sen!2sus"
             
              style={{ border: '0' }}
              allowFullScreen=""
              loading="lazy"
              aria-hidden="false"
                  tabIndex="0"
                  className='w-4/6 md:w-4/5'
        ></iframe>
          </div>
      </div>
  )
}

export default Header