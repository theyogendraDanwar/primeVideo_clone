export const aItemInitialState = {
  aItem: {
    stickyTab: 0,
    loading: false,
    activeTab: 0,
    error: false,
    tabPosition: 0,
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
    case 'UPDATE_TAB_POSITION':
      return {
        ...state,
        tabPosition: action.payload
      }
    case 'CHANGE_TAB':
      return {
        ...state,
        activeTab: action.payload
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