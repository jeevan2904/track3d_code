interface TodoFiltersProps {
  filter: "all" | "active" | "completed";
  setFilter: (filter: "all" | "active" | "completed") => void;
  onClearCompleted: () => void;
  itemsLeft: number;
}

export default function TodoFilters({
  filter,
  setFilter,
  onClearCompleted,
  itemsLeft,
}: TodoFiltersProps) {
  return (
    <>
      <div className="flex justify-between items-center mt-4">
        <span className="mx-3">{itemsLeft} items Left</span>

        <div className="flex gap-2">
          <button
            className={filter === "all" ? "font-bold" : ""}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            className={filter === "active" ? "font-bold" : ""}
            onClick={() => setFilter("active")}
          >
            Active
          </button>
          <button
            className={filter === "completed" ? "font-bold" : ""}
            onClick={() => setFilter("completed")}
          >
            Completed
          </button>
        </div>

        <button onClick={onClearCompleted} className="ms-3">
          Clear Completed
        </button>
      </div>
    </>
  );
}
