export default function formatTypeClasses (tag, type) {
  if (!type) return ''

  return type
    .split(' ')
    .map(type => `${tag}--${type}`)
    .join(' ')
}
