---
eleventyNavigation:
  order: -1
---

## Short Description

{{ component.description | safe }}

## Long Description

This one is a simple one to get started and to check that your tooling works.

Don't expect anything really hard in this test. If you have a solution in mind and it works, it's probably right.

Also it explains to you how this works.

Our target is to create a component which displays a simple text and later a button which triggers an alert.

Most future components are also split in multiple stages ascending in difficulty.
Here we come to understanding how a component discription works.

### Stages

#### 1. Get a solution running

Since you're reading this, you already managed to clone the repo (maybe even fork it), run `npm install` in it, started the webserver by running `npm run serve` and found this component. Maybe you even took a look at the folder structure.

#### Let's get a first touch

Open up the **componer** folder in an editor of your choice.

In **src** is the **components** folder.

Inside there is a folder for each component.

Each component has a yaml file called like the folder to set some metadata for the component itself, an index.md which contains this description and a folder for each variation/implementation. Only the last part is interesting for you.

Go on and find the **vanilla** variation folder for this component ({{ component.name }}).

The **vanilla** folder only contains two files and normally you would need to create them yourself.

First one is **index.md**. This contains your code/solution and the second one is **&lt;variation&gt;.md** (in this case vanilla.md). This file is needed for componer to know which variation you're implementing. **Always call it the same as the folder it's placed in.**

The content looks like this:

```yaml
variation: <variation>
```

For the readme I already prepared those files for you:

- vanilla.yaml (this one contains some metainfo for the variation)
- index.html (you place your code here inside the `raw` block)

Now create a level one heading (h1) in **index.html** with the content "Hello World".

If you did everything right [this](./vanilla) should show you "Hello World" as a heading.

#### 2. Add custom styling

Those letters are quite small. Let's enlarge them!

First add an *id* or *class* to your heading and add a style block changing the font-size for that heading to 5rem.

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
