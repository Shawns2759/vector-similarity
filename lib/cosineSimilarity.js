"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cosineSimilarity = void 0;
function dotProduct(a, b) {
    return a.reduce((sum, value, index) => sum + value * b[index], 0);
}
function vectorMagnitude(a) {
    return Math.sqrt(a.reduce((sum, value) => sum + value * value, 0));
}
function cosineSimilarity(a, b) {
    const dotProd = dotProduct(a, b);
    const magnitudeA = vectorMagnitude(a);
    const magnitudeB = vectorMagnitude(b);
    return dotProd / (magnitudeA * magnitudeB);
}
exports.cosineSimilarity = cosineSimilarity;
