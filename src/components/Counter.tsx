import { Todo } from '../lib/types';

type Props = {
  todos: Todo[];
};

export default function Counter({ todos }: Props) {
  const completedTodos = todos.filter((todo) => todo.isCompleted).length;
  return (
    <p>
      <strong>{completedTodos}</strong>/{todos.length} todos completed
    </p>
  );
}
