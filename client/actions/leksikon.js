export const TOGGLE_FILTER = 'TOGGLE_FILTER'

export function toggleFilter (value, checked) {
  return { type: TOGGLE_FILTER, value, checked }
}
