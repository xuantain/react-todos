import { apiClient } from './ApiClient';

export interface TodoItem {
  id: number;
  username: string;
  description: string;
  targetDate: string;
  done: boolean;
}

export const retrieveAllTodosForUsernameApi = (username: string) => apiClient.get(`/users/${username}/todos`);

export const deleteTodoApi = (username: string, id: number) => apiClient.delete(`/users/${username}/todos/${id}`);

export const retrieveTodoApi = (username: string, id: number) => apiClient.get(`/users/${username}/todos/${id}`);

export const updateTodoApi = (username: string, id: number, todo: TodoItem) =>
  apiClient.put(`/users/${username}/todos/${id}`, todo);

export const createTodoApi = (username: string, todo: TodoItem) => apiClient.post(`/users/${username}/todos`, todo);
