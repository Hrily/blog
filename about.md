---
layout: default
title: About Me
---

<link rel="stylesheet" type="text/css" href="{{ site.baseurl }}/src/css/home.css">

<style>

    .about {
        box-sizing: bordre-box;
        text-align: left;
        padding: 90px;
        min-height: 100%;
    }

    .about .sub-heading {
        max-width: 600px;
    }

    .about-text {
        margin-top: 80px;
    }

    .about-text img {
        width: 50px;
        height: 50px;
        margin: 8px 8px 8px 0px;
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

    @media only screen and (max-width: 1120px){

        .about {
            padding: 30px 30px 30px 64px;
        }

        .back {
            display: block;
        }

        .about-text {
            margin-top: 32px;
        }

        .about-text span {
            display: block;
        }

    }

</style>

<div class="about">

    <a class="fade-in back" href="javascript:history.back()">
        <i class="material-icons blue sub-heading">arrow_back</i>
    </a>
	
	<img class="landing-image" src="{{ site.baseurl }}/images/hrishi_drawing.png">

	<div class="about-text">
		<div class="sans x-heading">
			<span class="blue">Hrishikesh</span>Hiraskar
		</div>
		<div class="sub-heading serif">
			{{ site.description }}
		</div>
        <div class="serif">
            <br>
            Feel free to contact me at:
            <br>
            <a href="mailto:{{ site.email }}"><img src="{{ site.baseurl }}/images/email.svg"></a>
            <a href="{{ site.github }}"><img src="{{ site.baseurl }}/images/github.svg"></a>
            <a href="{{ site.facebook }}"><img src="{{ site.baseurl }}/images/facebook.svg"></a>
            <a href="{{ site.linkedin }}"><img src="{{ site.baseurl }}/images/linkedin.svg"></a>
            <br>
            Or go check out my <a href="/Resume">Resume</a>
        </div>
	</div>

</div>
