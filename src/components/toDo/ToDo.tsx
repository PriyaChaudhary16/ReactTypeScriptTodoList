import ToDoList from "./ToDoList/ToDoList";
import ToDoCreater from "./toDoCreater/ToDoCreater";

const ToDo = () => {
    return (<div className="todo-container" data-testid="todo-container">
        <h1 data-testid="todo-heading">TODO List.</h1>
        
        <ToDoCreater />

        <ToDoList />

    </div>)
}

export default ToDo;