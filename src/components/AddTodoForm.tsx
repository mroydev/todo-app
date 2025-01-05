import { useState } from 'react';
import Button from './Button';
import { useTodosContext } from '../contexts/TodosContextProvider';

export default function AddTodoForm() {
  const [todoText, setTodoText] = useState('');
  const { addTodo } = useTodosContext();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo(todoText);
    setTodoText(''); // Clear input after adding
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-[#231d15] text-[16px] font-medium">Add a todo</h2>
      <input
        type="text"
        autoFocus
        className="h-[45px] w-full border-[1px] border-[rgba(0,0,0,0.12)] rounded-[5px] ml-[0] mr-[0] my-[9px] px-[16px] py-[0] text-[14px]"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        placeholder="Enter your todo"
      />
      <Button>Add to List</Button>
    </form>
  );
}
