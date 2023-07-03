import { useEffect, useState } from "react";

const Todo1Read = ({current, remove, modify}) => {

  //전달 받는 current가 나한테는 상태가 되어야함
  //원래 상태를 props로 받아서 새로운 상태로 넣어줌
  const [todo, setTodo] = useState(current)

  //비동기통신이면 무조건 useEffect
  //상태가 유지되는 애가 있는데 props에 따라서 값을 바꿔주고 싶을 때 사용
  useEffect(() => {
    setTodo(current)
  }, [ current ])

  if(!todo){
    return <div>Not</div>
  }

  return (
    <div className="w-full bg-red-300">
      <div className="font-bold">Todo1 Read</div>
      <div>
        {todo.tno}
      </div>
      <div>
        <input
          className="m-3 p-3 bg-green-300"
          type="text"
          name="title"
          value={todo.title}
          onChange={(e) => {
            todo.title = e.target.value
            setTodo({...todo})
          }}
        />
      </div>
      <div>
        <button
          className="m-3 p-2 bg-blue-300 rounded-lg border-2 border-grey-400"
          onClick={() => modify(todo)}
        >
          MOD
        </button>
        <button
          className="m-3 p-2 bg-red-600 rounded-lg border-2 border-grey-400"
          onClick={() => remove(todo.tno)}
        >
          DEL
        </button>
      </div>
    </div>
  );
}

export default Todo1Read;