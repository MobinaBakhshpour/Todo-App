import { HiOutlineTrash, HiOutlinePencilSquare, HiCheck } from "react-icons/hi2";

export default function TodoItem({ title, id, completed, toggleTodo, deleteTodo }: any) {
    return (
        <div className={`w-full h-[50px] md:h-16 mx-auto my-10 px-1.5 md:px-2.5 rounded-sm ${completed ? 'bg-dark-green/20  text-zinc-500' : 'bg-lime-green'} border border-dark-green  text-[18px] md:text-[25px] text-dark-green flex justify-between items-center`}>
            <h1 className={`${completed && 'line-through'}`}>{title}</h1>
            <div className='flex justify-between items-center w-16 md:w-[100px] *:w-[18px] *:h-[18px] md:*:w-[25px] md:*:h-[25px]'>
                <HiCheck onClick={() => toggleTodo(id)} />
                <HiOutlinePencilSquare className={`${completed && ''}`} />
                <HiOutlineTrash onClick={() => deleteTodo(id)} />
            </div>
        </div>
    )
}


