const initialState = {
  username: '',
  gistList: []
}

const gistReducer = (state = initialState, action) => {
  switch(action.type){
    case 'SEARCH_USER': {
      return {
        ...state,
        username: action.value
      }
    }
    case 'FETCH_GISTS_SUCCESS': {
      return {
        ...state,
        gistList: action.gistList
      }
    }
    default:
      return state;
  }
}

export default gistReducer
