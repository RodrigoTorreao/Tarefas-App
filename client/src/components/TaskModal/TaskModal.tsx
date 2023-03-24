import { Modal, TextField } from '@mui/material'
import './TaskModal.scss'
import plus from '../../assets/plus.svg'
import { useState } from 'react'
import { createTask, updateTask } from '../../redux/Auth/authSlice'
import { useDispatch } from 'react-redux'
export interface ITaskModalProps {
  name?: string
  id?: number
  description?: string
  option: 'create' | 'edit'
  handleClose: () => void

}

const TaskModal = (props: ITaskModalProps) => {
  const [name, setName] = useState(props.name ? props.name : '')
  const [description, setDescription] = useState(props.description ? props.description : '')

  const dispatch = useDispatch()

  const handleSubmit = () => {
    if (props.option === 'edit') {
      dispatch(updateTask(name, description, props.id))
    }
    if (props.option === 'create') {
      dispatch(createTask(name, description))
    }
    props.handleClose()
  }

  return (
    <>
        <div className='modal'>
          <div className='taskHeader'>
            <TextField
              variant="standard"
              color='secondary'
              focused
              label={'Nome'}
              sx={{ width: '4000px' }}
              inputProps={{ style: { fontSize: 40 } }}
              InputLabelProps={{ style: { fontSize: 20 } }}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setName(event.target.value)
              }}
              value={name}
            />
            <div>
              <button className='taskButtons' onClick={handleSubmit}>
                <img className='taskSvgs' src={plus}></img>
              </button>
            </div>
          </div>
          <div className='modalDescription'>
            <TextField
              variant="standard"
              color='secondary'
              multiline
              focused
              label={'Descrição'}
              inputProps={{ style: { fontSize: 20 } }}
              InputLabelProps={{ style: { fontSize: 20 } }}
              sx={{ width: '400px' }}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setDescription(event.target.value)
              }}
              value={description}
            />
            <div></div>
          </div>
        </div>
    </>
  )
}
export default TaskModal
