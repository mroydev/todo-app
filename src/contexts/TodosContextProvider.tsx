import { createContext, useContext, useState } from 'react';
import { Todo } from '../lib/types';
import { initialTodos } from '../constants';

interface TodosContextValue {
  todos: Todo[];

  totalCount: number;
  completedCount: number;
  addTodo: (content: string) => void;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodosContext = createContext<TodosContextValue | null>(null);

export default function TodosContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // State
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  // Derived state
  const totalCount = todos.length;
  const completedCount = todos.filter((todo) => todo.isCompleted).length;

  // Actions
  const addTodo = (content: string) => {
    if (!content.trim()) return; // Avoid empty todos
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        content,
        isCompleted: false,
      },
    ]);
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <TodosContext.Provider
      value={{
        todos,
        totalCount,
        completedCount,
        addTodo,
        toggleTodo,
        deleteTodo,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useTodosContext = () => {
  const context = useContext(TodosContext);
  if (!context) {
    throw new Error(
      'useTodosContext must be used within a TodosContextProvider'
    );
  }
  return context;
};
