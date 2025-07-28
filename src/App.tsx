import './App.css';
import { HiOutlinePlusCircle } from "react-icons/hi2";
import { CiTimer } from "react-icons/ci";
import NoTodo from './components/NoTodo';
import TodoItem from './components/TodoItem';
import WindowAddTodo from './components/WindowAddTodo';
import { useState } from 'react';
import { useForm } from 'react-hook-form'
import { useTodoStore } from './store/todoStore';

function App() {

  const [showAddTodoWindow, setShowAddTodoWindow] = useState('hidden')
  const [title, setTitle] = useState('')
  const [group, setGroup] = useState('')
  const { register, handleSubmit, formState: { errors } } = useForm()

  const { todos, addNewTodo, toggleTodo, deleteTodo } = useTodoStore()

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
    if (title.trim() && group !== '') {
      addNewTodo(title, group)
      setShowAddTodoWindow('hidden')
      setTitle('')
      setGroup('')
    }


  }

  return (
    <>
      <div>

        {todos.length ? (
          /* tasks */
          <>
            <div className="w-4/5 md:w-2/3 mx-auto mt-3">
              <div className="flex items-center justify-between w-full rounded-xl px-4 py-2 md:py-3 bg-dark-green text-pink font-Fredoka-Light">
                <div className="text-base md:text-xl font-medium">
                  Manage your <br className="block md:hidden" /> time well
                </div>
                <div className="flex items-center space-x-2">
                  <CiTimer className='w-7 h-7 md:w-9 md:h-9' />
                </div>
              </div>
            </div>


            <div className='h-[calc(100vh-74px-88px)] md:h-[calc(100vh-104px-84px)] overflow-y-auto overflow-x-clip w-4/5 md:w-2/3 bg-white/15 mx-auto my-3 px-4 md:px-10 rounded-2xl backdrop-blur-md'>
              {todos.map((todo: any) => (
                <TodoItem key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
              ))}
            </div>
          </>
        ) : (
          /* no task */
          <NoTodo />
        )
        }

        {/* add new Todo window */}
        <WindowAddTodo isShow={showAddTodoWindow} register={register} errors={errors} title={title} setTitle={setTitle} group={group} setGroup={setGroup} handleSubmit={handleSubmit} addNewTodoHandler={addNewTodoHandler} closeAddTodoWindow={closeAddTodoWindow} />

        {/* fotter */}
        <div className='fixed w-full h-10 md:h-20 left-0 bottom-0 bg-dark-green z-10'>
          <div className='relative rounded-full w-14 h-14 md:w-18 md:h-18 left-1/2 -top-2 -translate-x-1/2 -translate-y-1/2 bg-lime-green'>
            <HiOutlinePlusCircle className=' absolute w-12 h-12 md:w-16 md:h-16 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-dark-green cursor-pointer' onClick={() => setShowAddTodoWindow('fixed')} />
          </div>
        </div>

      </div >
    </>
  )
}

export default App
