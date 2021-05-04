---
layout: componer/main.njk
eleventyNavigation:
  key: Start
  order: -2
---

# Componer

## Hi there

If you're reading this, you came here either because I contacted you directly or you saw one of my posts on the internet.

This project is preperation for and part of my bachelors thesis and I'd like to ask you to spend some development time for me to support my paper.

The goal of this project is, to compare the developer experience of different approaches to component driven web development mainly dictated by modern frameworks like Vue or React.

## Contributing

### Preperation

To contribute to this project go to the [GitHub Repo](https://github.com/Snapstromegon/Bc-Praxisprojekt) of this project and clone it.

After that follow the "Getting Started" explanation from the readme which will bring you back here. 

Go on and do that now.

### Implementing Solutions

Now that you have a clone/fork of this repo, please go ahead and fill out the first questionaire **questionaires/01_before_you_start.md** by just writing your answers under the questions.

Before you now start working on your first solution, please make a copy of **questionaires/01_while_you_work__{component}__{variation}.md** and rename it to **questionaires/01_while_you_work__01_readme__vanilla.md**. Please read the questionaire once before starting to work.
To this step again for each component and variation you implement.

Now you can start working on your first component (how to do this is described further down).

### Sending results

After you finished with your solutions (or even partial solutions) answer the questionaire **questionaires/03_when_youre_done.md**.
Now you can either push your work to your fork and open a pull request, or you send the results to me as a zip via a fileshare of your choice and mail it to me via [bc-thesis@hoeser.dev](mailto:bc-thesis@hoeser.dev).

Please delete any node_modules or _site folder before you send me your result.
You could also just send me your questionaires and your component folders.

## Used Tech

This project is based on [11ty](https://11ty.dev).

## Tips for development

Because componer uses eleventy 0.12 and incremental builds are part of eleventy 1.0 while working on a component it will probably keep jumping to the top of the description each time you safe your work.

This can be annoying so I deployed this repo on netlify under [https://componer.hoeser.dev/](https://componer.hoeser.dev/) so you can go there to look at the component descriptions.

## How to use

If you check under [Components](/components) you see something similar to the top of this page.

Basically it's an image of the component you'll build, the name, a short discription, the frameworks (variations) which are already known by Componer and finally a difficulty rating.

The difficulty rating is done by levels one to five. One beeing the easiest and 5 beeing the hardest.

Each rating contains two levels. The starting level of the first stage of the component and the end level, which is the last level of the component.

This {{ component.name }} as you can see has a rating from one to two.

It's totally fine to not implement all stages of a component. Also the difficulty is for the component concepts, not the possible framework implementations. So it might be that a component is easier or harder to implement in your variation of choice.

## Unknown Words

If you find any word that is not clear to you like e.g. variation, take a look at the [Glossary](/glossary)

## Quickstart

The easiest way to get started is to jump in and start at the [Read Me](/components/01_readme) component.
It will give you an introduction to componer and how to get your first component running.
