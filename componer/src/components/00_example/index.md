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

Vanilla is fairly easy. You don't need to do anything.

### React

#### Client Side React using JSX

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

#### Client Side Vue without JSX

Using Vue is fairly easy. Just include it via one line in your HTML.

```html
<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
```
