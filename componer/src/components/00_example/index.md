---
eleventyNavigation:
  order: -1
---

## Short Description
{{ component.description | safe }}

## Long Description

Setting up frontend frameworks is often connected with some edgecases and is often alot of boilerplate.
Feel free to do your own setup, but if you just want a working headstart, feel free to use the variations of this component as a starting point.

### Vanilla

#### Classic (./vanilla)

Vanilla is fairly easy. You don't need to do anything.

#### Web Components (./wc)

Using Web Components is as easy as using the classic vanilla style.

Just include your component as an asset and use it in your index.html.

### React

#### Client Side React using JSX (./react)

I recommend using the following boilerplate in your HTML:

```html
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
<script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin></script>
<script src="assets/hello-world.jsx" type="text/babel"></script>
```

This loads babel for jsx support, react and react-dom (both in version 17) and finally loads a jsx from the assets folder.

Keep in mind, that you stoll need to add an element as the container for the react app.

### Vue

#### Client Side Vue (./vue)

Using Vue is fairly easy. Just include it via one line in your HTML.

```html
<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
```

#### Prerendered Single File Component (./vue-sfc)

Open a second commandline in the vue-sfc folder and run ```npm run build``` to build your component in **example.vue**.

There is currently a known bug in 11ty [here](https://github.com/11ty/eleventy/issues/1513) which prevents the hot reload for the frontend to work.

As you can see in the index.html, there's a little more boilerplate.

```html
<!-- Load Vue -->
<script src="https://unpkg.com/vue"></script>
<!-- Load the component (adapt the "component" part to match your component name) -->
<script src="./assets/component.umd.js"></script>

<!-- Load CSS -->
<link rel="stylesheet" href="./assets/component.css">


<!-- Provide an entrypoint -->
<div id="app">
  <demo></demo>
</div>

<!-- Mount the component -->
<script> 
new Vue({
  components: {
    demo: component
  }
}).$mount('#app')
</script>
```
