import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { StoreProps } from "../../../store/reducer";
import { updateTodo } from "../../../store/action";
interface ToDoDeleteProps {
  id: string;
  status: boolean
}
export default function ToDoDelete({ id, status }: ToDoDeleteProps) {
  const todoList = useSelector((store: StoreProps) => store.todo);
  const dispatch = useDispatch();
  const deleteHandler = () => {
    if(!window.confirm("Are you sure to remove?")) return
    if (!status) {
        window.alert("You can't delete because todo item is not completed")
        return
    }
    const updatedTodo = todoList.filter((toDo) => toDo.id !== id)
    dispatch(updateTodo(updatedTodo));
  };

  return <button onClick={deleteHandler}>␡</button>;
}
