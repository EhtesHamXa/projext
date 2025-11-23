const fs = require("fs");
const path = require("path");

if (!fs.existsSync("dist")) fs.mkdirSync("dist");

["index.html", "style.css", "app.js"].forEach(file => {
  fs.copyFileSync(path.join(".", file), path.join("dist", file));
});

console.log("Build complete!");
