---
layout: post
title:  "I just wasted 3 hours."
subtitle: "I suppose \"waste\" is relative" 
date:  2016-06-28 14:53:17 -0800
categories: webdev
author: knarf
book: "Too many google search results"
excerpt_separator: <!--more-->
---

So I've built a couple apps, working with the pains of learning technology to make myself relevant again. (I've been told I can just "learn on the job", but at least having SOME experience with the tech stack is much much better than next to nothing.)

So I've built a fun app that scrapes a concert venue website, and then displays each artist with the date of the concert, and I used the Spotify API to play a 30s preview for each artist if you click on the artist name.

So after hacking together some things, borrowing code from here and there, it works on Cloud9.  I figured the next step was deploying it.  

<!--more-->

I used Heroku, which has a great service for small apps that you're just playing around with, and I thought it would be easy breezy, and it really should've been. After all, it was a "simple" web-scraper --> spotify API. 

I just spent the last 3 hours trying to figure out why it wouldn't work when I deployed, and honestly I still don't know the answer. 

It works "locally", but the GET request to scrape the website isn't returning as expected on the deployed app, causing the webapp to timeout. 

I plan on asking my roommate when he gets back, but I think this is a small example of my hubris at play. So it made me wonder: Was this 3 hours of time wasted? 

I'm convinced it's a small line of code that I wasn't aware of, but the fact that it works in Cloud9, and not some local machine, really makes me suspicious. 

I think my lesson for myself here is: Know when to ask questions. Know when to challenge yourself to figure it out. Understand that you're trying to LEARN. From a PM point of view, perhaps it isn't utterly necessary for me to understand ALL the inner-workings.  However, I want to be competently *technical*, so I need to be able to empathize with the developers. 

Granted, developers will be much more competent than I am (I hope), so the rabbit hole shouldn't go as deep.  

