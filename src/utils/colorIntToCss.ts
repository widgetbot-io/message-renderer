export function colorIntToRgba(
  color: number,
  alpha = 1
): `rgba(${number}, ${number}, ${number}, ${number})` {
  const r = (color >> 16) & 0xff;
  const g = (color >> 8) & 0xff;
  const b = color & 0xff;

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
