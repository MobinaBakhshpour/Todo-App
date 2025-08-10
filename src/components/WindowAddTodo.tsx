import { useEffect, useState } from "react";
import { HiChevronDown } from "react-icons/hi2";

export default function WindowAddTodo({ isShow, register, handleSubmit, errors, title, setTitle, group, setGroup, closeAddTodoWindow, addNewTodoHandler, reset }: any) {
    const [open, setOpen] = useState(false);

    const options = [
        { value: "", label: "Select an Item" },
        { value: "work", label: "Work" },
        { value: "personal", label: "Personal" },
        { value: "shopping", label: "Shopping" },
        { value: "health", label: "Health" },
        { value: "other", label: "Other" }
    ];

    // register رو اینجا صدا می‌زنیم تا به‌دسترسی به onChange/name دسترسی داشته باشیم
    const groupRegister = register("group", { required: "select an item, please" });

    useEffect(() => {
        if (isShow) {
            // ریست state ها
            setGroup("");
            setTitle("");
            // ریست RHF
            reset({ title: "", group: "" });
        }
    }, [isShow, reset]);

    // اگر parent از بیرون مقدار group رو تغییر داد، فرم هم آپدیت بشه
    useEffect(() => {
        if (groupRegister && typeof groupRegister.onChange === "function") {
            groupRegister.onChange({ target: { name: groupRegister.name, value: group } });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [group]);

    const handleSelect = (val: string) => {
        setGroup(val);
        // مهم: به RHF اعلام کنیم که مقدار تغییر کرده
        if (groupRegister && typeof groupRegister.onChange === "function") {
            groupRegister.onChange({ target: { name: groupRegister.name, value: val } });
        }
        setOpen(false);
    };

    return (
        <div className={`${isShow} flex items-center justify-center left-0 top-0 w-full h-screen z-20 bg-zinc-400/20 backdrop-blur-sm`}>
            <div className="w-[300px] md:w-[400px] h-[350px] bg-dark-green rounded-2xl px-8 flex flex-col justify-evenly items-start *:w-full">
                {/* Title */}
                <div className="*:w-full *:rounded-sm">
                    <input type="text" {...register("title", { required: "title is required" })} placeholder="Title" className="bg-pink text-dark-green px-2.5 h-9" value={title} onChange={(e) => setTitle(e.target.value)} autoFocus />
                    {errors.title && <p className="text-pink font-Fredoka-Light text-sm">{errors.title.message}</p>}
                </div>

                {/* Custom Select */}
                <div className="relative w-full">
                    <button type="button" onClick={() => setOpen((s) => !s)} className="w-full bg-pink text-dark-green cursor-pointer px-3 h-9 flex items-center justify-between rounded-sm text-sm sm:text-base">
                        {options.find((o) => o.value === group)?.label || "Select an Item"}
                        <span className="ml-2"><HiChevronDown /></span>
                    </button>

                    {open && (
                        <ul className="absolute top-full left-0 w-full bg-pink text-dark-green rounded-sm shadow-md mt-1 max-h-48 overflow-auto text-sm sm:text-base z-10">
                            {options.map((opt) => (
                                <li key={opt.value} onClick={() => handleSelect(opt.value)} className={`px-3 py-2 cursor-pointer hover:bg-pink hover:text-dark-green ${opt.value === "" ? "text-gray-500" : ""}`}>
                                    {opt.label}
                                </li>
                            ))}
                        </ul>
                    )}

                    {/* hidden input که react-hook-form باهاش کار می‌کنه */}
                    <input type="hidden" {...groupRegister} value={group} />

                    {errors.group && <p className="text-pink font-Fredoka-Light text-sm">{errors.group.message}</p>}
                </div>

                {/* Buttons */}
                <div className="flex justify-end items-center gap-3 select-none text-pink *:cursor-pointer">
                    <div onClick={closeAddTodoWindow}>Cancel</div>
                    <div onClick={handleSubmit(addNewTodoHandler)}>OK</div>
                </div>
            </div>
        </div>
    );
}
