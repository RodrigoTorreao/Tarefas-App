/* eslint-disable n/no-callback-literal */
import { createSlice } from '@reduxjs/toolkit'
import { getApi } from '../../config/axios'
import { setCookie } from 'react-use-cookie'

const initialState = {
  user: 'null',
  token: null,
  tasks: []
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action) => {
      const { token } = action.payload
      state.token = token
    },
    setUser: (state, action) => {
      state.user = action.payload
    },
    setTasks: (state, action) => {
      state.tasks = action.payload
    }

  }
})

export const login =
  (email: string, password: string, callback?: (sucess: boolean) => void): any => async (dispatch: any) => {
    try {
      const api = getApi()
      const { data } = await api.post('/user/login', {
        user: {
          email,
          password
        }
      })
      await setCookie('token', data.token)

      dispatch(setToken(data))
      callback(true)
    } catch (err) {
      console.error(err)
      callback(false)
    }
  }

export const getUser = (): any => async (dispatch: any) => {
  try {
    const api = getApi()
    const { data } = await api.get('/user/me')
    dispatch(setUser(data))
  } catch (err) {
    console.error(err)
  }
}

export const getTasks = (): any => async (dispatch: any) => {
  try {
    const api = getApi()
    const { data } = await api.get('/task/get-task')
    dispatch(setTasks(data))
  } catch (err) {
    console.error(err)
  }
}
export const updateTask = (name: string, task: string, taskId: number): any => async (dispatch: any) => {
  try {
    const api = getApi()
    await api.put('/task/update-task', {
      name,
      task,
      taskId
    })
    const { data } = await api.get('/task/get-task')
    dispatch(setTasks(data))
  } catch (err) {
    console.error(err)
  }
}

export const deleteTask = (taskId: number): any => async (dispatch: any) => {
  try {
    const api = getApi()
    await api.delete('/task/delete-task', {
      params: {
        taskId
      }
    })
    const { data } = await api.get('/task/get-task')
    dispatch(setTasks(data))
  } catch (err) {
    console.error(err)
  }
}

export const createTask = (name: string, task: string): any => async (dispatch: any) => {
  try {
    const api = getApi()
    await api.post('/task/create', {
      name,
      task
    })
    const { data } = await api.get('/task/get-task')
    dispatch(setTasks(data))
  } catch (err) {
    console.error(err)
  }
}

export const register = (name: string, email: string, password: string, callback?: (sucess: boolean) => void): any => async (dispatch: any) => {
  try {
    const api = getApi()
    await api.post('/user/create', {
      user: {
        name,
        email,
        password
      }
    })
    callback(true)
  } catch (err) {
    console.error(err)
  }
}

export const { setToken, setTasks, setUser } = authSlice.actions
export default authSlice.reducer
