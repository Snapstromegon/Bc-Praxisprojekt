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
      data.variation
        ? "componer/component_variant.njk"
        : "componer/component.njk",
    component: getComponent,
    eleventyNavigation: {
      key: (data) => data.variation || getComponent(data).id,
      parent: (data) => data.disabled ? "DISABLED" : (data.variation ? getComponent(data).id : "Components"),
      title: (data) => data.variation || getComponent(data).name
    },
    title: (data) =>
      getComponent(data).name + (data.variation ? " / " + data.variation : ""),
  },
};
