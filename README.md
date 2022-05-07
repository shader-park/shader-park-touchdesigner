# shader-park-touchdesigner
Render Shader Park sculptures in TouchDesigner
### Getting Started 🎉
Working files are available in the dist folder.
1) Unzip shader-park-core.zip (Mac users right click on ```shader-park-td-macos``` click Open to give TD access to run the executable).
2) Open up Shader Park TD.toe and have fun.
3) Write your Shader Park code in a text DAT and attach it to the Shader_Park_Core component to render (note there are examples and a render network already set up for you to experiment with).


### Adding Uniforms / Inputs
If you use any input in your Shader Park code eg:
```javascript
let size = input();
```
You will need to add a uniform with the same name (in this case ```size```) to the Vectors tab of the pbr2GLSL1 GLSL MAT.
<img width="458" alt="image" src="https://user-images.githubusercontent.com/6014011/167264366-9ec8cd44-104c-4827-9a17-0b78d37db640.png">


---

**This project has been tested on MacOS + Windows with no node.js installed**  
For Windows this only run on Windows 8.1 and above.
**Not yet tested on Linux**

---
### Building from source
  

The following build commands are available if you want to re-compile the node.js environment + script that converts shader park code into an executable for the TouchDesigner Project.

### Project setup
```
yarn install
```
  
### Compile the nodejs runtime + shader-park-core into executables in ./dist 
```
yarn build 
```
