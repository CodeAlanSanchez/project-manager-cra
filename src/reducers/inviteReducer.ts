import {
    ACCEPT_INVITE,
    DECLINE_INVITE,
    SEND_INVITE,
  } from 'types/actions';
  /* eslint-disable import/no-anonymous-default-export */
  export default (bugs = [], action: any) => {
    switch (action.type) {
      default:
        return bugs;
    }
  };
  