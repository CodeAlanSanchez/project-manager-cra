import {
  ACCEPT_INVITE,
  DECLINE_INVITE,
  FETCH_INVITE,
  SEND_INVITE,
} from 'types/actions';
/* eslint-disable import/no-anonymous-default-export */
export default (invites = [], action: any) => {
  switch (action.type) {
    case ACCEPT_INVITE:
    case DECLINE_INVITE:
      return invites.filter((i: any) => i.id !== action.payload.id);
    case SEND_INVITE:
      return [...invites, action.payload];
    case FETCH_INVITE:
      return action.payload;
    default:
      return invites;
  }
};
