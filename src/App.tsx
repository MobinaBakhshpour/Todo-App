import './App.css';
import { HiOutlinePlusCircle } from "react-icons/hi2";

function App() {

  return (
    <>
      <div>
        {/* no task */}
        <div className='w-full flex text-center justify-center items-center gap-3 flex-col h-[calc(100vh-80px)]'>
          <div className='bg-[url(./assets/imgs/noTask.png)] bg-no-repeat bg-cover w-[200px] h-[200px] md:h-[400px] md:w-[400px] mx-auto'></div>
          <div className='text-base md:text-3xl text-dark-green'>
            What do you do today ?
          </div>
        </div>

        {/* fotter */}

        <div className='fixed w-full h-10 md:h-20 left-0 bottom-0 bg-dark-green'>
          <div className='relative rounded-full w-14 h-14 md:w-18 md:h-18 left-1/2 -top-2 -translate-x-1/2 -translate-y-1/2 bg-lime-green'>
            <HiOutlinePlusCircle className=' absolute w-12 h-12 md:w-16 md:h-16 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-dark-green cursor-pointer' />
          </div>
        </div>

      </div>
    </>
  )
}

export default App
