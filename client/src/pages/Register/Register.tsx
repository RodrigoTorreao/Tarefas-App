import { TextField } from '@mui/material'
import { useState } from 'react'
import './Register.scss'

const RegisterPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [name, setName] = useState('')

  return (
    <div className='container'>
      <div className='card'>
        <div>
          <h1 className='title'>Registrar</h1>
        </div>
        <div>
          <div className='inputContainer'>
            <TextField
              label='Digite seu nome'
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setName(event.target.value)
              }}
              value={email}
            />
            <TextField
              label='Digite seu email'
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setEmail(event.target.value)
              }}
              value={email}
            />
            <TextField
              label='Digite sua senha'
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setPassword(event.target.value)
              }}
              value={password}
              type={'password'}
            />
            <TextField
              label='Confirme sua senha'
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setPassword(event.target.value)
              }}
              value={password}
              type={'password'}
            />
            <a href='/' style={{ alignSelf: 'flex-end', color: '#413543' }}>
              Entrar
            </a>
          </div>
        </div>
        <div style={{ alignSelf: 'center' }}>
          <button className='inputButton'>
            Registrar
          </button>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage
