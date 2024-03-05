import { ChangeEvent, KeyboardEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { updateTodo } from "../../../store/action";
import { useSelector } from "react-redux";

function ToDoCreater() {
  const dispatch = useDispatch();
  const todoStore = useSelector((s: any) => s.todo);

  const [toDo, setToDo] = useState<string>("");

  const createdAt = () => {
    const d = new Date();
    const currentTime = `${d.getDate()}/${
      d.getMonth() + 1
    }/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
    return currentTime;
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      // Save to do and clear the input

      dispatch(
        updateTodo([
          {
            createdAt: createdAt(),
            id: `${Date.now()}`,
            isCompleted: false,
            value: toDo,
          },
          ...todoStore,
        ])
      );

      setToDo("");
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setToDo(e.target.value);
  };

  return (
    <div data-testid="creater-container">
      <h3>Create a new TODO.</h3>
      <input
        type="text"
        value={toDo}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

export default ToDoCreater;
