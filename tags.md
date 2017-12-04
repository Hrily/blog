---
layout: default
title: Tags
---

<style>

  .tags {
    text-align: left;
    padding: 90px;
  }

	.logo {
		padding-top: 8px;
		padding-bottom: 4px;
		padding-left: 16px;
		padding-right: 16px;
		border-bottom: 4px solid blue;
		transform: translateX(-50%) rotateZ(90deg) translateY(-50%);
		position: fixed;
		left: 0;
		top: 220px;
	}

	.back {
		position: fixed;
		top: 8px;
		left: 8px;
		cursor: pointer;
	}
	
	.back i {
		padding: 8px;
		border-radius: 100%;
	}

	.back:hover > i {
		background-color: rgba(0, 0, 255, 0.1);
  }

  .tags .tag {
		box-sizing: border-box;
		display: inline-block;
		text-decoration: none;
		padding: 8px 16px 8px 16px;
		margin-top: 48px;
		border: 2px solid blue;
  }
  
  .tags .post {
    display: inline-block;
    margin-top: 16px;
  }

  @media only screen and (max-width: 1120px){
    
    .tags {
      padding: 30px 30px 30px 64px;
    }

  }

</style>


<a class="fade-in back" href="javascript:history.back()">
	<i class="material-icons blue sub-heading">arrow_back</i>
</a>

<div class="fade-in logo sub-heading sans"><span class="blue">Hrishikesh</span>Hiraskar</div>

<div class="tags">
  <div class="heading sans">TAGS</div>
  {% for tag in site.tags %}
    {% assign t = tag | first %}
    {% assign posts = tag | last %}
    <div class="tag-post-list" id="{{ t | upcase }}">
    <a class="tag blue" href="#{{ t | upcase }}">{{ t | upcase }}</a><br>
    {% for post in posts %}
      {% if post.tags contains t %}
        <a class="post serif black" href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a><br>
      {% endif %}
    {% endfor %}
  </div>
  {% endfor %}
</div>