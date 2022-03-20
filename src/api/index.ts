import axios from 'axios';
import { API_URL } from 'config';

const axiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

export const me = () => axiosInstance.get(`api/me`);

export const fetchProjects = () => axiosInstance.get(`api/project`);
export const fetchProject = (id: number) =>
  axiosInstance.get(`api/project/${id}`);
export const createProject = (project: any) =>
  axiosInstance.post(`api/project`, project);
export const updateProject = (id: number, project: any) =>
  axiosInstance.put(`api/project/${id}`, project);
export const deleteProject = (id: number) =>
  axiosInstance.delete(`api/project/${id}`);

export const signin = (form: any) => axiosInstance.post(`api/login`, form);
export const register = (form: any) => axiosInstance.post(`api/register`, form);
