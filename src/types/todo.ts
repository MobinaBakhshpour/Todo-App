type GroupType = 'work' | 'personal' | 'shopping' | 'health' | 'other' | '';

export interface Todo {
    id: number,
    title: string,
    completed: boolean,
    group: GroupType,
}