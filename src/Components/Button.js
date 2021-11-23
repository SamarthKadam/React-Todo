import './Component.css';
function Button({title,onclick,onAdd,showtask})
{
    let col=showtask?'red':'green';
    let letter=showtask?'Close':'Add';
    return(<div onClick={onAdd} style={{backgroundColor:`${col}`}}  className="button">{letter}</div>)
}

// Button.defaultProps={
//     color:'steelblue' 
// }
export default Button;