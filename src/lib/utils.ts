import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import Cookies from 'js-cookie';
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const removeEmpty = (params: any) => {
  for (const key of Object.keys(params)) {
    if (
      params[key] === '' ||
      params[key] === null ||
      params[key] === undefined
    ) {
      delete params[key];
    }
  }
  return params;
};

const isDebug = global.localStorage
  ? global.localStorage.getItem('debug') ?? false
  : false;

export const debug = (...args: any) => {
  if (process.env.NODE_ENV === 'development' || isDebug) {
    console.log(...args);
  }
};

export const warn = (...args: any) => {
  if (process.env.NODE_ENV === 'development' || isDebug) {
    console.warn(...args);
  }
};

export const danger = (...args: any) => {
  if (process.env.NODE_ENV === 'development' || isDebug) {
    console.error(...args);
  }
};

export const getCookie = (key: string) => {
  if (typeof window !== 'undefined' && key) {
    let result: any = {};
    const data = Cookies.get(key);
    if (data) {
      result = JSON.parse(data);
    }
    return result;
  }
};

export const removeCookie = (key: string) => {
  if (typeof window !== 'undefined' && key) {
    Cookies.remove(key);
  }
};

export const setCookie = (key: string, values: any) => {
  if (typeof window !== 'undefined' && key) {
    Cookies.set(key, JSON.stringify(values));
  }
  return null;
};

type TFetch = {
  url?: string;
  method?: string;
  body?: any;
};

export const FETCH_API = ({
  url,
  method = 'GET',
  body,
}: TFetch): Promise<any> => {
  return fetch(`api/${url}`, {
    method,
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
    body,
  })
    .then((res) => {
      return JSON.parse(res as any);
    })
    .catch((error) => {
      debug(error);
      return error;
    });
};
