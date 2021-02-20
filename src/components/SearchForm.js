import { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import fetchGists from "../actions"

function SearchForm() {

  const dispatch = useDispatch()
  const username = useSelector(state => state.username)

  useEffect(() => {
    console.log('username changed', {
      username
    })
  })

  const handleChange = (event) => {
    dispatch({
      type: 'SEARCH_USER',
      value: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(fetchGists(username))
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Search Gists from User
        <input type="text" name="username" onChange={handleChange}/>
        {username}
      </label>
    </form>
  )
}

export default SearchForm
