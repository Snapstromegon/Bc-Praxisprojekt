## Short Description

{{ component.description | safe}}

## Long Description

### Context

Imagine you're working on a company blog and you integrate a comments API. This API is really bad and slow, but it's good enough for what we want to do now and Company doesn't want to switch solutions.

Someone before you already wrote a wrapper for that API so you can use that function for loading the data (as described below), but we still need to display the comments on the page.

### Setup / Data Loading

This component requires some preperation from our side. Because of this we inject some JS modules in the page and you need to wait for them to finish loading. To make this easy for you, you can use the following way to guarantee that you only start executing your code after Componer is ready:

- you await the global ```window.componer.ready``` promise which is resolved when all preperation is done

After the promise above resolved, you can use the following code to load the first 10 comments:

```js
window.componer.component.fetchComments({offset: 0, amount: 10}).then(commentsResponse => /*...*/)
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

#### 1. First Solution

As the first step we want to load and display the frist **10** results. It's enough to use something like the following at first:

<hr>

$Username wrote:

$Comment $Comment $Comment $Comment

<hr>

This is done so we can check that the setup is working correctly and so we have starting point for future Stages.

#### 2. Load all Comments

Now that we loaded the first 10 comments successfully, we can go on and load all comments.

#### 3. Chunking

As you can see, the loading of comments takes fairly long (this is done on purpose via the loading function and has nothing to do with your network connection).

Let's see if we can speed things up a bit.

Let's try chunking the data by loading a small number of comments at a time (e.g. 10) and displaying them in as they come in.

So the flow would look like this:

```
-> Start loading 0..10
<- Reseive 0..10
xx Display 0..10
-> Start loading 10..20
<- Reseive 10..20
xx Display 10..20
...
```

That way we already see the first 10 items while the rest is loading.

Please make sure that the first set of comments is not deleted when adding the second set.

#### 4. Parallel loading

Now that we can load chunks and get content to screen faster, maybe something even faster comes to mind.

Try loading all comments as fast as possible by utilizing the ability to load multiple chunks at once and not waiting for the previous one to finish.

So the new flow would looke something like the following (the correct answer looks differently, but I don't want to spoil it):

```
-> Start loading 0..10
-> Start loading 10..20
-> Start loading 20..30
...
<- Reseive 0..10
xx Display 0..10
<- Reseive 10..20
xx Display 10..20
<- Reseive 20..30
xx Display 20..30
...
```

Make sure you don't assume the total number of comments and that the comments stay in the correct order.
Each comment starts with "Comment X -" so you check your solution.

**DON'T USE "Comment X -" TO SORT THE COMMENTS!**

#### 5. Voting matters

Every comment has a vote count connected to it.

Some users are only interested in the top comments.

Try adding a button which switches between a chronoligical order (like the comments are returned by the API) and a vote order (highest number of votes comes first).

Keep in mind, that incoming comments should be inserted at the correct place.

#### 6. Infinite Scrolling

Now we want to go in a slightly direction than in stage 4.

Please change your solution so only the chunks are loaded which are needed to fill the screen. It's fine to load the chunks again one after the other. Our new requirement is now, that we want to load the next chunk, when the user scrolls near the end of the loaded list.

You could use e.g. [Intersection Observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) to detect that the user scrolled near the end.

In the end we want an experience like e.g. in Twitter or Facebook where it feels like you can scroll infinetly.
