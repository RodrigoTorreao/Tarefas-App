import './TaskItem.scss'
import trash from '../../assets/trash.svg'
import edit from '../../assets/edit.svg'
import TaskModal from '../TaskModal/TaskModal' 
import { useState } from 'react'
import { Modal } from '@mui/material'
import { deleteTask } from '../../redux/Auth/authSlice'
import { useDispatch } from 'react-redux'

export interface ItaskItemProps {
  name: string
  id: number
  description: string

}

const TaskItem = (props: ItaskItemProps) => {
  const [open, setOpen] = useState(false)

  const dispatch = useDispatch()

  const handleClose = () => {
    setOpen(false)
  }

  const handleDelete = () => {
    dispatch(deleteTask(props.id))
  }

  return (
    <div className='taskContainer'>
      <Modal
        open={open}
        onClose={handleClose}
        BackdropProps={{ style: { backgroundColor: '#E7E7E7', opacity: 0.3 } }}
      >
        <TaskModal option='edit' description={props.description} name={props.name} id={props.id} handleClose={ handleClose } />
      </Modal>
      <div className='taskHeader'>
        <div className='taskTitle'>
          {props.name}
        </div>
        <div>
          <button className='taskButtons'
            onClick={() => {
              setOpen(true)
            }}
          >
            <img className='taskSvgs' src={edit}></img>
          </button>
          <button className='taskButtons' onClick={handleDelete}>
            <img className='taskSvgs' src={trash}></img>
          </button>
        </div>
      </div>
      <div className='taskDescription'>
        {props.description}
      </div>
    </div>
  )
}

export default TaskItem
