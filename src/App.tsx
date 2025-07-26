import './App.css';
import { HiOutlinePlusCircle } from "react-icons/hi2";
import TodoItem from './components/TodoItem';
import type { Todo } from './types/todo';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form'

function App() {

  const [showAddTodoWindow, setShowAddTodoWindow] = useState('hidden')
  const [title, setTitle] = useState('')
  const [group, setGroup] = useState('')
  const [todos, setTodos] = useState<Todo[]>([])
  const { register, handleSubmit, formState: { errors } } = useForm()

  useEffect(() => {
    console.log(todos);

  }, [todos])

  const closeAddTodoWindow = () => {
    setShowAddTodoWindow('hidden')
    setTitle('')
    setGroup('')
    if (errors) {
      Object.keys(errors).forEach(key => {
        delete errors[key];
      })
    }
  }

  const addNewTodoHandler = () => {
    console.log(title, group);
    if (title && group !== '') {
      const newTodo: Todo = {
        id: todos.length + 1,
        title: title.trim(),
        completed: false,
        group
      }
      setTodos([newTodo, ...todos])
      setShowAddTodoWindow('hidden')
      setTitle('')
      setGroup('')
    } else { }


  }

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

        {/* add new Todo*/}
        <div className={`${showAddTodoWindow} flex items-center justify-center left-0 top-0 w-full h-screen z-20 bg-zinc-4000/20 backdrop-blur-sm`}>
          <div className="w-[300px] md:w-[400px] h-[350px] bg-dark-green rounded-2xl px-8 flex flex-col justify-evenly items-start *:w-full">
            <div className='*:w-full *:rounded-sm'>
              <input type="text" {...register('title', { required: 'title is required' })} placeholder='Title' className='bg-pink text-dark-green px-2.5 h-9' value={title} onChange={(e) => setTitle(e.target.value)} autoFocus={true} />
              {errors.title && <p className='text-pink font-Fredoka-Light text-sm'>{errors.title.message}</p>}
            </div>
            <div className='*:w-full *:rounded-sm'>
              <select name="selectGroup" {...register('group', { required: 'select an item, please' })} id="" value={group} onChange={(e) => setGroup(e.target.value)} className='bg-pink text-dark-green cursor-pointer px-2.5 h-9'>
                <option value="" className='text-zinc-500'>Select an Item</option>
                <option value="work">Work</option>
                <option value="personal">Personal</option>
                <option value="shopping">Shopping</option>
                <option value="health">Health</option>
                <option value="other">Other</option>
              </select>
              {errors.group && <p className='text-pink font-Fredoka-Light text-sm'>{errors.group.message}</p>}
            </div>
            <div className='flex justify-end items-center gap-3 select-none text-pink *:cursor-pointer'>
              <div onClick={closeAddTodoWindow}>Cansel</div>
              <div onClick={handleSubmit(addNewTodoHandler)}>OK</div>
            </div>
          </div>
        </div>

        {/* fotter */}
        <div className='fixed w-full h-10 md:h-20 left-0 bottom-0 bg-dark-green z-10'>
          <div className='relative rounded-full w-14 h-14 md:w-18 md:h-18 left-1/2 -top-2 -translate-x-1/2 -translate-y-1/2 bg-lime-green'>
            <HiOutlinePlusCircle className=' absolute w-12 h-12 md:w-16 md:h-16 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-dark-green cursor-pointer' onClick={() => setShowAddTodoWindow('fixed')} />
          </div>
        </div>

      </div>
    </>
  )
}

export default App
