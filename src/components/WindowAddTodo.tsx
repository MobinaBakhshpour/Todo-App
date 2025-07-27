export default function WindowAddTodo({ isShow, register, handleSubmit, errors, title, setTitle, group, setGroup, closeAddTodoWindow, addNewTodoHandler }: any) {
    return (
        <div className={`${isShow} flex items-center justify-center left-0 top-0 w-full h-screen z-20 bg-zinc-4000/20 backdrop-blur-sm`}>
            <div className="w-[300px] md:w-[400px] h-[350px] bg-dark-green rounded-2xl px-8 flex flex-col justify-evenly items-start *:w-full">
                <div className='*:w-full *:rounded-sm'>
                    <input type="text" {...register('title', { required: 'title is required' })} placeholder='Title' className='bg-pink text-dark-green px-2.5 h-9' value={title} onChange={(e) => setTitle(e.target.value)} autoFocus={true} />
                    {errors.title && <p className='text-pink font-Fredoka-Light text-sm'>{errors.title.message}</p>}
                </div>
                <div className='*:w-full *:rounded-sm'>
                    <select {...register('group', { required: 'select an item, please' })} id="" value={group} onChange={(e) => setGroup(e.target.value)} className='bg-pink text-dark-green cursor-pointer px-2.5 h-9'>
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
    )
}
