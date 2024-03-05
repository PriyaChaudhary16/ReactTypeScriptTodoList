import { useSelector, useDispatch } from "react-redux";
import { StoreProps } from "../../../store/reducer";
import { updateTodo } from "../../../store/action";

interface ToDoMarkerProps {
  id: string;
}

function ToDoMarker({ id }: ToDoMarkerProps) {
  const todoList = useSelector((store: StoreProps) => store.todo);
  const dispatch = useDispatch()
  const markHandler = () => {
    let updatedTodo = todoList.map((toDo) => {
      if (toDo.id !== id) return toDo;
      else {
        return {
          ...toDo,
          isCompleted: !toDo.isCompleted,
        };
      }
    }); 
    dispatch(updateTodo(updatedTodo))
  };

  return <button onClick={markHandler}>✓</button>;
}

export default ToDoMarker;
