import './TaskItem.scss'
import trash from '../../assets/trash.svg'
import edit from '../../assets/edit.svg'
import TaskModal from '../TaskModal/TaskModal' 
import { useState } from 'react'
import { Modal } from '@mui/material'

export interface ItaskItemProps {
  name: string
  id: number
  description: string

}

const TaskItem = (props: ItaskItemProps) => {
  const [open, setOpen] = useState(false)
  const handleClose = () => {
    setOpen(false)
  }
  return (
    <div className='taskContainer'>
      <Modal
        open={open}
        onClose={handleClose}
        BackdropProps={{ style: { backgroundColor: '#E7E7E7', opacity: 0.3 } }}
      >
      <TaskModal option='create' description='opa'  />
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
          <button className='taskButtons'>
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
