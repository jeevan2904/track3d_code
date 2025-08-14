import { useState, type FormEvent } from "react";

interface TodoInputProps {
  onAdd: (text: string) => void;
}

export default function TodoInput({ onAdd }: TodoInputProps) {
  const [text, setText] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text.trim());
    setText("");
  };

  return (
    <>
      <form className="flex gap-2 mb-4" onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new Todo"
          className="border rounded p-2 flex-1"
        />
        <button type="submit" className="text-black bg-blue-500 px-4 rounded">
          Add
        </button>
      </form>
    </>
  );
}
