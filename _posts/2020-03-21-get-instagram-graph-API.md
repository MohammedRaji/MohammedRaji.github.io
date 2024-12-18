---
layout: post
title: "How to get Instagram Graph API access to"
date:   2020-03-21 00:19:30 +0530
categories: [Instagram, API]
---


Instagram will be disabling the final Instagram Legacy API permission ("Basic") on March 31, 2020. As of March 31, 2020, all Legacy API capabilities will be fulfilled by the Instagram Graph API and the Instagram Basic Display API.

And all Instagram Feed will be disbling, and you must to update your widget to work with the new Instagram API.

For that, Follow this bellow steps to get Access Token to use it to get instgram feed in your website or blog.

### Before You Start
You will need:

* A [Facebook Developer][facebook] Account
* An [Instagram][instagram] account with media.

### Step 1 — Register Application

Go to [developers.facebook.com][facebook], click My Apps, and create a new app.

![Add instagram tester]({{site.baseurl}}/assets/img/posts/5/create-app.png)

### Step 2: Configure Instagram Basic Display

Click Products, locate the Instagram product, and click Set Up to add it to your app.

![Add instagram tester]({{site.baseurl}}/assets/img/posts/5/instagram-setting.png)


Click Basic Display, scroll to the bottom of the page, then click Create New App.

In the form that appears, complete each section using the guidelines below.
![Add instagram tester]({{site.baseurl}}/assets/img/posts/5/add-instagram-app.png)

### Step 3: Add an Instagram Test User

Navigate to Roles > Roles and scroll down to the Instagram Testers section. Click Add Instagram Testers and enter your Instagram account’s username and send the invitation.

![Add instagram tester]({{site.baseurl}}/assets/img/posts/5/add-instagram-tester.png)

Open a new web browser and go to [Instagram][instagram] and sign into your Instagram account that you just invited. Navigate to (Profile Icon) > Edit Profile > Apps and Websites > Tester Invites and accept the invitation.

![Accept Invitation]({{site.baseurl}}/assets/img/posts/5/accept-test-invitation.png)

### Step 4: Generate Access Token
![icon]({{site.baseurl}}/assets/img/posts/5/genarate-access-token.png)
![icon]({{ site.baseurl }}/assets/img/posts/5/access-token-generated.png)


Congratulations! You got the Access Token successfully, and you can use it to get data from instagram.


[facebook]: https://developers.facebook.com/
[instagram]:   http://instagram.com
