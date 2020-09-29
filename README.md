# shader-park-touchdesigner
Render Shader Park sculptures in TouchDesigner
### Getting Started 🎉
Working file available in the dist folder.
1) Unzip shader-park-core.zip and place the files inside the same folder as ```Shader Park TD.toe```
2) Open up Shader Park TD.toe and have fun.

Write your Shader Park code in a txt file and attach it to the Shader_Park_Core component to render.

**Tested on MacOS + Windows with no node.js installed**  
**Not yet tested on Linux**

---
### Building from source
  

The following build commands are available if you want to re-compile the node.js environment + script that converts shader park code into executable for the TouchDesigner Project.

### Project setup
```
yarn install
```

The build process requires shader-park-core.cjs.js, but by default it's importing the esm version. To fix do the following:

1) Delete ```node_modules/shader-park-core/dist/shader-park-core.esm.js```  
  
2) Open ```node_modeules/shader-park-core/package.json``` and change "main" from:
```"dist/shader-park-core.esm.js"``` to ```"dist/shader-park-core.cjs.js"```  

  
  
### Compile the nodejs runtime + shader-park-core into executables in ./dist 
```
yarn build 
```