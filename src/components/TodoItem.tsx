import { useState } from "react";
import type { Todo } from "../types/todo";

interface TodoItemProps {
  todo: Todo;
  onEdit: (id: string, text: string) => void;
  onToggle: (id: string) => string;
  onDelete: (id: string) => string;
}

export default function TodoItem({
  todo,
  onEdit,
  onToggle,
  onDelete,
}: TodoItemProps) {
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const [editText, setEditText] = useState<string>(todo.text);

  const handleEdit = () => {
    if (editText.trim()) {
      onEdit(todo.id, editText.trim());
    }

    setIsEditing(false);
  };
  return (
    <>
      <li className="flex items-center justify-between p-2">
        {isEditing ? (
          <input
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onBlur={handleEdit}
            onKeyDown={(e) => e.key === "Enter" && handleEdit()}
            autoFocus
          />
        ) : (
          <span onDoubleClick={() => setIsEditing(true)}>{todo.text}</span>
        )}

        <div className="flex gap-2">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(todo.id)}
          />
          <button onClick={() => onDelete(todo.id)} className="text-red-500">
            Delete
          </button>
        </div>
      </li>
    </>
  );
}
