import React from 'react'
import Image from "next/image";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/componentUI/Carousel"

const SecFour = () => {
  return (
    <div>
        <section className="text-gray-600 bg-[#FCF8F3] body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
      50+ Beautiful rooms 
      inspiration
      </h1>
      <p className="mb-5 leading-relaxed">
      Our designer already made a lot of beautiful prototipe of rooms that inspire you
      </p>
      <div className="flex justify-center">
      <button className='text-center border border-[#B88E2F] text-sm font-semibold py-2 px-10 justify-center mt-9 text-white bg-[#B88E2F] items-center'>Explore More</button>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-[372] md:w-[372] w-[5/6] hidden md:block">
    <Carousel>
  <CarouselContent>
    <CarouselItem>
    <Image
        className="object-cover object-center rounded"
        alt="hero"
        src={'/bd.png'}
        width={372}
        height={486}
      />
    </CarouselItem>
    <CarouselItem>
    <Image
        className="object-cover object-center rounded"
        alt="hero"
        src={'/bd2.png'}
        width={372}
        height={486}
      />
    </CarouselItem>
    <CarouselItem>
    <Image
        className="object-cover object-center rounded"
        alt="hero"
        src={'/vase.png'}
        width={372}
        height={486}
      />
    </CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
    </div>
  </div>
</section>
    </div>
  )
}

export default SecFour