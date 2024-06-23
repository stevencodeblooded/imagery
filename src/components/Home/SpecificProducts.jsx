import { faShare, faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import productImage from '../../assets/product.jpg'

const SpecificProducts = () => {
  return (
    <div className=" bg-gray-200">
        <section className="max-w-6xl mx-auto px-4 py-20">
            <div className="flex flex-col gap-20">
                <div className="flex flex-col gap-10">
                    <div>
                        <h1 className="text-3xl font-semibold uppercase">Lightroom Presets:</h1>
                        <h3 className="text-3xl uppercase">1-Click Editing Magic</h3>
                    </div>
                    <p className=" text-gray-500 md:w-2/3 lg:w-2/5">
                        Discover why thousands of influencers, professional
                        photographers, bloggers, social media managers, and everyday
                        creatives choose Flourish Presets.
                    </p>
                </div>
                <div className="flex flex-col gap-10">
                    <h3 className="uppercase text-gray-500 text-sm font-semibold">Specific Products</h3>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                        <div className='relative h-96 rounded-bl-3xl rounded-br-3xl cursor-pointer hover:shadow-lg hover:shadow-gray-500 rounded-3xl transition-all'>
                            <img src={productImage} alt="" className=' rounded-t-3xl w-full h-3/4 object-cover' />
                            <div className='absolute top-0 w-full h-full flex flex-col justify-between'>
                                <div className="flex flex-col justify-between h-3/4 px-5 pt-4">
                                    <div className='flex justify-between '>
                                        <div className=' text-white'>
                                            <p className='text-sm font-semibold flex items-center gap-2'>John Doe <FontAwesomeIcon icon={faShare} /></p>
                                        </div>
                                        <div>
                                            <p className='uppercase py-1 text-xs px-3 rounded-2xl bg-white font-semibold'>Specific</p>
                                        </div>
                                    </div>
                                    <div className='font-bold mb-2 text-lg flex gap-2 text-white'>4.95 <sub className='text-xs font-semibold flex items-center gap-2'>(125) <p><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} className=' text-black' /></p></sub></div>
                                </div>
                                <div className='h-1/4 text-gray-600 bg-white flex flex-col gap-2 w-full px-5 rounded-b-md '>
                                    <h3 className="text-2xl font-semibold">Late Night Drive</h3>
                                    <h2 className="text-3xl font-bold">$ 10.99</h2>
                                </div>
                            </div>
                        </div>
                        <div className='relative h-96 rounded-bl-3xl rounded-br-3xl cursor-pointer hover:shadow-lg hover:shadow-gray-500 rounded-3xl transition-all'>
                            <img src={productImage} alt="" className=' rounded-t-3xl w-full h-3/4 object-cover' />
                            <div className='absolute top-0 w-full h-full flex flex-col justify-between'>
                                <div className="flex flex-col justify-between h-3/4 px-5 pt-4">
                                    <div className='flex justify-between '>
                                        <div className=' text-white'>
                                            <p className='text-sm font-semibold flex items-center gap-2'>John Doe <FontAwesomeIcon icon={faShare} /></p>
                                        </div>
                                        <div>
                                            <p className='uppercase py-1 text-xs px-3 rounded-2xl bg-white font-semibold'>Specific</p>
                                        </div>
                                    </div>
                                    <div className='font-bold mb-2 text-lg flex gap-2 text-white'>4.95 <sub className='text-xs font-semibold flex items-center gap-2'>(125) <p><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} className=' text-black' /></p></sub></div>
                                </div>
                                <div className='h-1/4 bg-gray-800 text-white flex flex-col gap-2 w-full px-5 rounded-b-md '>
                                    <h3 className="text-2xl font-semibold">Late Night Drive</h3>
                                    <h2 className="text-3xl font-bold">$ 10.99</h2>
                                </div>
                            </div>
                        </div>
                        <div className='relative h-96 rounded-bl-3xl rounded-br-3xl cursor-pointer hover:shadow-lg hover:shadow-gray-500 rounded-3xl transition-all'>
                            <img src={productImage} alt="" className=' rounded-t-3xl w-full h-3/4 object-cover' />
                            <div className='absolute top-0 w-full h-full flex flex-col justify-between'>
                                <div className="flex flex-col justify-between h-3/4 px-5 pt-4">
                                    <div className='flex justify-between '>
                                        <div className=' text-white'>
                                            <p className='text-sm font-semibold flex items-center gap-2'>John Doe <FontAwesomeIcon icon={faShare} /></p>
                                        </div>
                                        <div>
                                            <p className='uppercase py-1 text-xs px-3 rounded-2xl bg-white font-semibold'>Specific</p>
                                        </div>
                                    </div>
                                    <div className='font-bold mb-2 text-lg flex gap-2 text-white'>4.95 <sub className='text-xs font-semibold flex items-center gap-2'>(125) <p><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} className=' text-black' /></p></sub></div>
                                </div>
                                <div className='h-1/4 text-gray-600 bg-white flex flex-col gap-2 w-full px-5 rounded-b-md '>
                                    <h3 className="text-2xl font-semibold">Lost in the World</h3>
                                    <h2 className="text-3xl font-bold">$ 10.99</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button className="flex mb-14 items-center gap-3 py-2 px-6 rounded-3xl bg-gray-900 text-white font-semibold  ">More <FontAwesomeIcon icon={faShare} /></button>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default SpecificProducts