export const aSearchInitialState = {
  search: {
    data: [],
    loading: false,
    error: false,
  }
}

export const aSearchReducer = (state, action) => {
  switch (action.type) {
    case 'ACTIVATE_SPINNER_LOADING':
      return {
        ...state,
        loading: true
      }
    case 'UPDATE_SEARCH_ERROR': 
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case 'UPDATE_SEARCH_DATA':
      return {
        ...state,
        loading: false,
        data: action.payload
      }
    default:
      return state;
  }
}