function getComponent(data) {
  const result = [];
  for (const component of data.components) {
    for (const tag of data.tags) {
      if (component.id == tag) {
        result.push(component);
      }
    }
  }
  return result[0];
}

module.exports = {
  eleventyComputed: {
    layout: (data) =>
      data.framework
        ? "componer/component_variant.njk"
        : "componer/component.njk",
    component: getComponent,
    eleventyNavigation: {
      key: (data) => data.framework || getComponent(data).id,
      parent: (data) => (data.framework ? getComponent(data).id : "Components"),
      title: (data) => data.framework || getComponent(data).name
    },
    title: (data) =>
      getComponent(data).name + (data.framework ? " / " + data.framework : ""),
  },
};
