const getFileTypeTags = (files) => {
  if(!files || Object.keys(files) === 0){
    return []
  }

  const tags = Object.values(files)
    .reduce((acc, file) => {
      if(file.language){
        acc[file.language] = file.language;
      }

      return acc;
    }, {})
  return Object.keys(tags)
}

export default getFileTypeTags
