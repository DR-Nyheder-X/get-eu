export default function gaSend (event, value, category = 'Quiz') {
  const ga = window.ga ||
    function (...args) { console.log(args) }

  try {
    ga('send', 'event', category, event, value)
  } catch (e) {
    console.log(e)
  }
}
