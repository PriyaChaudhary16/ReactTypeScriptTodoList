import { useSelector } from "react-redux";
import { ToDoProps } from "../toDo.props";
import ToDoMarker from "../toDoMarker/toDoMarker";
import ToDoDelete from "../toDoDelete/ToDoDelete";
import { useEffect, useState } from "react";
import ToDoDeleteMultiple from "../ToDoDeleteMultiple";

const ToDoList = () => {
  const [isCompleted, setIsCompleted] = useState<boolean>(false)
  const todo = useSelector((s: any) => s.todo);
  const todoSorted = todo.sort((a: ToDoProps, b: ToDoProps) => Number(a.isCompleted) - Number(b.isCompleted))
  const isCompletedTodoList = todoSorted.filter((item:any) => item.isCompleted !== false)
  // console.log({isCompletedTodoList: isCompletedTodoList.length, todoSorted : todoSorted.length})
  useEffect(():any=>{
    if(todoSorted.length > 0){
      if(isCompletedTodoList.length === todoSorted.length){
        setIsCompleted(true)
      }else{
        setIsCompleted(false)
      }
    }
  },[todo])
  return (
    <div
      className="list-contaer"
      style={{ maxWidth: "500px", margin: "20px auto" }}
    >
      <table style={{width:"100%", borderCollapse:"collapse"}}>
        <tr>
          <th style={{padding:"8px", textAlign: "left", border:"1px solid #dddddd"}}>ToDo</th>
          <th style={{padding:"8px", textAlign: "left", border:"1px solid #dddddd"}}>Date</th>
          <th style={{padding:"8px", textAlign: "left", border:"1px solid #dddddd"}}>Action {isCompleted ? <ToDoDeleteMultiple /> : ""} </th>
        </tr>
        {todoSorted.map((item: ToDoProps) => {
          return (
            <tr key={`todo_${item.id}`} style={{textDecoration: item.isCompleted ? "line-through" : "",backgroundColor: item.isCompleted ? "#dddddd" : ''}}>
              <td style={{padding:"8px", textAlign: "left", border:"1px solid #dddddd"}}>{item.value}</td>
              <td style={{padding:"8px", textAlign: "left", border:"1px solid #dddddd"}}>{item.createdAt}</td>
              <td style={{padding:"8px", textAlign: "left", border:"1px solid #dddddd"}}>
                <div style={{display:"flex", alignItems:"center"}}>
                  <div style={{ marginRight: "10px" }}>
                    <ToDoMarker id={item.id} />
                  </div>
                  <div style={{ marginRight: "10px" }}>
                    <ToDoDelete id={item.id} status={item.isCompleted}/>
                  </div>
                </div>
              </td>
            </tr>
          );
        })}
        
      </table>
    </div>
  );
};

export default ToDoList;
