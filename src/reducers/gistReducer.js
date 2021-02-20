const initialState = {
  username: '',
  gistList: []
}

const gistReducer = (state = initialState, action) => {
  switch(action.type){
    case 'USER_CHANGED': {
      return {
        ...state,
        username: action.value
      }
    }
    case 'FETCHED_FOR_USER': {
      return {
        ...state,
        fetchedUsername: action.value
      }
    }
    case 'FETCH_GISTS_REQUEST': {
      return {
        ...state,
        isFetching: action.isFetching
      }
    }
    case 'FETCH_GISTS_SUCCESS': {
      return {
        ...state,
        gistList: action.gistList,
        isFetching: action.isFetching,
        fetchError: null
      }
    }
    case 'FETCH_GISTS_FAILED': {
      return {
        ...state,
        gistList: action.gistList,
        isFetching: action.isFetching,
        fetchError: action.fetchError
      }
    }

    default:
      return state;
  }
}

export default gistReducer
