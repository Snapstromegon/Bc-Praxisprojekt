---
layout: componer/main.njk
eleventyNavigation:
  key: Start
  order: -2
---

# Componer

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
