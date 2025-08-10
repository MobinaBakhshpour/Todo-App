import { useTodoStore, type GroupType } from '../../store/todoStore';
import { HiMiniBars3BottomRight, HiOutlineBriefcase, HiOutlineShoppingCart, HiMiniEllipsisHorizontal } from "react-icons/hi2";
import { PiPersonArmsSpreadLight, PiPulseLight } from "react-icons/pi";
import type { JSX } from 'react';
import './TodoFilter.css'
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
            <div className='flex justify-between items-center px-5 py-1 mt-3 md:fixed md:right-0 md:bottom-24 md:flex-col md:gap-2.5'>
                {groups.map(group => (
                    <div className={`filterIcon p-1 ${group.name === selectedGroup ? 'text-pink-300' : 'text-dark-green'} bg-white/35 rounded-md backdrop-blur-md relative group cursor-pointer z-10`} key={group.name} onClick={() => setGroup(group.name)}> {group.icon}
                        <div className={`absolute top-full md:top-1/2 left-2/2 md:-left-2/2 -translate-x-1/2 px-1.5 py-1 text-[10px] bg-dark-green text-pink rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap`}>{group.name}</div>
                    </div>

                ))}
            </div>
        </div>
    )
}
