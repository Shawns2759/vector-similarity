function dotProduct(a: number[], b: number[]): number {
  return a.reduce((sum, value, index) => sum + value * b[index], 0);
}

function vectorMagnitude(a: number[]): number {
  return Math.sqrt(a.reduce((sum, value) => sum + value * value, 0));
}

export function cosineSimilarity(a: number[], b: number[]): number {
  const dotProd = dotProduct(a, b);
  const magnitudeA = vectorMagnitude(a);
  const magnitudeB = vectorMagnitude(b);
  return dotProd / (magnitudeA * magnitudeB)
}