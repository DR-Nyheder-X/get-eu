export const TOGGLE_SECTION = 'TOGGLE_SECTION'

export function toggleSection (value, checked) {
  return { type: TOGGLE_SECTION, value, checked }
}
