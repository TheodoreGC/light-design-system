export function underscoreCapitalize(strVal) {
  return strVal
    .split('_')
    .map(s => s.charAt(0).toUpperCase() + s.substring(1))
    .join('');
}
