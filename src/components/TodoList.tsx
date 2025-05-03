import { createSignal, For } from "solid-js";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
}

function TodoItem({ todo, onToggle }: TodoItemProps) {
  return (
    <div class="flex items-center gap-2 p-2 border rounded">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      <span class={todo.completed ? "line-through" : ""}>{todo.text}</span>
    </div>
  );
}

function TodoList() {
  const [todo, setTodo] = createSignal("");
  const [todos, setTodos] = createSignal<Todo[]>([]);
  let nextId = 1;

  const handleInput = (e: Event) => {
    const target = e.target as HTMLInputElement;
    setTodo(target.value);
  };

  const handleAdd = () => {
    if (!todo().trim()) return;
    setTodos([...todos(), { id: nextId++, text: todo(), completed: false }]);
    setTodo("");
  };

  const handleToggle = (id: number) => {
    setTodos(
      todos().map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  return (
    <div class="max-w-md mx-auto p-4">
      <div class="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Enter a todo content"
          value={todo()}
          onInput={handleInput}
          class="flex-1 p-2 border rounded"
        />
        <button
          onClick={handleAdd}
          class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add
        </button>
      </div>
      <div class="space-y-2">
        <For each={todos()}>
          {(todo) => <TodoItem todo={todo} onToggle={handleToggle} />}
        </For>
      </div>
    </div>
  );
}

export default TodoList;
