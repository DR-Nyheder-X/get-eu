/**
 * example:
 * formatTypeClasses('Button', 'red small')
 * => 'Button--red Button--small'
 */
export default function formatTypeClasses (tag, ...types) {
  if (!types) return tag

  return tag + ' ' + types
    .join(' ')
    .split(' ')
    .map(type => `${tag}--${type}`)
    .join(' ')
}
