import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { useId } from 'react';

export type GroupType = 'work' | 'personal' | 'shopping' | 'health' | 'other' | '';

export interface Todo {
    id: number,
    title: string,
    completed: boolean,
    group: GroupType,
}

interface TodoStore {
    todos: Todo[],
    addNewTodo: (titile: string, group: GroupType) => void,
    toggleTodo: (id: number) => void,
    deleteTodo: (id: number) => void,
    selectedGroup: GroupType | 'all',
    setGroup: (group: GroupType | 'all') => void
}

export const useTodoStore = create<TodoStore>()(
    persist(
        (set) => ({
            todos: [],
            selectedGroup: 'all',
            addNewTodo: (title: string, group: GroupType) => {
                set((state) => ({
                    todos: [...state.todos, { id: Date.now(), title, completed: false, group }]
                }))
            },
            toggleTodo: (id: number) => {
                set((state) => ({
                    todos: state.todos.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo)
                }))
            },
            deleteTodo: (id: number) => {
                set((state) => ({
                    todos: state.todos.filter((todo) => todo.id !== id)
                }))
            },
            setGroup: (group) => set({ selectedGroup: group }),

        }),
        {
            name: 'todoItems-App',
        })

)