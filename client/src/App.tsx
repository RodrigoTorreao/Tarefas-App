import React, { useMemo } from 'react'
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'
import { createTheme } from '@mui/material/styles'
import { themeSettings } from './theme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Tasks from './pages/Tasks/Tasks'

function App () {
  const theme = useMemo(() => createTheme(themeSettings()))

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path='/tasks' element={<Tasks />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  )
}
export default App
