import { useTodosContext } from '../contexts/TodosContextProvider';
import DeleteButton from './DeleteButton';

export default function TodoList() {
  const { todos, toggleTodo, totalCount } = useTodosContext();

  return (
    <ul className="col-[1/2] row-[2/3] bg-[#fff] [scrollbar-width:thin] relative">
      {totalCount === 0 ? (
        <li className="h-full flex justify-center items-center font-semibold">
          Start by adding a todo
        </li>
      ) : null}

      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex justify-between items-center border-b border-[rgba(0,0,0,0.08)] px-[25px] py-[18px]"
          onClick={() => toggleTodo(todo.id)}
        >
          <span
            className={`${todo.isCompleted ? 'line-through text-[#ccc]' : ''}`}
          >
            {todo.content}
          </span>
          <DeleteButton id={todo.id} />
        </li>
      ))}
    </ul>
  );
}
