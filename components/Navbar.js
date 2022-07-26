import { FiChevronRight } from 'react-icons/fi'
import { HiOutlineSearch } from 'react-icons/hi'
import userImg from '../public/images/user-img.png'
import Image from 'next/image'
import Logo from './Logo'
export default function Navbar() {
  return (
    <div className="flex    justify-between  items-center h-[137px]">
      {/* <div className="min-w-[290px]   flex   justify-center"> */}
      <div className="min-w-[290px]  w-[300px] 2xl:w-[348px] flex   justify-center">
        <Logo />
      </div>
      <Search />

      <User />
    </div>
  )
}

function Search() {
  return (
    // h-[72px]
    <div className="flex w-[600px] 2xl:w-[996px] bg-[#F6F6F6] rounded h-14 items-center  px-7">
      <HiOutlineSearch className=" text-2xl text-[#737e8c]" />
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
    // <div className="min-w-[310px] bg-blue-100 flex   justify-center">
    <div className="min-w-[310px] w-[360px] 2xl:w-[430px] flex   justify-center">
      <div className="flex items-center 2xl:ml-16">
        {/* <Image src={userImg} height={67} width={67} className="rounded-full" /> */}
        <Image src={userImg} height={56} width={56} className="rounded-full" />
        <div className="flex flex-col gap-1 font-rubik  ml-6">
          <h2 className="text-[22px] font-medium ">Oliver Smith</h2>
          <p>Vendor</p>
        </div>
        <FiChevronRight className="text-2xl ml-4" />
      </div>
    </div>
  )
}
