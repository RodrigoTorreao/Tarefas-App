import { TextField } from '@mui/material'
import { useState } from 'react'
import './Login.scss'

const LoginPage = () => {
  const [name, setName] = useState('')
  
  return (
    <div className='container'>
      <div className='card'>
        <div>
          <h1 style={{text-align: 'center'}}>Bem-Vindo</h1>
        </div>
        <div>
          <div>
            <TextField
              label='Nome'
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setName(event.target.value);
              }}
              value={name}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
