import Link from "next/link";
import Image from "next/image";
import { IoShareSocialOutline } from "react-icons/io5";
import { VscArrowSwap } from "react-icons/vsc";
import { IoHeartOutline } from "react-icons/io5";

const products = [
  {
    id: 1,
    name: "Syltherine",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",
    oldPrice: "Rp 3.500.000",
    discountTag: "-30%",
    image: "/pic2.png",
  },
  {
    id: 2,
    name: "Lolito",
    description: "Luxury big sofa",
    price: "Rp 7.000.000",
    image: "/shoppp.png",
  },
  {
    id: 3,
    name: "Lolito",
    description: "Luxury big sofa",
    price: "Rp 7.000.000",
    oldPrice: "Rp 3.500.000",
    discountTag: "-50%",
    image: "/sofa3.png",
  },
  {
    id: 4,
    name: "Respira",
    description: "Outdoor bar table and stool",
    price: "Rp 500.000",
    discountTag: "New",
    image: "/room.png",
  },
  {
    id: 5,
    name: "Grifo",
    description: "Night lamp",
    price: "Rp 1.500.000",
    image: "/lamp.png",
  },
  {
    id: 6,
    name: "Muggo",
    description: "Small mug",
    price: "Rp 150.000",
    discountTag: "New",
    image: "/room2.png",
  },
  {
    id: 7,
    name: "Pingky",
    description: "Cute bed set",
    price: "Rp 7.000.000",
    oldPrice: "Rp 3.500.000",
    discountTag: "-50%",
    image: "/room3.png",
  },
  {
    id: 8,
    name: "Potty",
    description: "Minimalist flower pot",
    price: "Rp 500.000",
    discountTag: "New",
    image: "/sofa4.png",
  },
  // Add other products here
];

const SecThree = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-16 mx-auto">
        <h1 className="text-center font-medium text-[30px] text-black mb-12">Our Product</h1>
        <div className="flex flex-wrap -m-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative group lg:w-1/4 md:w-1/2 p-4 w-full"
            >
              <a className="block relative h-[301px] w-full overflow-hidden">
                <Image
                  alt={product.name}
                  className="object-cover object-center w-full h-full block"
                  src={product.image}
                  width={285}
                  height={301}
                />
                 </a>
              {/* Hover Effects */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Link href={`/pages/${product.id}`}>
                  <button className="bg-white text-[#B88E2F] px-4 py-2 mb-2">
                    View Product
                  </button>
                </Link>
                <div className="flex space-x-3 text-sm">
                  <button className="text-white flex"> <IoShareSocialOutline className='size-5' /> <span>Share</span> </button>
                  <button className="text-white flex"><VscArrowSwap className='size-5' /> <span>Compare</span></button>
                  <button className="text-white flex"><IoHeartOutline className='size-5' /> <span>Like</span></button>
                </div>
                
              </div>
              <div className="bg-[#F4F5F7] py-4 pl-3">
                <h2 className="text-gray-900 title-font text-lg font-medium">{product.name}</h2>
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{product.description}</h3>
                <p className="mt-1 flex items-center gap-2 text-black font-semibold">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecThree;