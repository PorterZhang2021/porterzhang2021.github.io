---
layout: post
title: How I Explore an Unfamiliar Codebase
date: 2026-10-28
description: A repeatable way to build a useful mental model before making changes in a new repository.
tags: software-engineering code-reading
categories: engineering
---

When I open an unfamiliar repository, I try not to read files in directory order. That often produces a lot of detail without explaining how the system actually works. I start by finding the path from an external input to an observable result.

## Start with the repository's shape

First I look for the README, build files, top-level directories, and tests. These give me an initial map: what the project claims to do, how it is started, where its major modules live, and what behavior maintainers consider important enough to test.

I also check recent commits. Recent changes often reveal active areas of work and the vocabulary the team uses for its concepts.

## Trace one real execution path

Next I choose one meaningful operation and follow it through the code. For a service, that might be a request from its handler to the core logic and then to storage or another dependency. For a library, it might be one public API call through its main implementation.

The aim is not to understand every abstraction. It is to answer a small set of questions: where does the operation enter, which components own the important decisions, and what can fail along the way?

## Let tests answer specific questions

Tests are most useful when I read them with a question in mind. They can show how a boundary is expected to behave, which failure cases matter, and how a component is meant to be used. When a test is unclear, running it or making a small local change can reveal more than reading several neighboring files.

## Write down the model, then update it

I keep a short sketch of the components and their responsibilities. It is deliberately provisional. The goal is to make the next question sharper, not to produce a complete architecture document on the first pass.

This approach helps me move from browsing to contributing: understand one path, verify assumptions with tests, and expand the model only when the next change requires it.
