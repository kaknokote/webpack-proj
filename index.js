import "./index.css";
import image from './assets/js.jpg';

const img = document.createElement("img");
const header = document.createElement("h1");
header.textContent = "I love JavaScript";
img.src = image;
document.body.append(header);
document.body.append(img);


