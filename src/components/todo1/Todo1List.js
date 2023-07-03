const Todo1List = ({todos, requestView, saveAll}) => {
  return ( 
    <div className="w-full bg-blue-300">
      <div className="font-bold">Todo1 List</div>
      <ul>
        {todos.map( t => 
        <li key={t.tno}
        onClick= {() => requestView(t.tno)}> 
        {t.tno} {t.title} 
        </li>)}
      </ul>
      <div>
        <button className="m-2 p-2 bg-yellow-400 rounded-lg border-2 border-grey-400"
        onClick={() => saveAll(todos)}
        >SAVE ALL</button>
      </div>
    </div>
   );
}
 
export default Todo1List;