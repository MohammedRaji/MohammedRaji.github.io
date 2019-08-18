---
layout: post
title:  "The Definitive guide to create an icon font using open source software"
date:   2019-08-18 21:29:30 +0530
---
There are a lot of fonts that you can choose, but sometimes, you need something special, so the only way is to create it yourself.

The first step is the choose the right software to make the mission,  I choose [Inkscape][Inkscape] and [Fontforge][fontforge] for  two main reason, it is **OPEN SOURCE** and **POWERFUL**.

### 1. Design the Icon

Now let's start working, this tutorial requires initial knowledge on inkscape because we will not learn icons Design, open inkscape. choose file>document prorperties and customize size to 20*20 px.


![Change document prorperties]({{ site.baseurl }}/assets/img/posts/document__pro.png)

In this tutorial we design only two icons.

![icon]({{ site.baseurl }}/assets/img/posts/icon.png)

After you design your icons, go to the next step.

### 2. Transform icons to font
#### 2.1. Import icon to fontforge

After designing the icons, next step is transform the svg icon to icon font, for this task we open fontforge and import the each svg icon to chosen glyph slot where you want to add the icon you just designed.  you’ll need to go to File > Import.

#### 2.2. Save your Icon Font

Before saviang your icon font, you must set the font info, by going to Element > Font Info. after that save your icon font as *YourFontName.sfd.
![Font Info]({{ site.baseurl }}/assets/img/posts/fontinfo.png)


#### 2.3. Export Your Font
now generate font by clicking on File > generate font and select TTF (True Type Format).

### 3. Use the Icon Font in your web project

After getting our icon font, it's time to use it in your web project. But we have a big problem, browser compatibility. Because ttf is supportred by Mozilla and Safari only. 

**CROSS-BROWSER COMPATIBILITY**
* Internet Explorer supports EOT (and IE9 WOFF)
* Mozilla browsers support OTF, TTF (and FF3.6+ WOFF)
* Safari and Opera support OTF, TTF, SVG (and Safari5.1+, Opera11.10+ WOFF)
* Chrome supports TTF, SVG (and Chrome6.0+ WOFF)
* Mobile device browsers such as Safari want SVG only

The solution is to create others font format (eot, woff, otf ...).
Manually by exporting each font format using FontForge, or simply using the  [transfonter.org](https://transfonter.org/) to generate css file and other font format.

![transformer.org]({{ site.baseurl }}/assets/img/posts/tranformer.png)

Now open the css file and add this code to define all the icons names and their corresponding Unicode.

{% highlight css %}
[class^="icon-"], [class*=" icon-"] {
  font-family: 'MRFont'; /*Icon font name*/
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.icon-arrow-up:before {        /*"icon-arrow-up" is the name of icon  */
  content: "\0001";          /*e200 is the Unicode, see the the next paragraph to learn how to get it*/
}
.icon-arrow-down:before {
  content: "\0002";
}


{% endhighlight %}

and save it like this "mrfont.css"

##### Get the Unicode:

![getting the Unicode]({{ site.baseurl }}/assets/img/posts/unicode.png)




Now use your font in your HTML file like this:
{% highlight html %}
<html>
    <head>
      <link rel="stylesheet" href="mrfont.css" type="text/css">
      <title>icon font toturial</title>
    </head>
    <body>
      <i class="icon-arrow-up"></i>
      <i class="icon-arrow-down"></i>
    </body>
</html>
{% endhighlight %}



 I hope this article gave you a clear overview of how to create icon font, and that you found it useful.



[inkscape]: https://inkscape.com
[fontforge]:   http://fontforge.github.io/en-US/
