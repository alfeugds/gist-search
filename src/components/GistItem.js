import './GistItem.scss'

import getFileTypeTags from '../helpers/gistTagHelper'

const GistItem = (props) => {
  const {
    gistItem:{
      description,
      html_url,
      files
    }
  } = props;

  const tags = getFileTypeTags(files)

  const tagsItems = tags.map(tag => (
    <li className="language-tag">
      <span>
         {tag}
      </span>
    </li>
  ))

  // TODO: add Username/Avatar of the last 3 users who forked it with avatar linking to the fork.
  return (
    <div className="gist-item">
      <a
        href={html_url}
        target="_blank"
        rel="noreferrer">
          <p className="gist-description">
            {description || `[${html_url}]`}
          </p>
          <p className="language-tags">
            {tagsItems.length > 0 &&
              <ul>
                {tagsItems}
              </ul>
            }
          </p>
        </a>
    </div>
  )
}

export default GistItem
