---
layout: componer/main.njk
title: Create Your Contribution
eleventyNavigation:
  parent: How To Contribute
  key: Create Your Contribution
  order: 2
---

# Create Your Contribution

Now that you have a clone/fork of this repo, please go ahead and fill out the first questionaire **questionaires/01_before_you_start.md** by just writing your answers under the questions.

Before you now start working on your first solution, please make a copy of **questionaires/01_while_you_work__{component}__{variation}.md** and rename it to **questionaires/01_while_you_work__01_readme__vanilla.md**. Please read the questionaire once before starting to work.
Do this step again for each component and variation you implement.

## Implement more Variations or more components/stages

Since I try to compare frameworks and their developer experience, to me it's more valuable if you take fewer components and implement them in as many variations as you can.

If you're looking for variations to use, maybe start with these 4:

- "vanilla": Vanilla JS (without webcomponents/custom elements)
- "webcomponent": Vanilla JS using WebComponents / custom elements
- "react": Using the React framework (client and/or statically rendered)
- "vue": Using the Vue framework (client and/or statically rendered)

I would appreciate if you'd do at least one vanilla implementation (vanilla or webcomponents) for each component you do.

This project includes more components and stages than I expect you to complete, since I still value every minute you spend working for my project.

If you'd ask me, I'd recommend to implement the Read Me component in every variation you want to use and then choose maybe two different components and implement them in those variations and do as many stages as you like.

Also please take the questionaires seriously since they are at least as important as your code results.

## Tips for development

Because componer uses eleventy 0.12 and incremental builds are part of eleventy 1.0 while working on a component it will probably keep jumping to the top of the description each time you safe your work.

This can be annoying so I deployed this repo on netlify under [https://componer.hoeser.dev/](https://componer.hoeser.dev/) so you can go there to look at the component descriptions.

## Let's get started!

Now you can start working on your first component.

To give you a helping hand and show you how things are done, I recommend starting at the [Read Me Component](/components/01_readme/).

## When you're done with "Read Me"

If you check under [Components](/components) you see something similar to the top of this page.

Basically it's an image of the component you'll build, the name, a short discription, the frameworks (variations) which are already known by Componer and finally a difficulty rating.

The difficulty rating is done by levels one to five. One beeing the easiest and 5 beeing the hardest.

Each rating contains two levels. The starting level of the first stage of the component and the end level, which is the last level of the component.

It's totally fine to not implement all stages of a component. Also the difficulty is for the component concepts, not the possible framework implementations. So it might be that a component is easier or harder to implement in your variation of choice.

## When you're done

After you implemented all components and variations you want to contribute, continue with [submitting your results](../afterYoureDone).
