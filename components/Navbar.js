import { FiChevronRight } from 'react-icons/fi'
import { HiOutlineSearch } from 'react-icons/hi'
import userImg from '../public/images/user-img.png'
import Image from 'next/image'
import Logo from './Logo'
export default function Navbar() {
  return (
    <div className="flex    justify-between px-20 2xl:px-28 items-center h-[137px]">
      <Logo />
      <Search />
      <User />
    </div>
  )
}

function Search() {
  return (
    <div className="flex w-[600px] 2xl:w-[996px] bg-[#F6F6F6] h-[72px] rounded items-center  px-7">
      <HiOutlineSearch className=" text-3xl text-[#737e8c]" />
      <input
        type="text"
        placeholder="search for projects"
        className="w-full bg-inherit h-full outline-none px-6"
      />
    </div>
  )
}

function User() {
  return (
    <div className="flex items-center">
      <Image src={userImg} height={67} width={67} className="rounded-full" />
      <div className="flex flex-col gap-[10px] font-rubik w-40 ml-6">
        <h2 className="text-[22px] font-medium ">Oliver Smith</h2>
        <p>Vendor</p>
      </div>
      <FiChevronRight className="text-3xl" />
    </div>
  )
}
