import { useState } from "react";
import { postTodo } from "../../api/todoAPI";

const initState = {title:''}


const Todo2Input = ({changeView}) => {

  const [todo, SetTodo] = useState(initState)

  const handleChangeTodo = (e) => {

    todo[e.target.name] = e.target.value
    SetTodo({...todo})
  }


  return ( 
    <div className="w-full h-[100vh] bg-yellow-300">
      <div className="text-3xl">Todo2 Input</div>
      <div className="text-2xl m-2 p-2 border-2">
        <input type="text" name="title" value={todo.title} onChange={handleChangeTodo}></input>
      </div>
      <button onClick={() => {
        postTodo(todo).then(newTodo => {
          alert("새로운 TODO" + newTodo.tno)
          changeView("list")
        }) 
       } }>REGISTER</button>
    </div>
   );
}
 
export default Todo2Input;