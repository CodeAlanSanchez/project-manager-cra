import * as api from '../api';

export const getProjects = () => async (dispatch: any) => {
  try {
    const { data } = await api.fetchProjects();

    dispatch({ type: 'FETCH_PROJECTS', payload: data });
  } catch (error) {
    console.error(error);
  }
};

export const getProject = (id: number) => async (dispatch: any) => {
  try {
    const { data } = await api.fetchProject(id);

    dispatch({ type: 'FETCH_PROJECT', payload: data });
  } catch (error) {
    console.error(error);
  }
};

export const createProject = (project: any) => async (dispatch: any) => {
  try {
    const { data } = await api.createProject(project);

    dispatch({ type: 'CREATE_PROJECT', payload: data });
  } catch (error) {
    console.error(error);
  }
};

export const updateProject =
  (id: number, project: any) => async (dispatch: any) => {
    try {
      const { data } = await api.updateProject(id, project);

      dispatch({ type: 'UPDATE_PROJECT', payload: data });
    } catch (error) {
      console.error(error);
    }
  };

export const deleteProject = (id: number) => async (dispatch: any) => {
  try {
    const { data } = await api.deleteProject(id);

    dispatch({ type: 'DELETE_PROJECT', payload: data });
  } catch (error) {
    console.error(error);
  }
};
