import { MdDashboard, MdNotificationsActive } from 'react-icons/md'
import { IoDocumentText, IoSend } from 'react-icons/io5'
import { IoMdCall } from 'react-icons/io'
import { RiCalendarEventFill } from 'react-icons/ri'
import classnames from 'classnames'
import Promotions_svg from './svg/Promotions_svg'

export default function LeftSidebar() {
  return (
    <div className="bg-[#FAFAFA] h-full min-w-[290px]  w-[300px] 2xl:w-[348px] sticky top-0 border-r-2  overflow-y-scroll  scrollbar-hide pb-9 font-rubik">
      <div className="flex flex-col  pt-24 gap-1">
        <OptionLayout text="Dashboard" active>
          <MdDashboard />
        </OptionLayout>
        <OptionLayout text="Project">
          <IoDocumentText />
        </OptionLayout>
        <OptionLayout text="Calender">
          <RiCalendarEventFill />
        </OptionLayout>
        <OptionLayout text="Message" alert="4">
          <IoSend />
        </OptionLayout>
        <OptionLayout text="Notifications" alert="5">
          <MdNotificationsActive />
        </OptionLayout>
        <OptionLayout text="Contacts">
          <IoMdCall />
        </OptionLayout>
        <div className="px-10 text-sm font-medium my-2">Promotions</div>
        <OptionLayout text="Promotions">
          <Promotions_svg />
        </OptionLayout>
      </div>
    </div>
  )
}

function OptionLayout({ children, text, alert, active }) {
  return (
    <div className="h-14 flex items-center group    ">
      <div
        className={classnames(
          'h-full  rounded-[0px_5px_5px_0px] w-2 bg-[#14A9F9]  group-hover:visible',
          { ' visible ': active, ' invisible ': !active },
        )}
      />
      <div className="flex justify-between  w-full pr-8">
        <div
          className={classnames(
            'flex items-center justify-start px-10 text-lg group-hover:font-medium  transition-all group-hover:text-[#14A9F9]  gap-5 cursor-pointer   hover:fill-[#14A9F9] ',
            {
              'text-[#14A9F9]  font-medium fill-[#14A9F9]': active,
              ' text-[rgba(28,48,74,0.5)] fill-[rgba(28,48,74,0.5)] ': !active,
            },
          )}
        >
          <div className="text-2xl ">{children}</div>
          <p>{text}</p>
        </div>
        {alert && (
          <div className="  text-xs h-6 w-8 rounded flex justify-center items-center text-white font-medium bg-[#14A9F9] cursor-pointer">
            {alert}
          </div>
        )}
      </div>
    </div>
  )
}
