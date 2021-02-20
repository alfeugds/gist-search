import { useSelector } from 'react-redux'

const GistList = () => {

  const gistList = useSelector(state => state.gistList)

  const gistListItems = gistList.map((gistItem) =>
    // TODO: create component
    <li key={gistItem.name} className="gist-item">
      {gistItem && gistItem.name}
    </li>
  );

  return (
    <ul className="gist-list">
      {gistListItems}
    </ul>
  )
}

export default GistList;
