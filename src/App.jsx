import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { v4 as uuid} from "uuid";
import { TrashIcon } from '@heroicons/react/16/solid';


function App() {
  const [todo,settodo] = useState('');
const [chores,setchores] = useState([]);
  const onInputChange = (e) => {
    settodo(e.target.value);
  }
// console.log(todo);
  const onClickToDo = () =>{
    var flag = todo.length>0?flag=true:flag=false;
     if(flag){
      setchores([...chores,{id:uuid(),chorename: todo,isCompleted:false}]);
      settodo(""); 
     } 
  }

  
   const onClickDelete = (id) =>{
          const filteredChores = chores.filter(chore => chore.id!==id);
          setchores(filteredChores);
   }

   const onClickComplete = (id) => {
         const updatedChores = chores.map(chore => chore.id===id ? {...chore,isCompleted:!(chore.isCompleted)}   :chore);
        //  console.log(updatedChores);
        setchores(updatedChores);
   } 
  
  
  return (
    <div className='flex flex-col bg-slate-800 flex-col items-center min-h-screen pt-20'> 
    <h1 className='text-5xl font-semibold text-center mb-4 text-white'> To-Do List</h1>
    {/* SHARED WIDTH CONTAINER */}
<div className="w-[400px]">

  {/* Input + Button */}
  <div className="flex gap-3 mb-6">
    <input
      value={todo}
      onChange={onInputChange}
      placeholder="Add ur chores..."
      className="flex-1 border bg-gray-200 text-black placeholder-gray-500 rounded-md px-3 py-2"
    />
    <button
      className="border rounded-md px-4 py-2 text-lg bg-amber-400 text-slate-900 hover:bg-amber-500"
      onClick={onClickToDo}
    >
      Add
    </button>
  </div>

  {/* Todo List */}
  <div className="text-lg font-mono">
    {chores.map(task => (
      <div
        key={task.id}
        className="flex items-center justify-between text-white text-lg px-3 py-2 border rounded-md mb-2"
      >
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            onChange={() => onClickComplete(task.id)}
          />
          <span className={task.isCompleted ? 'line-through' : ''}>
            {task.chorename}
          </span>
        </label>

        <button
          onClick={() => onClickDelete(task.id)}
          className="text-red-400 hover:text-red-500"
        >
          <TrashIcon className='h-5 w-5'/>
        </button>
      </div>
    ))}
  </div>

</div>

    
      </div>
  )
}

export default App
