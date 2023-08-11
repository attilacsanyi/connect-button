const isToday = (someDate: Date) => {
  const today = new Date()
  return (
    someDate.getDate() == today.getDate() &&
    someDate.getMonth() == today.getMonth() &&
    someDate.getFullYear() == today.getFullYear()
  )
}

export const formatTimestamp = (timestamp: number | string, divider = ' ') => {
  const date = new Date(Number(timestamp))

  const today = isToday(date)
  const time = date.toLocaleTimeString('en-Gb', {
    // en-GB is causing midnight to be 00:00
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  })

  if (today) return `Today${divider}${time}`

  return `${date.getDate()} ${date.toLocaleString('en-US', {
    month: 'short',
  })}${divider}${time}`
}
