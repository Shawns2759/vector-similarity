# vector-cosine-similarity
A lightweight Cosine Similarity Function. Built as an alternative to the `compute-cosine-similarity` package. Works with high dimension vectors like openAI embeddings.

## Installation

`$ npm install vector-cosine-similarity`

## Usage

### As an ES module

```js
import { cosineSimilarity } from 'vector-cosine-similarity';

const similarity = cosineSimilarity(vector1, vector2);

console.log(similarity) // => .78456378
```
