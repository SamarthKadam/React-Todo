import Tasks from './Tasks'

function Task({tasks,onDelete,ontoggle})
{
    return (
        <>
        {tasks.map((data)=>{
            return <Tasks ontoggle={ontoggle} onDelete={onDelete} tasks={data} key={data.id}></Tasks>
        })}
        </>
    )
}
export default Task;