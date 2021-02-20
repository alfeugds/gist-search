import getGistsByUser from "./repositories/gistRepository"

const fetchGists = (username) => {
  return async dispatch => {
    dispatch({
      type: 'FETCH_GISTS_REQUEST',
      isFetching: true
    })

    try{
      const {
        userFound,
        data:gistList
      } = await getGistsByUser(username)

      if(!userFound){
        throw new Error(`User ${username} not found.`)
      }

      dispatch({
        type: 'FETCH_GISTS_SUCCESS',
        gistList,
        isFetching: false
      })
    }
    catch(err){
      dispatch({
        type: 'FETCH_GISTS_FAILED',
        gistList: [],
        isFetching: false,
        fetchError: err.message
      })
    }

    dispatch({
      type: 'FETCHED_FOR_USER',
      value: username
    })

  }
}

export default fetchGists
