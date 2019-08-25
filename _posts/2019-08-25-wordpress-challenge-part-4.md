---
layout: post
title: "WordPress Learning Challenge (Part 4)"
date:   2019-08-24 23:29:30 +0530
categories: [WordPress, Guides]
---



To start coding we must know what we want, for our example we coding a simple blogging theme, we start by home page, header section, this section contain ***title*** and ***site description***.

let's go, in our theme folder ```wp-challenge```, add ```header.php``` file like this:

![icon]({{ site.baseurl }}/assets/img/posts/4/files.png)

open ```header.php``` and add this code:


{% highlight php%}
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="profile" href="http://gmpg.org/xfn/11">
<?php wp_head(); ?>
</head>
<body>
    <header >
	    <h1><?php bloginfo( 'name' );?></h1>
        <p><?php bloginfo( 'description')?></p>
    </header>
{% endhighlight %}

We will just explain WordPress functions.
* ```<?php language_attributes(); ?>``` Displays the language attributes for the <html> tag. The possible language attributes are dir (text direction).
* ```<?php bloginfo( 'charset' ); ?>``` Displays the “Encoding for pages and feeds” set in Settings > Reading.

* ```<?php bloginfo( 'name' );?>```  Displays the “Site Title” set in Settings > General. 
* ```<?php bloginfo( 'description');?>```  Displays the "description" set in Settings > General.

that's all important stuff , in header section.

Now include the ```header.php``` file in the ```index.php``` to displaying. by using this code:

{% highlight php%}
<?php 
    get_header()
?>        
{% endhighlight %}

**the final result**

![icon]({{ site.baseurl }}/assets/img/posts/4/header.png)


 I hope this article gave you a clear overview of how to create header section for WP theme, and that you found it useful.

If you have a question you can leave it in a comment.





