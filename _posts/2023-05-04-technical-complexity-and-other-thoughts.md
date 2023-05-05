---
layout: post
title: Technical complexity and game design thoughts
description:  Technical thoughts and notes 
tags: random
minute: 5
---

# People and systems
Lately, I've been thinking about how people, products, and systems are interconnected, and how we all operate within our own pre-programmed systems, whether we're aware of it or not. Our experiences, environment, and the people around us all contribute to the systems we operate within.

How we interact with different people and products can vary greatly, from engaging in autopilot with close friends to being more conscious in our interactions with work colleagues and strangers.

Products become extensions of a person's process, and the best products seamlessly integrate into that process.

# Technical complexity and you

> Okay, but the problem I'm solving is super technical and complex, so my product needs to be complex as well.

Complexity is necessary for some products, but only if it adds value and impact. There are complex tools, like the abacus or monitoring tools such as Snowflake/DataDog, that become indispensable to skilled workers once they master them.

As a product manager, it's important to balance complexity with ease of use and value. Does the user understand how the complexity has been simplified, or are you passing that complexity on to them?

In API and technical product design, it's easy to pass on complexity to the user. However, this can lead to more decision making on the user's end, potentially harming the system and experience. It's important to consider what objects and states the user's application must keep track of to ensure integration is successful, and how many sources of truth are being created.

Some products are incredibly complex, but what makes some easier to use than others?

# Addressing Complexity with Lessons from Game Design

1. Make failing a low consequence event.
2. Disguise learning and mastery
3. Borrow and steal design patterns 

## 1. Make failing a low consequence event.
In most games, "death" is a low consequence event. You can restart the game, load from a save, and try again. By lowering the consequence of a mistake, users can experiment and further their mastery. 

In product design, features like API sandboxes, reverting states, undo actions, and save/load configurations can make it easy for users to experiment with low consequences. Although these features are often considered "nice to haves," they can set your product apart from others.

## 2. Disguise learning and mastery
Some games introduce complexity without overwhelming the user. They allow players to accumulate knowledge and internalize it over time. In product design, onboarding is often about users actualizing the value from the product in the shortest amount of time possible. This may be achieved through wizards, tooltips, tutorials, and other features. However, after the onboarding process, there are often no more features to guide users. 

To address this, you can disguise learning and mastery by making it a natural part of the product experience. For example, tooltips that teach new features as users hover over them, or product updates that introduce new features gradually over time, can help users learn without feeling overwhelmed.

## 3. Borrow and steal design patterns 
Games and other products often use design patterns that have been proven to work well. By borrowing these patterns and adapting them to your product, you can create a familiar and intuitive user experience.

---

Overall, balancing complexity and ease of use is a crucial part of product design. By learning from game design and borrowing proven design patterns, you can create a product that is both complex and easy to use, providing value to skilled workers and novices alike.

# Interesting ___ today

### random reads
- \[[x](https://caseyaccidental.com/product-complexity)\] Five Ways to Address Complexity In Your Product
- \[[x](https://www.semianalysis.com/p/google-we-have-no-moat-and-neither)\] Google "We Have No Moat, And Neither Does OpenAI"

### views
- \[[x](https://www.youtube.com/watch?v=HjhsY2Zuo-c)\] Designing Marvel Snap



