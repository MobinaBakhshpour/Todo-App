import type React from 'react';
import { useTodoStore, type GroupType } from '../store/todoStore';
import { HiMiniBars3BottomRight, HiOutlineBriefcase, HiOutlineShoppingCart, HiMiniEllipsisHorizontal } from "react-icons/hi2";
import { PiPersonArmsSpreadLight, PiPulseLight } from "react-icons/pi";
import type { JSX } from 'react';
export default function TodoFilter() {
    const { todos, selectedGroup, setGroup } = useTodoStore();


    const groups: {
        name: 'all' | GroupType;
        icon: JSX.Element
    }[] = [
            { name: 'all', icon: <HiMiniBars3BottomRight /> },
            { name: 'work', icon: <HiOutlineBriefcase /> },
            { name: 'personal', icon: <PiPersonArmsSpreadLight /> },
            { name: 'shopping', icon: <HiOutlineShoppingCart /> },
            { name: 'health', icon: <PiPulseLight /> },
            { name: 'other', icon: <HiMiniEllipsisHorizontal /> }
        ]

    return (
        <div className='w-4/5 md:w-2/3 m-auto'>
            <div className='flex justify-between items-center px-5 my-6'>
                {groups.map(group => (
                    <div className="text-dark-green relative group" key={group.name} onClick={() => setGroup(group.name)}> {group.icon}
                        <div className="absolute top-full left-2/2 -translate-x-1/2 px-1.5 py-1 text-[10px] bg-dark-green text-pink rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">{group.name}</div>
                    </div>

                ))}
            </div>
        </div>
    )
}
