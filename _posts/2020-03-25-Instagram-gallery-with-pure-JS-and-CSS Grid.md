---
layout: post
title: "An Instagram gallery with pure JavaScript and CSS Grid"
date:   2020-03-26 17:29:30 +0530
featured-img: shane-rounce-205187
categories: [Instagram, Gallery]
---

As everyone knows Instagram will be replacing his current instagram API  by Instagrm graph API on March 31, 2020.
and in this article I will share with you, a JS script that support the Instagram Graph API.

I hope this article will help anyone else who wants to build a simple display of their own Instagram feed.

#### Getting your access token.
To get your access token read this [article]({{ site.baseurl }}/posts/get-instagram-graph-API/)

#### Setting up the HTML page
{% highlight html %}
<!DOCTYPE html>
<html>
<head>
  <title>Instagram Gallery</title>
 <link rel="stylesheet" href="style.css">
</head>
<body>
  
  <div id="instagram">
  </div>

<script src="script.js"></script>
</body>
</html>

{% endhighlight %}

#### The Javascript code

There’s a ton of ways to get data from URL, but I prefer to Javascript native Fetch API. Here’s a very simple example that simply logs the data, and insert to the DOM.

{% highlight javascript %}
let access_token='IGQVJYcXNDNEQ5OWh5b3F4VkRqTTA1aTlhMU1zMTctNFprRlAxQ253anA4Ul82V08zTG1UQ1FiUldUWkhzelhUZAjUtSUJMbk1JMG94NlFsMUdKQUVnZAjBBaFZALU0d1SU9iWVlSc1ZAveV8tbDhPOTVGOAZDZD';
let  url='https://graph.instagram.com/me/media?fields=media_count,permalink,media_url&access_token='+access_token;


async function instgramfeed(url){
    try {
        const response = await fetch(url);
        const data = await response.json();
    
        console.log(data);
        var html ='';
        var target = document.querySelector('#instagram')
    
        for(var i=0; i< data.data.length ; i++){
            html +=`<div class="instagram-item">
                       <a href="${data.data[i].permalink}">
                            <img src="${data.data[i].media_url}"/>
                       </a>
                    </div>`
        }
        target.innerHTML=html;
      } catch { // TypeError: failed to fetch
        console.log('Error Loading feeds! Maybe because your access token is wrong, you dont set feeds as full or you have a bad connexion!');
      }
}  

instgramfeed(url);
{% endhighlight %}

#### The CSS code

Once again, we add some styling to our StyleSheet to make our feed look fancy.

{% highlight css %}
#instagram {
    display: grid;
    grid-template-columns: repeat(auto-fill, 33.333333%);
}

#instagram .instagram-item {
    padding: 10px;
}
img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

{% endhighlight %}




Congratulations! You’ve built a Instagram feed ([DEMO]({{ site.baseurl }}/DEMO/instagram/)) to use it in your site.

For more information about Instagram Graph API take a look on official documentation [here](https://developers.facebook.com/docs/instagram-basic-display-api/guides/getting-profiles-and-media).















