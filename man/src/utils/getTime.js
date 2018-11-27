let getTime = (date) => {
  if (!date) {
    return ''
  }
  return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()} ${date.getHours()}: ${date.getMinutes()}: ${date.getSeconds()}`
}

export default getTime