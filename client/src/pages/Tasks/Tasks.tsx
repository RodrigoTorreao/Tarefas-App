import { useEffect, useState } from 'react'
import girlSvg from '../../assets/girl.svg'
import plus from '../../assets/plus.svg'
import './Tasks.scss'
import TaskItem from '../../components/taskItem/TaskItem'
import { useSelector, useDispatch } from 'react-redux'
import { getUser, getTasks } from '../../redux/Auth/authSlice'
import { Modal } from '@mui/material'
import TaskModal from '../../components/TaskModal/TaskModal'

const TasksPage = () => {
  const [open, setOpen] = useState(false)

  const dispatch = useDispatch()

  const handleClose = () => {
    setOpen(false)
  }

  useEffect(() => {
    dispatch(getUser())
    dispatch(getTasks())
  }, [])

  const data = useSelector((state) => state)

  return (
    <div className='taskBackground'>
      <Modal
        open={open}
        onClose={handleClose}
        BackdropProps={{ style: { backgroundColor: '#E7E7E7', opacity: 0.3 } }}
      >
        <TaskModal option='create' handleClose={handleClose} />
      </Modal>
      <div className='sidebar'>
        <div className='greetings'>
          Olá, {data.auth.user.name}
        </div>
        <img
          className='girlsvg'
          src={girlSvg}
        />
      </div>
      <div className='taskCanvas'>
        <button className='addButton' onClick={() => {
          setOpen(true)
        }}>
          <img className='plussvg' src={plus}></img>
        </button>
        <div className='listWrapper'>
          {data.auth.tasks.map(element => {
            return (
              <TaskItem description={element.task} name={element.name} id={element.id} />
            )
          })}
        </div>
      </div>
    </div>
  )
}
export default TasksPage
