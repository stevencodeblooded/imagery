import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import product from '../../assets/product.jpg'
import { faShare, faStar } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { TbCircleDotted } from "react-icons/tb";

const Hero = () => {
  return (
    <div>
        <section className=" max-w-6xl mx-auto px-4 py-10">
            <div className='flex flex-col gap-10'>
                <div className="flex flex-col gap-7">
                    <h1 className=" uppercase font-semibold text-3xl">Edit like a PRO</h1>
                    <div>
                        <p className=" text-lg">Elevate Your Content With The Best</p>
                        <p className=" text-xl font-semibold">Lightroom Presets</p>
                    </div>
                </div>
                <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3'>
                    <div className='relative cursor-pointer hover:shadow-lg hover:shadow-gray-500 rounded-3xl transition-all'>
                        <img src={product} alt="" className=' rounded-3xl w-full h-full' />
                        <div className='absolute top-0 w-full h-full px-5 pt-4 flex flex-col justify-between'>
                            <div className='flex justify-between'>
                                <div className='flex flex-col gap-2 text-white'>
                                    <p className='text-sm font-semibold flex items-center gap-2'>John Doe <FontAwesomeIcon icon={faShare} /></p>
                                    <div className='font-bold text-lg flex'>4.95 
                                        <sup className='text-xs font-semibold flex items-center gap-2'>(125) 
                                            <span>
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} className=' text-black' />
                                            </span>
                                        </sup>
                                    </div>
                                </div>
                                <div>
                                    <p className='uppercase py-1 text-sm px-3 rounded-2xl bg-white font-semibold'>bestseller</p>
                                </div>
                            </div>
                            <div className=' mb-28'>
                                <h2 className='text-white text-3xl capitalize'>Lorem ipsum dolor sit amet</h2>
                            </div>
                        </div>
                    </div>
                    <div className='relative cursor-pointer hover:shadow-lg hover:shadow-gray-500 rounded-3xl transition-all'>
                        <img src={product} alt="" className=' rounded-3xl w-full h-full' />
                        <div className='absolute top-0 w-full h-full px-5 pt-4 flex flex-col justify-between'>
                            <div className='flex justify-between'>
                                <div className='flex flex-col gap-2 text-white'>
                                    <p className='text-sm font-semibold flex items-center gap-2'>John Doe <FontAwesomeIcon icon={faShare} /></p>
                                    <div className='font-bold text-lg flex'>4.95 <sup className='text-xs font-semibold flex items-center gap-2'>(125) <p><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} className=' text-black' /></p></sup></div>
                                </div>
                                <div>
                                    <p className='uppercase py-1 text-sm px-3 rounded-2xl bg-white font-semibold'>bestseller</p>
                                </div>
                            </div>
                            <div className=' mb-28'>
                                <h2 className='text-white text-3xl capitalize'>Lorem ipsum dolor sit amet</h2>
                            </div>
                        </div>
                    </div>
                    <div className='relative cursor-pointer hover:shadow-lg hover:shadow-gray-500 rounded-3xl transition-all'>
                        <img src={product} alt="" className=' rounded-3xl w-full h-full' />
                        <div className='absolute top-0 w-full h-full px-5 pt-4 flex flex-col justify-between'>
                            <div className='flex justify-between'>
                                <div className='flex flex-col gap-2 text-white'>
                                    <p className='text-sm font-semibold flex items-center gap-2'>John Doe <FontAwesomeIcon icon={faShare} /></p>
                                    <div className='font-bold text-lg flex'>4.95 <sup className='text-xs font-semibold flex items-center gap-2'>(125) <p><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} className=' text-black' /></p></sup></div>
                                </div>
                                <div>
                                    <p className='uppercase py-1 text-sm px-3 rounded-2xl bg-white font-semibold'>bestseller</p>
                                </div>
                            </div>
                            <div className=' mb-28'>
                                <h2 className='text-white text-3xl capitalize'>Lorem ipsum dolor sit amet</h2>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div>
                    <Link to={'presets'} className='capitalize py-2 px-6 rounded-3xl bg-gray-900 text-white font-semibold flex items-center gap-3 w-fit'>See all our presets <TbCircleDotted /></Link>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Hero