import { useSelector, useDispatch } from 'react-redux'
import fetchGists from "../actions"

import './SearchForm.scss'


function SearchForm() {

  const dispatch = useDispatch()
  const username = useSelector(state => state.username)
  const isFetching = useSelector(state => state.isFetching)

  const handleChange = (event) => {
    dispatch({
      type: 'USER_CHANGED',
      value: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(fetchGists(username))
  }

  return (
    <form
      className="search-form"
      onSubmit={handleSubmit} >
      <h1>Search Gists from User</h1>
      <label>
        <p>Enter the username</p>
        <input
          className="username"
          type="text"
          placeholder="username"
          disabled={isFetching}
          name="username"
          onChange={handleChange}/>
      </label>
    </form>
  )
}

export default SearchForm
