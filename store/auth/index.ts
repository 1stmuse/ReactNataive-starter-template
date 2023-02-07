/* eslint-disable prettier/prettier */
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '..';

export interface User {
  email: string;
  phone: string;
}

export interface Auth {
  user?: User | null;
  access_token?: string | null;
  isLoading?: boolean;
  didOnboard?: boolean;
}

const initialState: Auth = {isLoading: true, didOnboard: false} as Auth;

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredential(state, {payload: {user, access_token}}: PayloadAction<Auth>) {
      AsyncStorage.setItem('@user', JSON.stringify({user, access_token}));
      state.user = user;
      state.access_token = access_token;
      state.isLoading = false;
    },
    setDidOnboard(state, {payload: val}: PayloadAction<boolean>) {
      state.didOnboard = true;
      AsyncStorage.setItem('onboard', JSON.stringify(val));
    },
  },
});

export const {setCredential, setDidOnboard} = authSlice.actions;
export default authSlice.reducer;
export const useSelectUser = (state: RootState): User | null | undefined =>
  state.auth.user;
export const useSelectToken = (state: RootState): string | null | undefined =>
  state.auth.access_token;

export const onboardStatus = (state: RootState) => state.auth.didOnboard;
