import Image from 'next/image'
import userImg from '../public/images/user-img.png'
import userImg2 from '../public/images/user-img2.png'
import curveDarkBlue from '../public/images/curve-dark-blue.svg'
import curveBlue from '../public/images/curve-blue.svg'
import curvePurple from '../public/images/curve-purple.svg'
import classnames from 'classnames'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { MdFilterAlt } from 'react-icons/md'
import { RiCalendarEventFill } from 'react-icons/ri'
import { TbRadar2 } from 'react-icons/tb'

import Progress_svg from './svg/Progress_svg'
import Completed_svg from './svg/Completed_svg'
//
import ProgressBar from '@ramonak/react-progress-bar'

const scrollbarX =
  'scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 overflow-x-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full'

const scrollbar =
  'scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full'

export default function Main() {
  return (
    <div
      className={classnames(' w-full max-w-[calc(100vw-600px)] ', scrollbar)}
    >
      <WelcomeBack />
      <CurrentProjects />
      <PendingInvoice />
    </div>
  )
}

function WelcomeBack() {
  return (
    <div className=" font-rubik  mb-10 ">
      <div className="mb-6 px-8 2xl:px-12">
        <h1 className="font-medium text-[28px] mb-4">Welcome back, Andrew!</h1>
        <p className="text-lg text-[#6E6F7D]">
          Have a look at the Quick Progress Bar.
        </p>
      </div>
      <div
        className={classnames(
          ' gap-[17px] flex  pb-20 px-8 2xl:px-12 ',
          scrollbarX,
        )}
      >
        <ProgressCard
          shadow="shadow-[0px_20px_60px_rgba(2,140,213,0.15)]"
          img={curveDarkBlue}
          width="min-w-[397px]"
          color=" bg-[#7A9FFF]"
          number="56"
          desc="Currently, the projects is in progress. "
        >
          <button className="flex items-center bg-[rgba(12,12,12,0.2)] rounded-md gap-2 pl-3 w-[171px] h-[45px]">
            <span>
              <TbRadar2 className="text-lg" />
            </span>
            <span>Live projects</span>
          </button>
          <button className="flex items-center bg-[rgba(12,12,12,0.2)] rounded-md gap-2 pl-3 w-[85px] h-[45px]">
            <span>View all</span>
          </button>
        </ProgressCard>
        <ProgressCard
          shadow=" shadow-[0px_20px_60px_rgba(2,140,213,0.15)]"
          img={curveBlue}
          color=" bg-[#7AD1FF]"
          number="124"
          desc="Projects in progress "
        >
          <button className="flex items-center bg-[rgba(12,12,12,0.2)] rounded-md gap-5 pl-3 w-[142px] h-[45px]">
            <span>
              <Progress_svg />
            </span>
            <span>In progress</span>
          </button>
        </ProgressCard>
        <ProgressCard
          shadow="shadow-[0px_25px_60px_rgba(173,101,255,0.3)]"
          img={curvePurple}
          color=" bg-[#B97AFF]"
          number="56"
          desc="Completed projects  "
        >
          <button className="flex items-center bg-[rgba(12,12,12,0.2)] rounded-md gap-5 pl-3 w-[142px] h-[45px]">
            <span>
              <Completed_svg />
            </span>
            <span>Completed</span>
          </button>
        </ProgressCard>
      </div>
    </div>
  )
}

function ProgressCard({
  img,
  width = 'min-w-[228px]',
  color,
  number,
  desc,
  children,
  shadow,
}) {
  return (
    <div
      className={classnames(
        'relative overflow-hidden rounded-xl h-[239px] px-6',
        width,
        color,
        shadow,
      )}
    >
      <Image src={img} layout="fill" className="z-20" />

      <div className="text-white z-50 relative text-sm">
        <div className="mt-5 mb-[52px]  flex justify-between">{children}</div>

        <div>
          <h1 className="font-poppins text-[64px] font-bold mb-3 leading-none ">
            {number}
          </h1>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  )
}

function CurrentProjects() {
  return (
    <div className=" font-rubik px-8 2xl:px-12 mb-10 -mt-16 ">
      <div className="flex justify-between items-center">
        <div className="mb-6">
          <h1 className="font-medium text-[28px] mb-4">Current Projects </h1>
          <p className="text-lg text-[#6E6F7D]">
            Have a look at the Quick Progress Bar.
          </p>
        </div>
        <div className="flex gap-4  items-center">
          {/* filter  */}
          <div className="border rounded h-14 flex items-center w-28 justify-center gap-2 cursor-pointer">
            <span className="text-sm"> Filter</span>
            <MdFilterAlt className="text-xl" />
          </div>
          {/* filter !end */}
          <div className="h-14 w-14 rounded border flex items-center justify-center cursor-pointer">
            <BsThreeDotsVertical />
          </div>
        </div>
      </div>
      <div className={classnames(' gap-[10px] flex  pb-4', scrollbarX)}>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
      <div className="text-right text-xs">
        <span className="font-medium"> SHIFT key</span>
        <span>+ scroll through mouse.</span>
      </div>
    </div>
  )
}

function ProjectCard({ progress = 75 }) {
  return (
    <div className="min-w-[391px] w-[391px] rounded-[10px] border px-6 py-5  ">
      <div className="space-y-1 ">
        <h1 className="text-[22px] font-semibold ">Construction Project</h1>
        <p>Property name </p>
      </div>
      <div className="font-poppins text-sm flex gap-6 my-4">
        <p>
          <span className="font-semibold ">$</span>
          <span>100 - 800</span>
        </p>
        <p className="flex items-center  gap-1">
          <RiCalendarEventFill className="" />
          <span>Deadline - 25 may</span>
        </p>
      </div>
      <div className="flex-col  mb-5">
        <ProgressBar
          className="w-full mb-[10px]"
          completed={progress}
          bgColor="#14A9F9"
          isLabelVisible={false}
          height="10px"
          borderRadius="2px"
        />
        <div className="flex justify-between text-xs">
          <span className="text-[rgba(28,46,69,0.6)]">Progress bar</span>
          <span className="font-bold text-[rgba(28,46,69,0.6)]">
            {progress} %
          </span>
        </div>
        {/* </div> */}
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src={userImg}
            height={33}
            width={33}
            className="rounded-full"
          />
          <p>Vender’s name</p>
        </div>
        <button className="text-sm font-medium font-poppins text-white rounded-md bg-[#14A9F9] px-4 py-2 ">
          View
        </button>
      </div>
    </div>
  )
}

function PendingInvoice() {
  return (
    <div className=" font-rubik px-8 2xl:px-12 mb-4">
      <div className="flex justify-between items-center">
        <div className="mb-6">
          <h1 className="font-medium text-[28px] mb-4">Pending Invoice</h1>
          <p className="text-lg text-[#6E6F7D]">
            Invoices that are currently pending
          </p>
        </div>
        <div className="h-14 w-14 rounded border flex items-center justify-center cursor-pointer">
          <BsThreeDotsVertical />
        </div>
      </div>
      <div
        className={classnames(
          '  gap-[10px] flex  pb-4 touch-pan-right ',
          scrollbarX,
        )}
      >
        <InvoiceCard approved />
        <InvoiceCard />
        <InvoiceCard />
        <InvoiceCard />
      </div>
      <div className="text-right text-xs">
        <span className="font-medium"> SHIFT key</span>
        <span>+ scroll through mouse.</span>
      </div>
    </div>
  )
}

function InvoiceCard({ approved }) {
  return (
    <div className="border min-w-[322px] min-w-80   rounded px-5">
      <h1 className="font-medium text-[28px] mt-[28px] mb-3">$137.00</h1>
      <div className="flex justify-between mb-7">
        <span>Amount</span>
        <button
          className={classnames(
            'text-xs rounded text-white  px-[10px] py-[6.5px]',
            { 'bg-[#15C15D]': approved, 'bg-[#14A9F9]': !approved },
          )}
        >
          {approved ? 'Approved' : 'Pending'}
        </button>
      </div>
      <section className="flex gap-5 mb-6">
        <Image src={userImg2} height={56} width={56} />
        <div>
          <h1 className="mb-1 font-medium">Erin Gonzales</h1>
          <div className="text-xs">
            <span className="text-[rgba(24,39,58,0.94)]">#5331 </span>
            <span className="text-[rgba(28,46,69,0.6)]">Date : 25 May</span>
          </div>
        </div>
      </section>
    </div>
  )
}
