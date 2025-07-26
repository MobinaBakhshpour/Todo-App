import React from 'react'
import { HiOutlineTrash, HiOutlinePencilSquare, HiCheck } from "react-icons/hi2";

export default function TodoItem() {
    return (
        <div className="w-full h-[50px] md:h-16 mx-auto my-10 px-1.5 md:px-2.5 rounded-sm bg-lime-green border border-dark-green  text-[18px] md:text-[25px] text-dark-green flex justify-between items-center">
            <h1>do ts</h1>
            <div className='flex justify-between items-center w-16 md:w-[100px] *:w-[18px] *:h-[18px] md:*:w-[25px] md:*:h-[25px]'>
                <HiCheck />
                <HiOutlinePencilSquare />
                <HiOutlineTrash />
            </div>
        </div>
    )
}


