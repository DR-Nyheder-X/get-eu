export default function cc (fn, ...args) {
  return function ccFn (event) {
    event.preventDefault()
    fn.apply(null, args)
  }
}
