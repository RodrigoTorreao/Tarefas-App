import girlSvg from '../../assets/girl.svg'
import plus from '../../assets/plus.svg'
import './Tasks.scss'
import TaskItem from '../../components/taskItem/TaskItem'
const TasksPage = () => {
  return (
    <div className='taskBackground'>
      <div className='sidebar'>
        <div className='greetings'>
          Olá, Rodrigo
        </div>
        <img
          className='girlsvg'
          src={girlSvg}
        />
      </div>
      <div className='taskCanvas'>
        <button className='addButton'>
          <img className='plussvg' src={plus}></img>
        </button>
        <div className='listWrapper'>
          <TaskItem description='desc' name='name' id={1} />
        </div>
      </div>
    </div>
  )
}
export default TasksPage
