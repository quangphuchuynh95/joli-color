export function HEXToRGB(hex: string) {
  let matches = (/^#([a-z0-9])([a-z0-9])([a-z0-9])$/).exec(hex);
  if (!matches) {
    matches = (/^#([a-z0-9]{2})([a-z0-9]{2})([a-z0-9]{2})$/).exec(hex);
  }
  if (!matches) {
    throw new Error(`${hex} is not a hex color`);
  }
  const [, r, g, b] = matches;
  return {
    r: parseInt(r, 16),
    g: parseInt(g, 16),
    b: parseInt(b, 16),
  }
}
