import { createApi } from '@reduxjs/toolkit/query/react';

// export interface UserResponse {
//   data: any;
//   access_token: string;
// }

// export interface LoginRequest {
//   email: string;
//   password: string;
// }

// export interface RegisterRequest {
//   username: string;
//   email: string;
//   password: string;
//   phone: string;
//   date_of_birth: string;
//   name: string;
//   refferer?: string;
// }

// export interface ResetRequest {
//   email: string;
//   otp: string;
//   password: string;
//   verify_password: string;
// }

// export interface UsernameReq {
//   username: string;
// }

// export interface EmailReq {
//   email: string;
// }

// export interface UsernameRes {
//   status: boolean;
//   meta_data: object;
//   debug: null;
// }

// export const authApi = createApi({
//   reducerPath: 'authApi',
//   baseQuery: axiosBaseQuery({ baseUrl: `${baseUrl}/auth/` }),
//   endpoints: (builder) => ({
//     login: builder.mutation<UserResponse, LoginRequest>({
//       query: (credentials) => ({
//         url: 'login',
//         method: 'POST',
//         body: credentials,
//       })
//     }),


//     logout: builder.mutation<any, void>({
//       query: () => ({
//         url: 'logout',
//         method: 'POST'
//       })
//     })
//   })
// });
// export const {
//   useLoginMutation,
//   useLogoutMutation
// } = authApi;
