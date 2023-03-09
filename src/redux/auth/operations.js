import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-hot-toast';

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
      toast.error(
        'Something went wrong! Please try again later or with different credentials!'
      );
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
      toast.error('Email or password is incorrect!');
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

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (!persistedToken) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthToken(persistedToken);
      const resp = await axios.get('/users/current');
      return resp.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
