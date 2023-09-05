function numberToRgb(color: number): `rgb(${number}, ${number}, ${number})` {
  const r = (color >> 16) & 0xff;
  const g = (color >> 8) & 0xff;
  const b = color & 0xff;

  return `rgb(${r}, ${g}, ${b})`;
}

export default numberToRgb;
