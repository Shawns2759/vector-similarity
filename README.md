# vector-similarity
Lightweight Cosine Similarity Function. Alternative to the `compute-cosine-similarity` package. Works with high dimension vectors like openAI embeddings.

## Installation

`$ npm install vector-similarity`

## Usage

### As an ES module

```js
import { cosineSimilarity } from 'vector-similarity';

const similarity = cosineSimilarity(vector1, vector2);
```

### As a CommonJS module

```js
const { cosineSimilarity } = require('vector-similarity');

const similarity = cosineSimilarity(vector1, vector2);
```