export const TOGGLE_FILTER = 'TOGGLE_FILTER'
export const TOGGLE_ENTRY = 'TOGGLE_ENTRY'

export function toggleFilter (id, checked) {
  return { type: TOGGLE_FILTER, id, checked }
}

export function toggleEntry (id, open) {
  return { type: TOGGLE_ENTRY, id, open }
}
