export function underscoreCapitalize(strVal: string): string {
  return strVal
    .split('_')
    .map(s => s.charAt(0).toUpperCase() + s.substring(1))
    .join('');
}
