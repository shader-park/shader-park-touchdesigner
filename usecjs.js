const fs = require('fs');
let filePath = './node_modules/shader-park-core/package.json'
let rawdata = fs.readFileSync(filePath);
let pkg = JSON.parse(rawdata);
pkg['main'] = 'dist/shader-park-core.cjs.js';
console.log('setting shader-park-core to .cjs', pkg['main']);

fs.writeFileSync(filePath, JSON.stringify(pkg));