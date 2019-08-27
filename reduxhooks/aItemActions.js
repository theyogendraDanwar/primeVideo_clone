export const aItemInitialState = {
  aItem: {
    stickyTab: 0,
    loading: false,
    error: false,
  }
}

export const aItemReducer = (state, action) => {
  switch (action.type) {
    case 'MAKE_TAB_STICKY':
      return {
        ...state,
        stickyTab: action.payload
      }
    case 'SET_REFRESH_TRUE':
      return {
        ...state,
        loading: true
      }
    case 'SET_REFRESH_ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case 'SET_REFRESH_FALSE':
      return {
        ...state,
        loading: false
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