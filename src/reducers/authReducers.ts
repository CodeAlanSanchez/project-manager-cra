/* eslint-disable import/no-anonymous-default-export */
export default (user = {}, action: any) => {
  switch (action.type) {
    case 'LOGIN':
      return action.payload;
    case 'REGISTER':
      return action.payload;
    case 'GET_AUTH':
    default:
      return user;
  }
};
