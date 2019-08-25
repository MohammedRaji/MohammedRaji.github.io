---
layout: post
title: "WordPress Learning Challenge (Part 2) "
date:   2019-08-23 14:29:30 +0530
featured-img: shane-rounce-205187
categories: [WordPress, Guides]
---

After installing WordPress in previous [part](https://mohammedraji.github.io/posts/worpress-challenge-part-1), It is time for us to start taking a close look at how themes are built and how they work.

Of course, the look of all themes is different. But if you were to download many 
different WordPress themes and open the folders side by side, you’ll see the same hierarchy. There are a couple of required files and a number of files you will likely find in all themes.

the files is detailed in this picture.
![]({{site.baseurl}}/assets/img/posts/2/anatomy.png)

Most themes will include both the **CORE** and **STANDARD** files. The STANDARD
files cover everything both you and your visitors will expect from a blog. Things like
permalinked posts and pages, error catching, commenting, and organized archives.

But we starting build a theme who print this phrase " site is under construction " with only two CORE files, And a simple theme it would be!


let's go, open a new folder ```wp-challenge``` and add the two CORE files ```index.php``` and ```style.css``` and a file named ```screenshot.png``` with dimension ```600px * 450px``` .

like this:


![]({{site.baseurl}}/assets/img/posts/2/files.png)

In the next step put this description at the top of your style.css file:

{% highlight css%}
/*
Theme Name: WordPress callenge    //your theme name here
Theme URI: http://your-website.com/cool-theme/   //theme URL
Description:  Awesome WordPress theme by me
Version: 1 
Author: Mohammed Raji       // Author name here
Author URI: https://MohammedRaji.github.io  // Author URL
Tags: super, awesome, cool, sweet, potato nuggets
*/
{% endhighlight %}


Now open ```index.php``` file and put this code:

{% highlight css%}
<?php 
echo " this site is under construction";
?>
{% endhighlight %}


Let’s install the theme to your new local website.

#### installation steps

* To do it you should place the theme folder into ```wordpress/wp-content/themes``` directory. 
![]({{site.baseurl}}/assets/img/posts/2/theme-install.png)


* Login to your website’s Dashboard using your username and password and navigate to Appearance > Themes tab in the left column.

* Now you can see the theme you’ve placed into ```wp-content/themes``` folder in the list of available themes. Click Activate button in order to activate it on your site. 

![]({{site.baseurl}}/assets/img/posts/2/costomize.png)

Now view your first created site at this link ```http://localhost/wordpress/```
![]({{site.baseurl}}/assets/img/posts/2/final.png)


***Congratulations*** to you, you have created and installed the first WordPress theme, If you encounter any problems with the installation, you can leave it in a comment.




و الأن مع الدرس الثاني، و كنتكمو فيه على مكونات ثيم و ووردبريس و تثبيته، كما تم إنشاء ثيم بسيط جدا لفهم اساسيات برمجة ووردبريس، 