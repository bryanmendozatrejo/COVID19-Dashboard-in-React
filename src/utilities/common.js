const formatDate = (date) => {
  date = date.toString();


  let year = date.substr(2,2)
  let month = date.substr(4,2)
  let day = date.substr(6,2)

  return month + "/" + day + "/" + year;
}

export {formatDate};