
export default function NoTodo() {
    return (
        <div className='w-full flex text-center justify-center items-center gap-3 flex-col h-[calc(100vh-65px)] md:h-[calc(100vh-80px)]'>
            <div className='bg-[url(./assets/imgs/noTask.png)] bg-no-repeat bg-cover w-[200px] h-[200px] md:h-[400px] md:w-[400px] mx-auto'></div>
            <div className='text-base md:text-3xl font-Fredoka-SemiBold text-dark-green'>
                What do you do today ?
            </div>
        </div>
    )
}
