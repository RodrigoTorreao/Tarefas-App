import { TextField } from '@mui/material'
import { useState, } from 'react'
import { useDispatch } from 'react-redux'
import './Login.scss'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit = () => {
    dispatch(authenticate({
      email,
      password
    }));
  };

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
