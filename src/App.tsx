import './App.css';
import { HiOutlinePlusCircle } from "react-icons/hi2";
import TodoItem from './components/TodoItem';

function App() {

  return (
    <>
      <div>
        {/* no task */}
        {/* <div className='w-full flex text-center justify-center items-center gap-3 flex-col h-[calc(100vh-65px)] md:h-[calc(100vh-80px)]'>
          <div className='bg-[url(./assets/imgs/noTask.png)] bg-no-repeat bg-cover w-[200px] h-[200px] md:h-[400px] md:w-[400px] mx-auto'></div>
          <div className='text-base md:text-3xl font-Fredoka-SemiBold text-dark-green'>
            What do you do today ?
          </div>
        </div> */}

        {/* tasks */}
        <div className='h-[calc(100vh-130px)] md:h-[calc(100vh-160px)] overflow-y-auto overflow-x-clip w-4/5 md:w-2/3 bg-white/15 mx-auto my-10 px-4 md:px-10 rounded-2xl backdrop-blur-md'>
          <TodoItem />
        </div>

        {/* fotter */}
        <div className='fixed w-full h-10 md:h-20 left-0 bottom-0 bg-dark-green z-10'>
          <div className='relative rounded-full w-14 h-14 md:w-18 md:h-18 left-1/2 -top-2 -translate-x-1/2 -translate-y-1/2 bg-lime-green'>
            <HiOutlinePlusCircle className=' absolute w-12 h-12 md:w-16 md:h-16 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-dark-green cursor-pointer' />
          </div>
        </div>

      </div>
    </>
  )
}

export default App
