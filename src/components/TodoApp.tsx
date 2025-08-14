import { useState } from "react";
import TodoInput from "./TodoInput";
import type { Todo } from "../types/todo";
import { useLocalStorage } from "../hooks/seLocalStorage";
import TodoList from "./TodoList";

export default function TodoApp() {
  const [todos, setTodos] = useLocalStorage<Todo[]>("todos", []);
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

  const addTodo = (text: string) => {
    const newTodo: Todo = { id: crypto.randomUUID(), text, completed: false };

    setTodos([...todos, newTodo]);
  };

  const filteredTodos = todos.filter((todo) =>
    filter === "all"
      ? true
      : filter === "active"
      ? !todo.completed
      : todo.completed
  );

  return (
    <>
      <div>
        <h1>Todo List</h1>

        <TodoInput onAdd={addTodo} />
        {/* <TodoList todos={filteredTodos} onToggle={}/> */}
      </div>
    </>
  );
}
