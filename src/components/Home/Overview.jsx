import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import productImage from "../../assets/product.jpg";
import { faShare, faStar } from "@fortawesome/free-solid-svg-icons";

const Overview = () => {
  return (
    <div>
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="flex flex-col gap-12">
          <h3 className="uppercase text-gray-500 text-sm font-semibold">Overview</h3>
          
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            <div className="flex flex-col gap-8 cursor-pointer">
                <div className="relative">
                    <img src={productImage} alt="" className=" rounded-3xl h-64 w-full object-cover" />
                    <p className='uppercase py-1 text-xs px-3 rounded-2xl bg-white font-semibold absolute top-4 flex right-4'>Trending</p>
                </div>
                <div className="flex flex-col gap-4 text-gray-500">
                    <h2 className=" text-3xl uppercase hover:text-black transition-all">Beautiful Edits, Made Easy</h2>
                    <ul className=" list-disc pl-6 cursor-default ">
                        <li>Upgrade your content with 1-click Lightqoom preset filters</li>
                        <li> Easy to use, beginneq friendly</li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col gap-8 cursor-pointer">
                <div className="relative">
                    <img src={productImage} alt="" className=" rounded-3xl h-64 w-full object-cover" />
                    <p className='uppercase py-1 text-xs px-3 rounded-2xl bg-white font-semibold absolute top-4 flex right-4'>Trending</p>
                </div>
                <div className="flex flex-col gap-4 text-gray-500">
                    <h2 className=" text-3xl uppercase hover:text-black transition-all">Spend Less, Get More</h2>
                    <ul className=" list-disc pl-6 cursor-default">
                        <li>All orfers include several variants to save time and ensure stunning results</li>
                        <li>Both mobile & desktop versions included</li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col gap-8 cursor-pointer">
                <div className="relative">
                    <img src={productImage} alt="" className=" rounded-3xl h-64 w-full object-cover" />
                    <p className='uppercase py-1 text-xs px-3 rounded-2xl bg-white font-semibold absolute top-4 flex right-4'>Trending</p>
                </div>
                <div className="flex flex-col gap-4 text-gray-500">
                    <h2 className=" text-3xl uppercase hover:text-black transition-all">Create Your Signature Style</h2>
                    <ul className=" list-disc pl-6 cursor-default">
                        <li> Over 200+ best-selling pqofessional Lightroom presets</li>
                        <li> Find the perfect Lightroom preset to match your unique editing style</li>
                    </ul>
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Overview;