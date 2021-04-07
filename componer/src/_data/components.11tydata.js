const fs = require("fs");
const path = require("path");

const isDirectory = async (source) =>
  (await fs.promises.lstat(source)).isDirectory();

const COMPONENT_DIR = path.join(__dirname, "..", "components");

module.exports = async () => {
  const components = {};
  for (const componentDir of await fs.promises.readdir(COMPONENT_DIR)) {
    if (await isDirectory(path.join(COMPONENT_DIR, componentDir))) {
      for (const variantDir of await fs.promises.readdir(
        path.join(COMPONENT_DIR, componentDir)
      )) {
        if (
          await isDirectory(path.join(COMPONENT_DIR, componentDir, variantDir))
        ) {
          components[componentDir] ||= {
            title: componentDir,
            variants: [],
          };
          components[componentDir].variants.push(variantDir);
        }
      }
    }
  }
  return {
    components
  };
};
