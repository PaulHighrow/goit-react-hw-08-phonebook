import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthToken = token =>
  (axios.defaults.headers.common.Authorization = `Bearer ${token}`);

const clearAuthToken = () => (axios.defaults.headers.common.Authorization = '');

export const register = createAsyncThunk(
  'auth/register',
  async (userInfo, thunkAPI) => {
    console.log(userInfo);
    try {
      const resp = await axios.post('/users/signup', userInfo);
      setAuthToken(resp.data.token);
      return resp.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/logIn',
  async (userInfo, thunkAPI) => {
    try {
      const resp = await axios.post('/users/login', userInfo);
      setAuthToken(resp.data.token);
      return resp.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logOut', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    clearAuthToken();
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});
