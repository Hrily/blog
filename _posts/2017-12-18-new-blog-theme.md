---
layout: post
title: "About my New Blog Theme"
description: "A look into my new Blog Theme"
tags: ["UI"]
backdrop: new_theme_drop.jpg
---

Again, writing after a long time. Though, I wrote couple of blogs for IEEE NITK. I should write more often now, or I should broaden the topic of this blog.

Anyways, the first thing I did this winter was revamping the blog theme.

### The Monochromatic Flat Theme

This time I was off from Material, I rather chose a flat theme. The theme is monochromatic, and is bold. The homepage features a vector photo of me with a bold title.

![Home]({{ site.baseurl }}/images/new_theme/home.jpg)

### Typography

I never thought much about typography earlier. I always liked Roboto and used (excessively) everywhere. But this time I studied a little about typography, and chose a pair of fonts for the blog.

#### Volkorn

![Volkorn]({{ site.baseurl }}/images/new_theme/volkorn.jpg)

This is a serif font and has really good readability. I liked it's boldness as it's good for the theme. I have used this font mostly for the content and sub-headings sometimes.

#### Archivo Black

![Archivo Black]({{ site.baseurl }}/images/new_theme/archivo_black.png)

This font is really bold. It is heavy and aethetic. I really liked this font the moment I saw it. This can be a good display font. So, I chose this for headings, logo, and sub-heading.

### Micro-interactions

The theme is a little plain. I had to add a little bit of fun in it to balance. So, I used micro-interactions. 

First, the _Loader_ of the homepage is rather surprizing, as it is a bit different from norman ones.

![Loader]({{ site.baseurl }}/images/new_theme/loader.gif)

The _Post List_ has hover animation.

![Post Hover]({{ site.baseurl }}/images/new_theme/hover.jpg)

And the most fun part, _Shared Element Transition_ between pages. This is inspired from the Android's Shared Element Transition. I think it's first time on web someone has tried to do this. While loading the blog, the title seamlessly transits to the position on the blog, and then the blog loads. It keeps users focussed on what they want to read. The implementation is simple than it looks. You just need to animate the shared element to the position on the next page before/while requesting the next page. 

![Blog Transition]({{ site.baseurl }}/images/new_theme/blog_transition.gif)

The _Menu_ is also bold, with the photo blending in with the menu background. (I just used the css `mix-blend-mode` property.)

![Menu]({{ site.baseurl }}/images/new_theme/menu.jpg)

### Conclusion

The making of new blog theme was a great learning experience for me. I learnt the importance of Typography and Micro-interactions in today's web. And so I wrote my learnings here. I hope you learn from this too...