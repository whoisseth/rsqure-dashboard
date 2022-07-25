import { BiDotsVerticalRounded } from 'react-icons/bi'

export default function RightSidebar() {
  return (
    <div className="bg-[rgba(25,59,103,0.02)] h-full w-[300px] 2xl:w-[348px] sticky top-0 border-l-2  overflow-y-scroll  scrollbar-hide pb-9 font-rubik">
      <div className="pl-9 pr-6 2xl:pr-12">
        <div className="py-2 flex items-center justify-between mb-6  ">
          <div className="text-[22px] font-medium whitespace-nowrap">
            Upcoming Meeting
          </div>
          <BiDotsVerticalRounded className="text-2xl cursor-pointer" />
        </div>
        <hr />
      </div>
    </div>
  )
}
