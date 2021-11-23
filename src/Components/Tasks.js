import { VscChromeClose } from "react-icons/vsc";
import './Component.css'
const Tasks=function(props)
{
    
    return (<div onDoubleClick={()=>{props.ontoggle(props.tasks.id)}} className={`content${props.tasks.reminder?'s':''}`} >
    <div className="system">
    <h3 className="textcontent">{props.tasks.text}</h3>
    <VscChromeClose onClick={()=>{props.onDelete(props.tasks.id)}} style={{color:"red",height:'25px',cursor:'pointer'}} ></VscChromeClose>
    </div>
    <p className="textpara">{props.tasks.day}</p>
</div>);

}
export default Tasks;