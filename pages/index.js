import Navbar from '../components/Navbar'
import Main from '../components/Main'
import LeftSidebar from '../components/LeftSidebar'
import RightSidebar from '../components/RightSidebar'

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-between h-[calc(100vh-137px)] w-screen max-w-screen ">
        <LeftSidebar />
        <Main />
        <RightSidebar />
      </div>
    </>
  )
}

export default Home
