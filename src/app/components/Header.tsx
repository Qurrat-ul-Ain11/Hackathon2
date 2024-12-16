import Image from "next/image";
import Link from "next/link";
import { MdPersonOutline } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Header() {
  return (
    <>
      <header className="text-black body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <Image src={"/logo.png"} alt="logo" width={50} height={32}/>
      <span className="ml-3 text-xl">Furniro</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link className="mr-6 hover:text-gray-900" href={"/"}>Home</Link>
      <Link href={"/shop"} className="mr-6 hover:text-gray-900">Shop</Link>
      <Link href={'/blog'} className="mr-6 hover:text-gray-900">Blog</Link>
      <Link href={'/contact'} className="mr-6 hover:text-gray-900">Contact</Link>
    </nav>
    <div className="font-bold flex">
    <MdPersonOutline width={48} height="24" className=" hover:text-gray-900 w-[48px] h-[24px]"/>
    <CiSearch width={48} height="24" className=" hover:text-gray-900 w-[48px] h-[24px]"/>
    <GoHeart width={48} height="24" className=" hover:text-gray-900 w-[48px] h-[24px]"/>
    <Link href={'/ProductDetail'}><AiOutlineShoppingCart width={48} height="24" className="hover:text-gray-900 w-[48px] h-[24px]"/></Link>
    </div>
  </div>
</header>

    </>
  );
}