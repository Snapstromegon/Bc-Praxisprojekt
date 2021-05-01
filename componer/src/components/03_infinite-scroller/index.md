## Short Description

{{ component.description | safe }}

## Long Description

### Context

**I recommend doing the first three stages of [Comment List](../02_comment-list) first before starting this component!**

### Setup / Data Loading

This component requires some preperation from our side. Because of this we inject some JS modules in the page and you need to wait for them to finish loading. To make this easy for you, you can use the following way to garuantee that you only start executing your code after Componer is ready:

- you await the global ```window.componer.ready``` promise which is resolved when all preperation is done

After the promise above resolved, you can use the following code to load the first 10 comments:

```js
window.componer.component.fetchComments({offset: 0, amount: 10}).then(comments => /*...*/)
```

The offset is the starting point and the amount is restricted to max. 10 items at once.

The default values for the ```fetchComments``` function are *offset=0* and *amount=10*

The response of this function looks like this:

```ts
Promise<{
  done: bool (true when the last comment is loaded),
  total: Number (total number of comments),
  comments: [
    {
      username: String,
      votes: Number (Integer from -50 to 200),
      comment: String
    }
  ]
}>
```

### Stages

#### 1. Base Comment List

Do the first three stages of [Comment List](../02_comment-list) to get a base for this component.

#### 2. Manual Lazy Load

Let's implement a manual way of lazy loading now.

This just loads the first chunk of comments and shows a button to load more at the end of the list while nothing is loading and there are still comments left to load.

When the button is clicked, load more comments.

#### 3. Placeholders

Since we now are fine with loading the data lazely at a later point and our API is quite slow, try adding a placeholder which get's filled by the real data when it comes in.

#### 4. Infinite Scrolling

Please change your solution so only the chunks are loaded which are needed to fill the screen. It's fine to load the chunks again one after the other. Our new requirement is now, that we want to load the next chunk when the user scrolls near the end of the loaded list.

You could use e.g. [Intersection Observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) to detect that the user scrolled near the end.

In the end we want an experience like e.g. in Twitter or Facebook where it feels like you can scroll infinetly.
