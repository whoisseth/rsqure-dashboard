import { BiDotsVerticalRounded } from 'react-icons/bi'
import { FiChevronDown } from 'react-icons/fi'
import { BsPlusLg } from 'react-icons/bs'
import userImg from '../public/images/user-img.png'
import userImg2 from '../public/images/user-img2.png'
import userImg3 from '../public/images/user-img3.png'
import Image from 'next/image'
import classnames from 'classnames'
import { useState } from 'react'
export default function RightSidebar() {
  const scrollbar =
    'scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full'
  return (
    // overflow-y-scroll  scrollbar-hide
    <div
      className={classnames(
        'bg-[rgba(25,59,103,0.02)] h-full min-w-[310px] w-[360px] 2xl:min-w-[400px] sticky top-0 border-l-2   pb-9 font-rubik',
        scrollbar,
      )}
    >
      <div className="pl-9 pr-6 2xl:pr-12">
        <UpcomingMeeting />
        <TodaysMeetings />
        <ScheduleMeetings />
        <hr className="mb-6" />
        <RecentActivities />
      </div>
    </div>
  )
}

function UpcomingMeeting() {
  return (
    <>
      <div className="py-2 flex items-center justify-between mb-6 ">
        <h2 className="text-[22px] font-medium whitespace-nowrap">
          Upcoming Meeting
        </h2>
        <BiDotsVerticalRounded className="text-2xl cursor-pointer" />
      </div>
      <hr className="mb-5   " />
    </>
  )
}

function TodaysMeetings() {
  const [todayMeeting, SetTodayMeeting] = useState()
  return (
    <>
      <div
        className="flex items-center justify-between mb-[30px] cursor-pointer"
        onClick={() => SetTodayMeeting(!todayMeeting)}
      >
        <p>Today’s Meetings</p>
        <FiChevronDown
          className={classnames('text-lg transition-all', {
            'rotate-180 ': !todayMeeting,
          })}
        />
      </div>
      {todayMeeting && (
        <>
          <Meeting />
          <Meeting />
        </>
      )}
    </>
  )
}

function Meeting() {
  return (
    <div className="mb-12">
      <div className="py-2 flex items-center justify-between mb-[10px] ">
        <p className="text-xs text-[#028CD5] font-medium whitespace-nowrap">
          30 minute call with clients
        </p>
        <BiDotsVerticalRounded className="text-2xl cursor-pointer" />
      </div>

      <h3 className="text-lg font-medium mb-[18px]">Project Discovery call</h3>
      <p className="text-xs flex gap-2 mb-[18px]">
        <span className="text-[rgba(17,19,42,0.6)]">Due soon</span>
        <span className="font-medium text-[#11132A]">09:20 am</span>
      </p>
      <section className="flex items-center justify-between">
        <div className="flex">
          <UserImage src={userImg} className="z-50" />
          <UserImage src={userImg2} className="-ml-3 z-40" />
          <UserImage src={userImg} className="-ml-3 z-30" />
          <UserImage className="-ml-3" />
        </div>
        <button className="flex items-center gap-3 bg-[#14A9F9] text-white px-5 py-2.5 2xl:px-6 rounded font-semibold">
          <BsPlusLg className="text-sm" />
          <span>Invite</span>
        </button>
      </section>
    </div>
  )
}

function UserImage({ src, className }) {
  return (
    <div
      className={classnames(
        'h-[41px] w-[41px] rounded-full overflow-hidden relative flex items-center justify-center text-[10px]  font-bold text-[rgba(17,19,42,0.6)]',
        className,
        { ' ring-2 ring-[#ededed] ': !src },
      )}
    >
      {src && <Image src={src} layout="fill" objectFit="cover" />}
      <span className="ml-1">5+</span>
    </div>
  )
}

function ScheduleMeetings() {
  const [schMeet, setSchMeet] = useState(false)

  return (
    <div>
      <div
        className="flex items-center justify-between mb-[30px] cursor-pointer"
        onClick={() => setSchMeet(!schMeet)}
      >
        <p>Scheudle Meetings </p>
        <FiChevronDown
          className={classnames('text-lg transition-all', {
            'rotate-180 ': !schMeet,
          })}
        />
      </div>
    </div>
  )
}

function RecentActivities() {
  return (
    <>
      <div>
        <div className="py-2 flex items-center justify-between mb-6 ">
          <h2 className="text-[22px] font-medium whitespace-nowrap">
            Recent Activity
          </h2>
          <BiDotsVerticalRounded className="text-2xl cursor-pointer" />
        </div>
      </div>
      <div className="divide-y-[1px]">
        <Activity
          title="Thanks you for booking a meeting with JJ."
          userName="Kevin Dukkon"
          userImg={userImg2}
          dateAndTime="Jun 14, 2021 at 5:31 PM"
        />
        <Activity
          title="You received a message from Ashish "
          userName="Ashish Sharma "
          userImg={userImg3}
          dateAndTime="Jun 14, 2021 at 5:31 PM"
        />
        <Activity
          title="You received a message from Ashish "
          userName="Ashish Sharma "
          userImg={userImg3}
          dateAndTime="Jun 14, 2021 at 5:31 PM"
        />
        <Activity
          title="You received a message from Ashish "
          userName="Ashish Sharma "
          userImg={userImg3}
          dateAndTime="Jun 14, 2021 at 5:31 PM"
        />
      </div>
    </>
  )
}
function Activity({ title, userName, userImg, dateAndTime }) {
  return (
    <div className="flex justify-between items-start gap-2 py-5">
      <div className="flex gap-2 ">
        <div className="min-h-[9px] min-w-[9px] h-[9px] w-[9px] rounded-full bg-[#14A9F9]" />
        <div className="-mt-1">
          <h1 className="mb-5 text-sm font-medium text-[rgba(24,39,58,0.94)]">
            {title}
          </h1>
          <h2 className=" mb-2 text-sm font-medium text-[rgba(24,39,58,0.94)] ">
            {userName}
          </h2>
          <p className="text-sm text-[#75808e]">{dateAndTime}</p>
        </div>
      </div>
      <div className="min-h-14 min-w-14 h-14 w-14 relative rounded-full ">
        <Image src={userImg} layout="fill" objectFit="contain" />
      </div>
    </div>
  )
}
