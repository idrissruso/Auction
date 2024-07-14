import axios from 'axios'
import { BASE_URL } from '../api/api'

/* export const login = createAsyncThunk('auth/login', async (userData) => {
  try {
    //destructing, renaming the data to response
    const { data: response } = await axios.post(`${BASE_URL}/signin`, userData)
    localStorage.setItem('jwt', response.data)
    console.log('login success', response.data)
    return response
  } catch (error) {
    console.log('catch error', error)
    //we have to throw error cuz that's the same thing we did in the slice
    // the second response is the data coming from our request
    throw Error(error.response.response.error)
  }
}) */

export async function login(data) {
  try {
    const { data: response } = await axios.post(`${BASE_URL}/signin`, data)
    localStorage.setItem('jwt', response.data)
    return response
  } catch (error) {
    throw Error(error.response.response.error)
  }
}

/* export const signup = createAsyncThunk('auth/signup', async (userData) => {
  try {
    const { data: response } = await axios.post(`${BASE_URL}/signup`, userData)
    localStorage.setItem('jwt', response.data)
    console.log('signup success', response.data)
    return response
  } catch (error) {
    console.log('catch error', error)
    throw Error(error.response.response.error)
  }
}) */

export async function signUp(data) {
  try {
    const { data: response } = await axios.post(`${BASE_URL}/signup`, data)
    localStorage.setItem('jwt', response.data)
    return response
  } catch (error) {
    throw Error(error.response.response.error)
  }
}
