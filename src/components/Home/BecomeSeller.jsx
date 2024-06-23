import { Link } from 'react-router-dom'
import laptop from '../../assets/laptop.png'
import { MdOutlinePersonAddAlt } from "react-icons/md";

const BecomeSeller = () => {
  return (
    <div>
        <section className="max-w-6xl mx-auto px-4 py-20">
            <div className='w-full flex flex-col gap-10 md:flex-row md:justify-between'>
                <div className='flex flex-col gap-10 md:w-1/2 '>
                    <div>
                        <Link to={'account'} className='capitalize py-2 px-6 rounded-3xl bg-gray-900 text-white font-semibold flex items-center gap-3 w-fit'>Become a new seller <MdOutlinePersonAddAlt className='text-xl' /></Link>
                    </div>
                    <img src={laptop} alt="" />
                </div>
                <div className="flex flex-col gap-10 md:w-1/2 relative">
                    <div className=' text-left md:text-right'>
                        <h1 className="text-3xl font-semibold uppercase">Lightroom Presets:</h1>
                        <h3 className="text-3xl uppercase">1-Click Editing Magic</h3>
                    </div>
                    <p className=" text-gray-500 text-left md:text-right">
                        Discover why thousands of influencers, professional
                        photographers, bloggers, social media managers, and everyday
                        creatives choose Flourish Presets.
                    </p>
                    <div className=' text-gray-300 grid grid-cols-2 gap-6 sm:grid-cols-3 md:text-right md:absolute md:top-60'>
                        <div className='flex flex-col gap-3 hover:text-black transition-all'>
                            <h3 className=' text-3xl font-semibold'>$ 3,499</h3>
                            <p className=' capitalize text-sm'>money earned</p>
                        </div>
                        <div className='flex flex-col gap-3 hover:text-black transition-all'>
                            <h3 className=' text-3xl font-semibold'>354</h3>
                            <p className=' capitalize text-sm'>total sold products</p>
                        </div>
                        <div className='flex flex-col gap-3 hover:text-black transition-all'>
                            <h3 className=' text-3xl font-semibold'>$ 39,44</h3>
                            <p className=' capitalize text-sm'>average price</p>
                        </div>
                        <div className='flex flex-col gap-3 hover:text-black transition-all'>
                            <h3 className=' text-3xl font-semibold'>4,95</h3>
                            <p className=' capitalize text-sm'>seller rank</p>
                        </div>
                        <div className='flex flex-col gap-3 hover:text-black transition-all'>
                            <h3 className=' text-3xl font-semibold'>12</h3>
                            <p className=' capitalize text-sm'>number of active products</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default BecomeSeller