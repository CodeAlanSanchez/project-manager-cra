import * as api from '../api';

export const signIn = (body: any) => async (dispatch: any) => {
  try {
    const { data } = await api.signin(body);

    dispatch({ type: 'LOGIN', payload: data });
  } catch (error) {
    console.error(error);
  }
};

export const signUp = (body: any) => async (dispatch: any) => {
  try {
    const { data } = await api.register(body);

    dispatch({ type: 'REGISTER', payload: data });
  } catch (error) {
    console.error(error);
  }
};
