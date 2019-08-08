export const aItemInitialState = {
  aItem:{
    stickyTab: 0,
  }
}

export const aItemReducer = (state, action) => {
  switch (action.type) {
    case 'MAKE_TAB_STICKY':
      return {
        ...state,
        stickyTab: action.payload
      }
    case 'MAKE_TAB_NORMAL':
      return {
        ...state,
        stickyTab: action.payload
      }
    default:
      return state;
  }
}