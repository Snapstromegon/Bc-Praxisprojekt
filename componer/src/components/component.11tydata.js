const fs = require("fs");
const path = require("path");

const isDirectory = async (source) =>
  (await fs.promises.lstat(source)).isDirectory();

module.exports = async () => {
  const files = await fs.promises.readdir(path.join(__dirname, "."));
  const components = [];
  for (const file of files) {
    if (await isDirectory(path.join(__dirname, file))) {
      components.push(file);
    }
  }
  return {
    components,
  };
};
