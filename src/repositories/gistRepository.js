
const getGistsByUser = async (username) => {
  const result = await fetch(`https://api.github.com/users/${username}/gists`)
  const data = await result.json()
  return {
    userFound: result.status !== 404,
    data
  }
}

export default getGistsByUser
