const fs = require('fs');
const converters = require('./shader-park-core.cjs.js');
const src = process.argv[2];
console.log(JSON.stringify(converters.sculptToTouchDesignerShaderSource(src)));