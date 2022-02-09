export function clamp(val, min, max) {
  return Math.max(min, Math.min(max, val));
}

export function lerp(start, end, t) {
  return start * (1 - t) + end * t;
}

export function mapLinear(x, a1, a2, b1, b2) {
  return b1 + ((x - a1) * (b2 - b1)) / (a2 - a1);
}

export const randomInt = (low, high) =>
  low + Math.floor(Math.random() * (high - low + 1));

export const randomFloat = (low, high) => low + Math.random() * (high - low);
