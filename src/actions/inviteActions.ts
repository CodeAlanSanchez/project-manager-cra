import {
  ACCEPT_INVITE,
  DECLINE_INVITE,
  FETCH_INVITE,
  SEND_INVITE,
} from 'types/actions';
import * as api from 'api';

export const sendInvite =
  (projectId: number, receiverId: number) => async (dispatch: any) => {
    try {
      const { data } = await api.invite(projectId, receiverId);

      dispatch({ type: SEND_INVITE, payload: data });
    } catch (error: any) {
      console.log('Error (send invite): ' + error.message);
    }
  };

export const acceptInvite = (id: number) => async (dispatch: any) => {
  try {
    const { data } = await api.acceptInvite(id);

    dispatch({ type: ACCEPT_INVITE, payload: data });
  } catch (error: any) {
    console.log('Error (accept invite): ' + error.message);
  }
};

export const declineInvite = (id: number) => async (dispatch: any) => {
  try {
    const { data } = await api.declineInvite(id);

    dispatch({ type: ACCEPT_INVITE, payload: data });
  } catch (error: any) {
    console.log('Error (decline invite): ' + error.message);
  }
};

export const getInvites = (setLoading: Function) => async (dispatch: any) => {
  try {
    const { data } = await api.fetchInvites();

    setLoading(false);

    dispatch({ type: FETCH_INVITE, payload: data.invites });
  } catch (error: any) {
    console.log('Error (fetch invites): ' + error.message);
  }
};
