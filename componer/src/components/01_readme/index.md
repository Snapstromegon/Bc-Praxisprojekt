---
eleventyNavigation:
  order: -1
---

## Short Description

{{ component.description }}

## Long Description

This one is a simple one to get started and to check that your tooling works.

Don't expect anything really hard in this test. If you have a solution in mind and it works, it's probably right.

Also it explains to you how this works.

Our target is to create a component which displays a simple text and later a button which triggers an alert.

Most future components are also split in multiple stages ascending in difficulty.
Here we come to understanding how a component discription works.

### How to get an overview over a component

If you check under [Components](/components) you see something similar to the top of this page.

Basically it's an image of the component you'll build, the name, a short discription, the frameworks (variations) which are already known by Componer and finally a difficulty rating.

The difficulty rating is done by one to five stars. One star beeing the easiest and 5 stars beeing the hardest.

Each rating contains green stars and red stars. This is used to display the range of difficulty. Green stars describe the difficulty of the first stage of the component and the red stars the difficulty of the last stage.

This {{ component.name }} as you can see has a rating from one to two.

It's totally fine to not implement all stages of a component. Also the difficulty is for the component concepts, not the possible framework implementations. So it might be that a component is easier or harder to implement in your variation of choice.

### Stages

#### 1. Get a solution running

Since you're reading this, you already managed to clone the repo (maybe even fork it), run `npm install` in it, started the webserver by running `npm run serve` and found this component. Maybe you even took a look at the folder structure.

First open up Componer in your editor of choice if you haven't already and navigate to src/components/01_readme/vanilla.

I already prepared two files for you here:

- vanilla.yaml (this one contains some metainfo for the framework)
- index.html (you place your code here inside the `raw` block)

Now create a level one heading (h1) in **index.html** with the content "Hello World".

If you did everything right [this](./vanilla) should show you "Hello World" as a heading.

#### 2. Add custom styling

Those letters are quite small. Let's enlarge them!

First add an *id* or *class* to your heading and add a style block changing the font-size for that heading to 5rem.

A solution could look like the following:

##### In comes some magic!

Componer is setup so you can create a folder called **assets** inside of a variation (next to **index.html**) and it get's copied over to the output folder relative to **index.html**.

This makes styling easier for us.

Now create a new file **assets/style.css** and link to it via a relative link tag (```<link rel="stylesheet" href="./assets/style.css">```). Finally extract the styles from the HTML into that css file.

#### 3. Buttons

This is the first real task:

- Add a button to the page with a text "Say Hi!"
- When the button is clicked, an alert should show up and say "Hi!"

### Done!

You successfully implemented your first complete component.

Now eather try again by adding another variation (e.g. vue or react) by adding the corresponding folder, yaml and index.html, or go on and try implementing one of the other components.

The difficulty rating of this component is not representative for the other components.
