# ochiai-string-similarity
Finds measure of similarity between two strings using Ochiai coefficient.

## Installation 
```sh
npm install ochiai-string-similarity --save
yarn add ochiai-string-similarity
bower install ochiai-string-similarity --save
```

## Usage

### Javascript

```javascript
var ochiai = require('ochiai-string-similarity');
var coeff = ochiai.getCoefficient('fdH&tr', 'fdH&tr');
```
```sh
Output should be '1.0'
```

### TypeScript
```typescript
import { getCoefficient } from 'ochiai-string-similarity';
console.log(getCoefficient('fdH&tr', 'fdH&tr'))
```
```sh
Output should be '1.0'
```

## Test 
```sh
npm run test
```