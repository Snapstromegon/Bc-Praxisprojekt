---
layout: componer/main.njk
eleventyNavigation:
  key: Start
---

# Componer

## Used Tech

This project is based on [11ty](https://11ty.dev).

## How to use

In src is the component folder.

Inside there is a folder for each component.

Each component has a yaml file called like the folder to set some metadata for the component itself and a folder for each framework/implementation.

Use the framework's yaml file to add some configuration for yaml and eleventy.
Replace ```<framework>``` with the name of the framework in lower case.

```yaml
framework: <framework>
eleventyComputed:
  eleventyNavigation:
    key: "{{ framework }}"
    parent: "{{ component }}"
```

And finally place your component implementation in the index.html in the framework folder.

So the resulting folder structure is:

```
src/
  components/
    <component>/
      <framework>/
        <framework>.yaml
        index.html
      <component>.yaml
```
