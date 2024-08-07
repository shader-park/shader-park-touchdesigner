# shader-park-touchdesigner
Render Shader Park sculptures in TouchDesigner

[![Download Latest Plugin](https://img.shields.io/badge/Download_Latest_Plugin_%E2%86%93-blank?style=for-the-badge)](https://github.com/shader-park/shader-park-touchdesigner/releases/latest/download/Shader_Park_TD.tox)

   
[![Watch the Tutorial on Using the new Plugin](https://github.com/user-attachments/assets/afa6acf9-a362-442b-8a4a-09f70ff4d45e)](https://youtu.be/YxT1u5hOifU?si=0TTnFKtbpnCGB3Sv)
[Watch the Tutorial on Using the new Plugin](https://youtu.be/YxT1u5hOifU?si=0TTnFKtbpnCGB3Sv)


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
