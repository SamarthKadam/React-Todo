import './Component.css'
import {useState} from 'react'
function Form({onAddtask})
{

    const [text,settext]=useState('');
    const [day,setday]=useState('');
    const [reminder,setreminder]=useState(false);


    function onSubmit(e)
    {
        e.preventDefault();
        if(!text)
        {
            alert("Please enter the valid text");
            return;
        }
        onAddtask({text,day,reminder});
        settext('');
        setday('');
        setreminder(false);

    }
    return(
        <form className="main-form" onSubmit={onSubmit}>
            <div className="taskname">
                <label className="tasknamelab blocklev">Task</label>
                <input onChange={(e)=>{settext(e.target.value)}}  value={text} placeholder="Add Task" className="inputtask" type="text" name="name" />
            </div> 
            <div className="dayandtime">
                <label className="daytime blocklev">Day & Time</label>
                <input onChange={(e)=>{setday(e.target.value)}} value={day} placeholder="Add Day & Time" className="dateoftask" type="text" name="name" />
            </div>
            <div className="setremin">
                <div className="setrempar">
                    <div>Set reminder</div>
                    <input onChange={(e)=>{setreminder(e.currentTarget.checked)}} checked={reminder} type="checkbox"></input>
                </div>
                <div className="centerbtn">
                <button className="Savetask">Save Task</button>
                </div>
            </div>

        </form>
    )
}
export default Form;