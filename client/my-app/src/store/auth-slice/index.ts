import {createSlice,type PayloadAction} from '@reduxjs/toolkit'



type AuthState = {
  isAuthenticated: boolean;
  isLoading: boolean;
  user: String |null
}


const initialState:AuthState = {
  isAuthenticated: false,
  isLoading: false,
  user:null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      
    }
  }
}) 

export const { setUser} = authSlice.actions;
export default authSlice.reducer