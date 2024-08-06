# shader-park-touchdesigner
Render Shader Park sculptures in TouchDesigner

[![Download Latest Plugin](https://img.shields.io/badge/Download_Latest_Plugin_%E2%86%93-blank?style=for-the-badge)](https://github.com/shader-park/shader-park-touchdesigner/latest/download/Shader_Park_TD.tox)

### Getting Started 🎉
Drag and drop the .tox File into your TouchDesigner project. Place down a Text DAT and paste your Shader Park code into it. Connect the Text DAT to the Shader Park plugin to render it.

### Adding Uniforms / Inputs
If you use any input in your Shader Park code eg:
```javascript
let size = input();
```
You will need to add a uniform with the same name (in this case ```size```). To do this go inside the Shader_Park.tox plugin and 
find the shader_material GLSL MAT. In the Vectors tab add in the name of the uniform.
<img width="458" alt="image" src="https://user-images.githubusercontent.com/6014011/167264366-9ec8cd44-104c-4827-9a17-0b78d37db640.png">


---

**This project has been tested on MacOS + Windows with no node.js installed**  
For Windows this only run on Windows 8.1 and above.
**Not yet tested on Linux**

---
