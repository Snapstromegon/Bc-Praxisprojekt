## Short Description

{{ component.description | safe }}

## Long Description

### Context

This september there are elections in germany and let's imagine that you're working for a new outlet that wants to show live election results on their website.

The previous developer already wrote a wrapper for the (slow) API, but you still need to display the data.

### Setup / Data Loading

This component requires some preperation from our side. Because of this we inject some JS modules in the page and you need to wait for them to finish loading. To make this easy for you, you can use the following way to garuantee that you only start executing your code after Componer is ready:

- you await the global `window.componer.ready` promise which is resolved when all preperation is done

After the promise above resolved, you can use the following code to load the results:

```js
window.componer.component.fetchLiveResults().then(result => /*...*/)
```

The response of this function looks like this:

```ts
Promise<{
  results: {
    "<party_shortname>": {
      votes: Number (votes for this party),
      color: String/CSSColor (You can use this safely to color the box)
  },
  total: Number (total number of votes)
}>
```

### Stages

#### 1. Displaying the results as a list

As a first step we want to display the results in a table like the following:

| Party |  Votes |   % |
| :---- | -----: | --: |
| <span style="display: inline-block; width: 1em; height: 1em; background: hsl(0, 70%, 70%)"></span> ABC   | 654321 | 50.0% |
| <span style="display: inline-block; width: 1em; height: 1em; background: hsl(100, 70%, 70%)"></span> DEF   | 123456 | 10.0% |
| <span style="display: inline-block; width: 1em; height: 1em; background: hsl(200, 70%, 70%)"></span> Other | 400000 | 40.0% |

The requirements for this table are

- Only show partys with more than 5% of the votes (since partys below that don't get seats in the german parlament)
- Accumulate all partys below 5% in an "Other" group
- Show percentage rounded to one digital place (e.g. 5.7%) precision

#### 2. Auto Update the table

The API updates the data every second, so please update your display every second or couple of seconds too.

#### 3. Add a stacked bar graph

To give a more visual representation we want to show the current results as a stacked bar graph or horizontal marimekko chart.
This should display the results with blocks in the color corresponding to the party and size corresponding to the number of votes.

Keep in mind to also update the bar chart when the data updates.

#### Bonus Stage: Animation

Add an animation to the chart which animates to the new state on update by changing the size of the boxes smoothly.
