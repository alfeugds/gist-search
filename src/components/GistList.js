import { useSelector } from 'react-redux'

const GistList = () => {

  const gistList = useSelector(state => state.gistList)
  const fetchedUsername = useSelector(state => state.fetchedUsername)
  const isFetching = useSelector(state => state.isFetching)
  const fetchError = useSelector(state => state.fetchError)

  const gistListItems = Array.isArray(gistList) && gistList.map((gistItem, i) =>
    // TODO: create presentation component
    // TODO: style gist list
    // TODO: add tags/badges Convert the filetypes of the files in the gist into a tag/badge, (e.g, if the returned gist has list of files containing python and JavaScript  files, the gist should have the respective tags/badges).
    // TODO: add link to gist
    // TODO: add Username/Avatar of the last 3 users who forked it with avatar linking to the fork.

    <li key={gistItem.description || i} className="gist-item">
      {gistItem && gistItem.description}
    </li>
  );

  // TODO: add loading spinner and overlay in list
  return (
    <>
      { isFetching &&
        <p>Loading</p>
      }
      {gistListItems.length > 0 &&
        <ul className="gist-list">
          {gistListItems}
        </ul>
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
