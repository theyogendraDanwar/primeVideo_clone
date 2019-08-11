export const aLoginInitialState = {
  login:{
    isLoggedIn: 0,
    error: null,
  }
}

export const aLoginReducer = (state, action) => {
  switch (action.type) {
    case 'CHECK_LOGIN_FIELD_STATUS':
      return {
        ...state,
        error:false,
        isLoggedIn:true
      }
    case 'SET_LOGIN_FIELD_STATUS_ERROR':
      return {
        ...state,
        error: true,
      }
    default:
      return state;
  }
}