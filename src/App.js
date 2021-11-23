import Task from './Components/Task'
import './App.css';
import Button from './Components/Button';
import { useDebugValue, useState } from "react";
import Form from './Components/Form'
function onclicking(e)
{
    console.log(e);
}

function App() {


  const [task,settask]=useState([
    {
        id:1,
        text:'Doctors appointment',
        day:'Feb 5th at 2:30pm',
        reminder:true
    },
    {
        id:2,
        text:'Meeting at school',
        day:'Feb 8th at 7:40pm',
        reminder:true
    },
    {
        id:3,
        text:'Food Shopping',
        day:'Feb 10th at 9:10pm',
        reminder:false
    }
])

const [showaddTask,setshowaddTask]=useState(false);

const Delete=function(e)
{
  console.log("item deleted",e);
  settask(task.filter((val)=>{
    return val.id!==e;
  }));
}
const Addtasks=function(item)
{
  const id=Math.floor(Math.random()*10000);
  console.log(item);
  const newtask={id,...item}
  settask([...task,newtask]);
}

const toggleReminder=(id)=>{
  settask(task.map((tasks)=>
    tasks.id=== id?{...tasks,reminder:!tasks.reminder}:tasks))
}
  return (
    <div className="App">
      <div className="header">
        <div className="heading">Task Tracker</div>
        <Button showtask={showaddTask} onAdd={()=>{setshowaddTask(!showaddTask);}} onclick={onclicking} title='Add'></Button>
      </div>
      {showaddTask?<Form onAddtask={Addtasks}></Form>:''}
      {(task.length>0)?

      (<Task ontoggle={toggleReminder} onDelete={Delete} tasks={task}></Task>):
      (<h3>Nothing to do</h3>)
      }
    </div>
  );
}

export default App;
