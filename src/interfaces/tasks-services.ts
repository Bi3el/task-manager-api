export interface createTaskProps {
    title: string;
    description: string;
    images: Array<string>;
}

export interface UpdateTaskProps {
    id: string;
    title: string;
    description: string;
    images: Array<string>;
}

export interface changeTaskCompletionProps {
    id: string;
}

export interface deleteTaskProps {
    id: string;
}