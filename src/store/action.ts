import { ToDoProps } from "../components/toDo/toDo.props";

export const UPDATE_TODO = "UPDATE_TODO";

export const updateTodo = (data: ToDoProps[]) => {
  return {
    type: UPDATE_TODO,
    payload: data,
  };
};
