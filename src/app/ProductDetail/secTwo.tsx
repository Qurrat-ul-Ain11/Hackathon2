import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import { IoHeartOutline, IoShareSocialOutline } from 'react-icons/io5';
import { VscArrowSwap } from 'react-icons/vsc';

const Sectwo = () => {
  return (
    <div>
        <hr />
        <div className='py-24 px-5'>
            <nav className='md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center'>
                <a className='mr-5 text-xl'>Description</a>
                <a className='text-gray-500 text-xl mr-5'>Additional Information</a>
                <a className='text-gray-500 text-xl mr-5'>Reviews [5]</a>
            </nav>
            <div className=' text-[#9F9F9F] px-20 mt-14'>
            <p className='mb-20'>Embodying the raw, wayward spirit of rock roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
            <p>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
            <div className='flex flex-wrap gap-4 mt-10 justify-between'>
                <Image src={'/sofa2.png'} alt="" width={505} height={348} />
                <Image src={'/sofa2.png'} alt="" width={505} height={348} />
            </div>
            </div>
        </div>
        <hr />
        <section className="text-gray-600 body-font">
  <div className="container px-5 py-16 mx-auto">
    <div className="sm:flex-row flex-col py-3 mb-12">
      <h1 className="text-center justify-center font-medium text-[30px] text-black">
        Related Product
      </h1>
    </div>
    <div className="flex flex-wrap -m-4">
      {[
        {
          image: "/pic2.png",
          discount: "-30%",
          name: "Syltherine",
          description: "Stylish cafe chair",
          price: "Rp 2.500.000",
          oldPrice: "Rp 3.500.000",
        },
        {
          image: "/pic2.png",
          name: "Lolito",
          description: "Luxury big sofa",
          price: "Rp 7.000.000",
        },
        {
          image: "/sofa3.png",
          discount: "-50%",
          name: "Lolito",
          description: "Luxury big sofa",
          price: "Rp 7.000.000",
          oldPrice: "Rp 3.500.000",
        },
        {
          image: "/room.png",
          label: "New",
          labelColor: "#2EC1AC",
          name: "Respira",
          description: "Outdoor bar table and stool",
          price: "Rp 500.000",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="lg:w-1/4 md:w-1/2 p-4 w-full relative group"
        >
          <a className="block relative h-[301] w-[285] overflow-hidden">
            <Image
              alt={item.name}
              className="object-cover object-center w-full h-full block transition-transform duration-300 group-hover:scale-110"
              src={item.image}
              width={285}
              height={301}
            />
            {item.discount && (
              <span className="absolute top-2 right-0 text-white bg-red-400 text-xs px-1 text-center py-2 mr-2 rounded-full">
                {item.discount}
              </span>
            )}
            {item.label && (
              <span
                className="absolute top-2 right-0 text-white text-xs px-1 text-center py-2 mr-2 rounded-full"
                style={{ backgroundColor: item.labelColor }}
              >
                {item.label}
              </span>
            )}
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center">
              <Link href={'/shop'} >
              <button className="bg-white text-[#B88E2F] px-3 py-2 text-sm mb-2">
                View Product
              </button>
              </Link>
              <div className="flex gap-4 text-[12px]">
              <button className="text-white flex"> <IoShareSocialOutline className='size-5' /> <span>Share</span> </button>
                  <button className="text-white flex"><VscArrowSwap className='size-5' /> <span>Compare</span></button>
                  <button className="text-white flex"><IoHeartOutline className='size-5' /> <span>Like</span></button>
                
              </div>
            </div>
          </a>
          <div className="bg-[#F4F5F7] py-4 pl-3">
            <h2 className="text-gray-900 title-font text-lg font-medium">
              {item.name}
            </h2>
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
              {item.description}
            </h3>
            <p className="mt-1 gap-2 text-black font-semibold flex">
              {item.price}
              {item.oldPrice && (
                <span className="text-[#B0B0B0] gap-1 pt-1 font-normal text-xs line-through decoration-gray-300">
                  {item.oldPrice}
                </span>
              )}
            </p>
          </div>
        </div>
      ))}
    </div>
    <div className="text-center justify-center items-center">
      <Link href={'/shop'}>
        <button className="text-center border border-[#B88E2F] text-sm font-semibold py-2 px-10 justify-center mt-9 text-[#B88E2F] items-center">
          Show More
        </button>
      </Link>
    </div>
  </div>
</section>
<hr />
    </div>
  )
}

export default Sectwo