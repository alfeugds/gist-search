import { useSelector } from 'react-redux'
import GistItem from './GistItem'

import './GistList.scss'

const GistList = () => {

  const gistList = useSelector(state => state.gistList)
  const fetchedUsername = useSelector(state => state.fetchedUsername)
  const isFetching = useSelector(state => state.isFetching)
  const fetchError = useSelector(state => state.fetchError)

  const gistListItems = Array.isArray(gistList) && gistList.map((gistItem, i) =>
    <li key={gistItem.description || i}>
      <GistItem gistItem={gistItem}/>
    </li>
  );

  // TODO: add loading spinner and overlay in list
  return (
    <>
      { isFetching &&
        <p>Loading</p>
      }
      {gistListItems.length > 0 &&
        <>
          <h2>Search Result</h2>
          <ul className="gist-list">
            {gistListItems}
          </ul>
        </>
      }
      {!fetchError &&fetchedUsername && gistListItems.length === 0 &&
        <p>No gists for user {fetchedUsername}</p>
      }
      {fetchError &&
        <p>{fetchError}</p>
      }
    </>
  )
}

export default GistList;
