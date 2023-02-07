/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import {useMemo} from 'react';
import {setCredential, useSelectUser, useSelectToken, onboardStatus} from '.';
import {useAppSelector, useAppDispatch} from '../hooks';

export const useAuth = () => {
  const user = useAppSelector(useSelectUser);
  const token = useAppSelector(useSelectToken);
  // const isLoading = useAppSelector(useIsLoading);
  const didOnboard = useAppSelector(onboardStatus);

  console.log(user, 'from hokdd');

  return useMemo(
    () => ({user: user ? user : null, didOnboard}),
    [user, didOnboard],
  );
};

export const useLogout = () => {
  const dispatch = useAppDispatch();
  return () => dispatch(setCredential({}));
};
