export const isDate = value => {
  if (!value) return false

  if (new Date(value).toString() === 'Invalid Date') return false

  return true
}
