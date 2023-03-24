import { TextField } from '@mui/material'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login, setLogin } from '../../redux/Auth/authSlice'
import './Login.scss'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const data = useSelector((state) => state)

  const onSubmit = async () => {
    dispatch(login(
      email,
      password,
      (success) => {
        if (success) {
          window.location.pathname = '/tasks'
        }
      }
    ))
  }

  return (
    <div className='container'>
      <div className='card'>
        <div>
          <h1 className='title'>Bem-Vindo</h1>
        </div>
        <div>
          <div className='inputContainer'>
            <TextField
              label='Digite aqui seu email'
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setEmail(event.target.value)
              }}
              value={email}
            />
            <TextField
              label='Digite aqui sua senha'
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setPassword(event.target.value)
              }}
              value={password}
              type={'password'}
            />
            <a href='/register' style={{ alignSelf: 'flex-end', color: '#413543' } }>
              Registrar
            </a>
          </div>
        </div>
        <div style={ { alignSelf: 'center' } }>
          <button className='inputButton' onClick={onSubmit}>
            Entrar
          </button>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
