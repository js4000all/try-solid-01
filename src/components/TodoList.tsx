import { createSignal } from 'solid-js';

function TodoList() {
  const [todo, setTodo] = createSignal('');

  const handleInput = (e: Event) => {
    const target = e.target as HTMLInputElement;
    setTodo(target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a todo content"
        value={todo()}
        onInput={handleInput}
      />
      <p>Current input: {todo()}</p>
    </div>
  );
}

export default TodoList;