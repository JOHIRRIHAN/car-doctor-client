import icon1 from '../../assets/icons/check.svg'
import icon2 from '../../assets/icons/deliveryt.svg'
import icon3 from '../../assets/icons/Group 38729.svg'
import icon4 from '../../assets/icons/group.svg'
import icon5 from '../../assets/icons/person.svg'
import icon6 from '../../assets/icons/Wrench.svg'

const Feature = () => {

  return (
    <div className='my-32'>
      <div className="text-center mb-10">
        <h3 className="text-lg text-orange-600 font-bold">Core Features</h3>
        <h3 className="text-5xl font-bold my-5">Why Choose Us</h3>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which do not look even slightly
          believable.
        </p>
      </div>

      <div className='grid md:grid-cols-3 md:mx-10 lg:grid-cols-6 gap-10'>
        <div className='border-2 h-44 pt-7 rounded-xl hover:bg-[#FF3811] text-zinc-600 hover:text-white'>
            <img className='ml-14 hover:text-white' src={icon1} alt="" />
            <h3 className='text-2xl font-semibold  text-center'>100% Guranty</h3>
        </div>
        <div className='border-2 h-44 pt-7 rounded-xl hover:bg-[#FF3811] text-zinc-600 hover:text-white'>
            <img className='ml-14 hover:text-white' src={icon2} alt="" />
            <h3 className='text-2xl font-semibold  text-center'>Timely Delivery</h3>
        </div>
        <div className='border-2 h-44 pt-7 rounded-xl hover:bg-[#FF3811] text-zinc-600 hover:text-white'>
            <img className='ml-14 bg-black rounded-full' src={icon3} alt="" />
            <h3 className='text-2xl font-semibold  text-center'>Timely Delivery</h3>
        </div>
        <div className='border-2 h-44 pt-7 rounded-xl hover:bg-[#FF3811] text-zinc-600 hover:text-white'>
            <img className='ml-14 hover:text-white' src={icon4} alt="" />
            <h3 className='text-2xl font-semibold  text-center'>Expert Team</h3>
        </div>
        <div className='border-2 h-44 pt-7 rounded-xl hover:bg-[#FF3811] text-zinc-600 hover:text-white'>
            <img className='ml-14 hover:text-white' src={icon5} alt="" />
            <h3 className='text-2xl font-semibold  text-center'>24/7 Support</h3>
        </div>
        <div className='border-2 h-44 pt-7 rounded-xl hover:bg-[#FF3811] text-zinc-600 hover:text-white'>
            <img className='ml-14 hover:text-white' src={icon6} alt="" />
            <h3 className='text-2xl font-semibold  text-center'>Best Equipment</h3>
        </div>
      </div>
    </div>
  );
};

export default Feature;
