import type { Todo } from "../types/todo";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: Todo[];
  onEdit: (id: string, text: string) => void;
  onToggle: (id: string) => string;
  onDelete: (id: string) => string;
}

export default function TodoList({
  todos,
  onToggle,
  onEdit,
  onDelete,
}: TodoListProps) {
  return (
    <>
      <ul className="divide-y">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </>
  );
}
