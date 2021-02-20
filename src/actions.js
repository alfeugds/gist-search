const fetchGists = (username) => {
  return async dispatch => {
    dispatch({
      type: 'FETCH_GISTS_REQUEST'
    })

    // TODO: change to fetch
    const gistList = await new Promise(resolve => {
      setTimeout(() => {
        resolve([
          {
            name: 'teste1',
            username: 'alfeugds'
          },
          {
            name: 'teste2',
            username: 'alfeu'
          }
        ].filter(gist => gist.username === username))
      },2000)
    })

    dispatch({
      type: 'FETCH_GISTS_SUCCESS',
      gistList
    })
  }
}

export default fetchGists
