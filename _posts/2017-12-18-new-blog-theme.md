---
layout: post
title: "About my New Blog Theme"
description: "A look into my new Blog Theme"
tags: ["UI"]
backdrop: new_theme_drop.jpg
---

Again, I'm writing after a long time. Though, I wrote couple of blogs for IEEE NITK which can be found [here](https://ieeenitk.org/blog//installing-ubuntu/) and [here](https://ieeenitk.org/blog//using-mdns-in-iot/). I'll try to write more posts.

Anyways, the first thing I did this winter was revamping the blog theme because it had been long time and it didn't change.

### The Monochromatic Flat Theme

This time I was off from Material, rather I chose a flat theme because I used nothing other than Material. The theme is monochromatic, and is bold. The homepage features a vector photo of me with a bold title.

![Home]({{ site.baseurl }}/images/new_theme/home.jpg)

### Typography

I never thought much about typography earlier. I always liked Roboto and used (excessively) everywhere. But this time I studied a little about typography, and chose a pair of fonts for the blog.

#### Volkorn

![Volkorn]({{ site.baseurl }}/images/new_theme/volkorn.jpg)

This is a serif font and has really good readability. I liked it's boldness as it's good for the theme. I have used this font mostly for the content and sometimes for the sub-headings as well. 

#### Archivo Black

![Archivo Black]({{ site.baseurl }}/images/new_theme/archivo_black.png)

This font is really bold. It is heavy and aesthetic. I really liked this font the moment I saw it and can be a really good display font. So, I chose this for the headings, the logo, and the sub-heading.

### Micro-interactions

The theme is a little plain. I had to add a little bit of fun in it to balance the plainess. So, I have used micro-interactions.

Firstly, the _Loader_ of the homepage is rather surprising, as it is a bit different from normal ones.

![Loader]({{ site.baseurl }}/images/new_theme/loader.gif)

The _Post List_ has hover animation.

![Post Hover]({{ site.baseurl }}/images/new_theme/hover.jpg)

Now let's come to the fun part, _Shared Element Transition_ between pages. This is inspired from Android's Shared Element Transition. I think it's first time someone on the web has tried to do this. While loading the blog, the title seamlessly transits to the position on the blog, and then the blog loads. It keeps users focussed on what they want to read. The implementation is simple than it looks. You just need to animate the shared element to the position on the next page before/while requesting the next page.

![Blog Transition]({{ site.baseurl }}/images/new_theme/blog_transition.gif)

The _Menu_ is also bold, with the photo blending in with the menu background. (I just used the css `mix-blend-mode` property.)

![Menu]({{ site.baseurl }}/images/new_theme/menu.jpg)

### Conclusion

The making of new blog theme was a great learning experience for me. I learnt the importance of Typography and Micro-interactions in today's web. I have also shared with you what I've learnt over here. I hope you learn from this too...