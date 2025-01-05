import { useTodosContext } from '../contexts/TodosContextProvider';

export default function DeleteButton({ id }: { id: number }) {
  const { deleteTodo } = useTodosContext();

  return (
    <button
      className="bg-[#473a2b] p-1 rounded-md"
      onClick={(e) => {
        e.stopPropagation(); // Prevent parent click handlers
        deleteTodo(id);
      }}
    >
      ❌
    </button>
  );
}
