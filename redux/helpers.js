export const updateListItem = (list, item, key = 'id') => {
  const index = list.findIndex((p) => p[key] === item[key])
  if (index === -1) return list
  return [...list.slice(0, index), item, ...list.slice(index + 1)]
}

