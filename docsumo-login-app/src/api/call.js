import { LOGIN_URL } from "./const";
import { client } from './client';

export const login = (payload) => client.post(LOGIN_URL, payload);
