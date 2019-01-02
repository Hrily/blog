---
layout: post
title: "My GSoC 2018 Experience"
description: "How did I end up creating TrackGit for Haiku"
tags: ["GSoC", "Haiku", "Open Source"]
backdrop: gsoc-tshirt.jpeg
---

_April 23, 2018_

> Senior: Congrats, Bro!!!  
> Me: (Umm... What did I do now?) Why?  
> Senior: You got accepted to GSoC!  
> Me: (Surprised) Really?  
> Senior: Ha be! Check the list. Salman also got accepted. Come near SBI. We're waiting for you.

This was conversation between me and my senior [Mohit Reddy](https://github.com/mohitreddy1996). I hurriedly opened the accepted student list. I was blown. I got accepted to GSoC by Haiku!!! One of my dream finally came true!

And a cherry on the cake, my best friend [Salman Shah](https://github.com/salman-bhai/) also got accepted by Internet Archive.

# Introduction

It's been four months since I completed my GSoC project. Many juniors come to me asking my experience in GSoC and what I did to get accepted to it. So, here's everything about my experience in GSoC.

# Finding an Organization

First thing to do is finding an organization which has good probability of getting into GSoC. You can check previous years organizations list. Generally, the organizations selected in last couple of years have a good **chance** of getting the following year. Also check if the organization is planning to apply for GSoC.

I started looking for organizations in December 2017. The early the better. Around that time, I was really interested in Operating Systems. So, I started looking for orgs(organizations) which worked on OS. Mohit Reddy had given us a list of organizations which he found good. The list had ReactOS and Haiku. I had heard of ReactOS, so I looked upon their repository. But I found the code base a little hard for me. Then I moved to Haiku. It's an operating system based on BeOS of 90s. I found the codebase easy to understand due to C++ as their primary language.

# Getting my first patch

Next thing to do is getting a patch in the org repository. Some orgs have this as requirement for application. But this is really important as this exposes your work to the community, and they get to know you.

Fortunately, Haiku had a list of [Easy Tasks](https://dev.haiku-os.org/wiki/EasyTasks) for beginners. I took up [Notification_Server: add the ability to choose the position of notifications (easy)](https://dev.haiku-os.org/ticket/9749). Honestly, I didn't have a clue what to do to solve it. So I just posted what I would do on higher level. Fortunately, a contributor posted the files where I needed put my code changes. I had a lot of other doubts. Asking the community really helps.

It took around 3 weeks to get the patch merged to the source. Yes, it requires patience and lot of reviews.

Then over next couple of months I was able to make two more contributions. I had to search for doable bugs on their bug list, this also takes time and patience.

# Selected Organization List

The list of selected organizations came in February 2018. Fortunately, Haiku was one of them.

# My Idea for GSoC

Next thing to do is developing an idea for your GSoC project. Their are two ways, either you come up with an idea on your own (community really appreciates this) or take up an idea from org's ideas page (most orgs have it).

Having our own idea comes with a risk. I had thought of an idea. So I pitched this idea to one of the previous year mentor. He told me that, even though the idea was good, it wasn't what the org wanted to achieve. Haiku was in alpha that time, and their main focus was to make it stable.

**Sharing the idea with at least someone in org is important**. Each org has their vision/mission. Your idea might not align with it. Or their may be some other reason. It would be terrible if you spent a lot of time in developing your idea and org does not want it.

Then I started to look for idea on their ideas page. I found **Tracker add-on for a version control system**. Tracker is default file browser in Haiku. The motto of this idea was to create an add-on as a graphical user interface to git vcs. Pre-requisites were application development, UI Design and git. I knew these, so I found this interesting.

# The Proposal

Next thing to do is draft a proposal. I think this should be another blog post. But, I'll try to brief it.

The org may have their own template of proposal, but here's how the proposal should generally look like:

1. About yourself
2. Your programming background
3. Your contributions to the organization(if any)
4. Your idea in as much technical detail as possible
5. Phases of your work (Keep it three, to align with GSoC evaluations)
6. Proposed Timeline (weekly if possible, daily is the best)

It is a good practice that you share your draft with the community(GSoC dashboard provides this option). It would be great if this draft is in Google Doc, as it provides ability to comment.

The comments, suggestions, and critics are really important to shape your proposal. 

For instance, Tracker puts its add-ons in a separate menu, and the community wanted that the git add-on should be in a separate menu. But, Tracker did not gave ability to add-on to have it's own menu. So, I had to put my plans on handling this.

Another instance, I was planning to use system calls to communicate with git commands. A member suggested me to look upon libgit2, a git library. It made the whole project lot simpler.

These comments and suggestions and addressing them are one of the reasons that I got accepted.

You can find my proposal [here](https://drive.google.com/file/d/1nailoOCGmpRVo3sZ8mdXGmpuWxXdgf1T/view). It's good to have a look at previous year proposals. These are listed in [GSoC Archive](https://summerofcode.withgoogle.com/archive/).

Also, great thanks to [Mohit P. Tahiliani](https://github.com/mohittahiliani) for reviewing my proposal multiple times and for giving me suggestions on it.

# Dilemma: Arista or GSoC?

> Come on, it's an OR statement, both can be true.

I had also got summer internship at Arista Networks. I was in a great confusion on what to choose.

If I chose only GSoC, I won't get a pre-placement offer and I would have to prepare for campus interviews.

~~If I chose only Arista,~~ this is not an option. I won't abandon the prestigious GSoC.

If I chose both, I'll have to manage them both. It will make my life hectic. Most of my time will be utilized by them two. Plus, due to divided focus, It would be hard to show my dedication in internship which may lead me not getting the PPO. Also, if I didn't get time for doing my GSoC, I may get failed. But, if I do both, it would put a good experience on my resume.

I started asking people for help. I had long discussions with Mohit Reddy. I asked few other seniors which worked at Arista. Most of them said that it will be really great if I did both, but I might have to compromise with my personal life, meaning less time to hang out with friends.

My dearest friend told me,

> You should not lose what you have in your hand worrying about what will happen in future.

I ended up choosing both.

And I made Haiku aware of my internship and the choice of doing both. This was my personal choice.

In case you are wondering, I didn't get PPO by Arista, and I had to prepare and appear for campus interviews.

# Conclusion

Doing GSoC was one of the best programming experiences I've had. I got to learn a great deal of stuff.

If you are interested in knowing about my project under GSoC, check [TrackGit](https://hrily.github.io/TrackGit).