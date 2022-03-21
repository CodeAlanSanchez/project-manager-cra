import {
  CREATE_PROJECT,
  DELETE_PROJECT,
  FETCH_PROJECT,
  FETCH_PROJECTS,
  UPDATE_PROJECT,
} from 'types/actions';
import * as api from '../api';

export const getProjects = (setLoading: Function) => async (dispatch: any) => {
  try {
    const { data } = await api.fetchProjects();

    setLoading(false);

    dispatch({
      type: FETCH_PROJECTS,
      payload: data.projects,
    });
  } catch (error: any) {
    console.log(error);
    const { field, message } = error.response.data.error;
    dispatch({
      type: 'CREATE_PROJECT_ERROR',
      payload: { field, message },
    });
  }
};

export const getProject = (id: number) => async (dispatch: any) => {
  try {
    const { data } = await api.fetchProject(id);

    dispatch({ type: FETCH_PROJECT, payload: data.projects });
  } catch (error) {
    console.error(error);
  }
};

export const createProject = (project: any) => async (dispatch: any) => {
  try {
    const { data } = await api.createProject(project);

    dispatch({ type: CREATE_PROJECT, payload: data.projects });
  } catch (error: any) {
    const { field, message } = error.response.data.error;
    dispatch({
      type: 'CREATE_PROJECT_ERROR',
      payload: { field, message },
    });
  }
};

export const updateProject =
  (id: number, project: any) => async (dispatch: any) => {
    try {
      const { data } = await api.updateProject(id, project);

      dispatch({ type: UPDATE_PROJECT, payload: data.projects });
    } catch (error) {
      console.error(error);
    }
  };

export const deleteProject = (id: number) => async (dispatch: any) => {
  try {
    const { data } = await api.deleteProject(id);

    dispatch({ type: DELETE_PROJECT, payload: data.projects });
  } catch (error) {
    console.error(error);
  }
};
