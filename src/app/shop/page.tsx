import React from 'react'
import Image from "next/image";
import { FaGreaterThan } from "react-icons/fa6";
import SecThree from '../homePage/secThreee';
import Link from 'next/link';
import Frame from '../frame';

const Shop = () => {
  return (
    <div>
    <div className='relative'>
        <Image src={'/bg.png'}
        alt='bg'
        width={1440}
        height={316}
        className=''/>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg text-center py-6 md:px-10 md:py-8 lg:w-1/2">
        <h3 className="text-xl md:text-3xl font-bold  leading-snug mt-2">
          Shop
        </h3>
        <h6 className="text-lg font-semibold leading-relaxed flex justify-center text-center items-center gap-2 p-3">Home <FaGreaterThan className=''/><span className='font-light text-gray-700'>Shop</span> </h6>
      </div>
      </div>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-16 mx-auto">
  <div className="sm:flex-row flex-col py-3 mb-12">
        <h1 className='text-center justify-center font-medium text-[30px] text-black'>
        Our Product
        </h1>
      </div>
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-[301] w-[285]  overflow-hidden ">
          <Image
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={'/pic2.png'}
            width={285}
            height={301}
          />
          <span className="absolute top-2 right-0  text-white bg-red-400 text-xs px-1 text-center py-3 mr-2 rounded-full">
           <p className='text-xs'>-30%</p>
</span>
        </a>
        <div className="bg-[#F4F5F7] py-4 pl-3">
          <h2 className="text-gray-900 title-font text-lg font-medium">
          Syltherine
          </h2>
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          Stylish cafe chair
          </h3>
          <p className="mt-1 gap-2 text-black font-semibold flex ">Rp 2.500.000 <span className="text-[#B0B0B0] gap-1 pt-1 font-normal text-xs line-through decoration-gray-300">Rp 3.500.00</span></p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <a className="block relative h-[301] w-[285]  overflow-hidden">
          <Image
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={'/shoppp.png'}
            width={285}
            height={300}
          />
        </a>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <a className="block relative h-[301] w-[285]  overflow-hidden">
          <Image
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={'/sofa3.png'}
            width={285}
            height={301}
          />
          <span className="absolute top-2 right-0  text-white bg-red-400 text-xs px-1 text-center py-3 mr-2 rounded-full">
           <p className='text-xs'>-50%</p>
</span>
        </a>
        <div className="bg-[#F4F5F7] py-4 pl-3">
          <h2 className="text-gray-900 title-font text-lg font-medium">
          Lolito
          </h2>
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          Luxury big sofa
          </h3>
          <p className="mt-1 text-black font-semibold gap-2 flex">Rp 7.000.000 <span className="text-[#B0B0B0] gap-1 pt-1 font-normal text-xs line-through decoration-gray-300">Rp 3.500.000</span></p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <a className="block relative h-[301] w-[285]  overflow-hidden">
          <Image
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={'/room.png'}
            width={285}
            height={301}
          />
          <span className="absolute top-2 right-0  text-white bg-[#2EC1AC] text-xs px-1 text-center py-2 mr-2 rounded-full">
           <p className='text-xs'>New</p>
</span>
        </a>
        <div className="bg-[#F4F5F7] py-4 pl-3">
          <h2 className="text-gray-900 title-font text-lg font-medium">
          Respira
          </h2>
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          Outdoor bar table and stool
          </h3>
          <p className="mt-1 text-black font-semibold">Rp 500.000</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <a className="block relative h-[301] w-[285] overflow-hidden">
          <Image
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={'/lamp.png'}
            width={285}
            height={301}
          />
        </a>
        <div className="bg-[#F4F5F7] py-4 pl-3">
          <h2 className="text-gray-900 title-font text-lg font-medium">
          Grifo
          </h2>
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          Night lamp
          </h3>
          <p className="mt-1 text-black font-semibold">Rp 1.500.000</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <a className="block relative h-[301] w-[285] overflow-hidden">
          <Image
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={'/room2.png'}
            width={285}
            height={301}
          />
          <span className="absolute top-2 right-0  text-white bg-[#2EC1AC] text-xs px-1 text-center py-2 mr-2 rounded-full">
           <p className='text-xs'>New</p>
</span>
        </a>
        <div className="bg-[#F4F5F7] py-4 pl-3">
          <h2 className="text-gray-900 title-font text-lg font-medium">
          Muggo
          </h2>
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          Small mug
          </h3>
          <p className="mt-1 text-black font-semibold">Rp 150.000</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <a className="block relative h-[301] w-[285] overflow-hidden">
          <Image
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={'/room3.png'}
            width={285}
            height={301}
          />
<span className="absolute top-2 right-0  text-white bg-red-400 text-xs px-1 text-center py-3 mr-2 rounded-full">
           <p className='text-xs'>-50%</p>
</span>
        </a>
        <div className="bg-[#F4F5F7] py-4 pl-3">
          <h2 className="text-gray-900 title-font text-lg font-medium">
          Pingky
          </h2>
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          Cute bed set
          </h3>
          <p className="mt-1 text-black font-semibold flex gap-2">Rp 7.000.000 <span className="text-[#B0B0B0] gap-1 pt-1 font-normal text-xs line-through decoration-gray-300">Rp 3.500.00</span></p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <a className="block relative h-[301] w-[285] overflow-hidden">
          <Image
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={'/sofa4.png'}
            width={285}
            height={301}
          />
          <span className="absolute top-2 right-0  text-white bg-[#2EC1AC] text-xs px-1 text-center py-2 mr-2 rounded-full">
           <p className='text-xs'>New</p>
</span>
        </a>
        <div className="bg-[#F4F5F7] py-4 pl-3">
          <h2 className="text-gray-900 title-font text-lg font-medium">
          Potty
          </h2>
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          Minimalist flower pot
          </h3>
          <p className="mt-1 text-black font-semibold">Rp 500.000</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <a className="block relative h-[301] w-[285]  overflow-hidden">
          <Image
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={'/p1.png'}
            width={285}
            height={301}
          />
        </a>
        <div className="bg-[#F4F5F7] py-4 pl-3">
          <h2 className="text-gray-900 title-font text-lg font-medium">
          Lolito
          </h2>
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          Luxury big sofa
          </h3>
          <p className="mt-1 text-black font-semibold flex">Rp 7.000.000 </p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <a className="block relative h-[301] w-[285]  overflow-hidden">
          <Image
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={'/p3.png'}
            width={285}
            height={301}
          />
          <span className="absolute top-2 right-0  text-white bg-[#2EC1AC] text-xs px-1 text-center py-2 mr-2 rounded-full">
           <p className='text-xs'>New</p>
</span>
        </a>
        <div className="bg-[#F4F5F7] py-4 pl-3">
          <h2 className="text-gray-900 title-font text-lg font-medium">
          Respira
          </h2>
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          Outdoor bar table and stool
          </h3>
          <p className="mt-1 text-black font-semibold">Rp 500.000</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <a className="block relative h-[301] w-[285] overflow-hidden">
          <Image
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={'/p4.png'}
            width={285}
            height={301}
          />
        </a>
        <div className="bg-[#F4F5F7] py-4 pl-3">
          <h2 className="text-gray-900 title-font text-lg font-medium">
          Grifo
          </h2>
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          Night lamp
          </h3>
          <p className="mt-1 text-black font-semibold">Rp 1.500.000</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <a className="block relative h-[301] w-[285] overflow-hidden">
          <Image
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={'/p5.png'}
            width={285}
            height={301}
          />
          <span className="absolute top-2 right-0  text-white bg-[#2EC1AC] text-xs px-1 text-center py-2 mr-2 rounded-full">
           <p className='text-xs'>New</p>
</span>
        </a>
        <div className="bg-[#F4F5F7] py-4 pl-3">
          <h2 className="text-gray-900 title-font text-lg font-medium">
          Muggo
          </h2>
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          Small mug
          </h3>
          <p className="mt-1 text-black font-semibold">Rp 150.000</p>
        </div>
      </div>
    </div>
    <div className='text-center justify-center items-center gap-2'>
    <Link href={'/shop'}><button className='text-center mr-3 rounded border border-[#B88E2F] text-sm font-semibold py-1 bg-[#B88E2F] px-2 justify-center mt-9 text-white items-center'>1</button></Link>
    <Link href={'/shop'}><button className='text-center mr-3 rounded border border-[#B88E2F] text-sm font-semibold py-1 px-2 justify-center mt-9 text-[#B88E2F] items-center'>2</button></Link>
    <Link href={'/shop'}><button className='text-center mr-3 rounded border border-[#B88E2F] text-sm font-semibold py-1 px-2 justify-center mt-9 text-[#B88E2F] items-center'>3</button></Link>
    <Link href={'/shop'}><button className='text-center mr-3 rounded border border-[#B88E2F] text-sm font-semibold py-1 px-2 justify-center mt-9 text-[#B88E2F] items-center'>Next</button></Link>
  </div>
  </div>
  <Frame />
</section>
<div className='w-full'>
<hr />
</div>
    </div>
  )
}

export default Shop