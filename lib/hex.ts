import { HEXToRGB } from './converts/to-rgb';
import { hexToHSL } from './converts/to-hsl';
import { HSLToHex } from './converts/to-hex';

export function isDark(hex: string) {
  // YIQ equation from http://24ways.org/2010/calculating-color-contrast
  const { r, g, b } = HEXToRGB(hex);
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq < 128;
}

export function isLight(hex: string) {
  return !isDark(hex);
}

export function lighten(hex: string, ratio: number) {
  const { h, s, l} = hexToHSL(hex);
  return HSLToHex(h, s, l * ratio);
}

export function darken(hex: string, ratio: number) {
  return lighten(hex, 0 - ratio);
}
