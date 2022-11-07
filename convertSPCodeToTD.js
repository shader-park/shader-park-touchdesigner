const fs = require('fs');
const converters = require('shader-park-core');
const src = process.argv[2];
const useGLSL = process.argv[3];
if(useGLSL) {
    console.log(JSON.stringify(converters.glslToTouchDesignerShaderSource(src)));
} else {
    console.log(JSON.stringify(converters.sculptToTouchDesignerShaderSource(src)));
}

