import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  token: null,
  tasks: []
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.user = action.payload.user
      state.token = action.payload.token
    },
    setLogout: (state) => {
      state.user = null
      state.token = null
    },
    setTasks: (state, action) => {
      state.tasks = action.payload.tasks
    }
  }
})

export const { setLogin, setLogout, setTasks } = authSlice.actions
export default authSlice.reducer
