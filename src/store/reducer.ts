import { AnyAction } from "redux";
import { UPDATE_TODO } from "./action";
import { ToDoProps } from "../components/toDo/toDo.props";

export interface StoreProps {
  todo: ToDoProps[];
}

const initialState: StoreProps = {
  todo: [],
};

export default function Reducer(
  state = initialState,
  { type, payload }: AnyAction
) {
  switch (type) {
    case UPDATE_TODO:
      return { ...state, todo: payload };

    default:
      return state;
  }
}
