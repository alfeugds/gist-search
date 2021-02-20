import './GistItem.scss'

const GistItem = (props) => {
  const {
    gistItem:{
      description,
      html_url,
      tags,
      forks
    }
  } = props

  // TODO: style gist list
  // TODO: add tags/badges Convert the filetypes of the files in the gist into a tag/badge, (e.g, if the returned gist has list of files containing python and JavaScript  files, the gist should have the respective tags/badges).
  // TODO: add link to gist
  // TODO: add Username/Avatar of the last 3 users who forked it with avatar linking to the fork.
  // TODO: handle gist without description
  return (
    <div className="gist-item">
      <a
        href={html_url}
        target="_blank"
        rel="noreferrer">
          <p >
            {description || `[${html_url}]`}
          </p>
        </a>
    </div>
  )
}

export default GistItem
