import { create } from "zustand";

interface Todo {
  id: number;
  text: string;
}

interface TodoState {
  todos: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: number) => void;
}

export const useTodoStore = create<TodoState>((set) => ({
  todos: [],

  addTodo: (text: string) =>
    set((state) => ({
      todos: [...state.todos, { id: Date.now(), text }],
    })),

  removeTodo: (id: number) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
}));
