/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable @typescript-eslint/no-unused-vars */

export const checkSpecialChar = (value: string) => {
  const format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  return format.test(value) ;
};

export const isUpperCase = (string: string) => /[A-Z]/.test(string);

export const hasNumber = (string: string) => /[0-9]/.test(string);

