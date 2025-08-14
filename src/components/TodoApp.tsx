import { useState } from "react";
import TodoInput from "./TodoInput";
import type { Todo } from "../types/todo";
import { useLocalStorage } from "../hooks/seLocalStorage";
import TodoList from "./TodoList";
import TodoFilters from "./TodoFilters";

export default function TodoApp() {
  const [todos, setTodos] = useLocalStorage<Todo[]>("todos", []);
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

  const addTodo = (text: string) => {
    const newTodo: Todo = { id: crypto.randomUUID(), text, completed: false };

    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id: string, text: string) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, text } : todo)));
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
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
      <div className="mx-auto max-w-lg mt-10 bg-white shadow rounded p-4">
        <h1 className="text-2xl font-bold mb-4">Todo List</h1>

        <TodoInput onAdd={addTodo} />
        <TodoList
          todos={filteredTodos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
          onEdit={editTodo}
        />

        <TodoFilters
          filter={filter}
          setFilter={setFilter}
          onClearCompleted={clearCompleted}
          itemsLeft={todos.filter((t) => !t.completed).length}
        />
      </div>
    </>
  );
}
