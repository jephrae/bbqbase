# bbqbase

BBQ base is a database of recipes for smoking **meat**. Recipe sites usually _suck_. 
You have to scroll through endless blog content, fight pop up ads, and auto play stuff, and still never find what you need.
BBQ base is different, no ads, no annoying pop ups, just recipes and instructions.
BBQ base is _lightweight_, and **hits** you with only the information you need.
The Data provided by BBQ base is **user created**. There is no end user authentication, by design, instead using a mod system to cull content.

![bbqbaseappimg](https://user-images.githubusercontent.com/55113750/109884237-427b6180-7c42-11eb-821b-c3c1868e5e3b.png)
---

### front-end technologies utilized
* React
* Bootstrap
* CSS
* git
* JavaScript 

dependencies for this project can be installed with _npm i_

---


![29f3c180-761a-11eb-8217-651c2dd10213](https://user-images.githubusercontent.com/55113750/109884335-650d7a80-7c42-11eb-83d0-50840c7c3335.png)

### original wire frames 
Ended up omiting a nav bar for now

![219b8680-761a-11eb-9fac-b3fbdc054a10](https://user-images.githubusercontent.com/55113750/109884370-70f93c80-7c42-11eb-9080-bd76d56b1a66.png)

### original Component hierarchy
Omited navbar component, as it is not needed yet, as well as login, which may or may not come in the future, depending on mod aptitude with REST framework.

---

## User Stories!  :sassy_man: :raising_hand_woman:	:open_book:

- As a user I want to show recipes for a certain meat, so I can find doneness temps and instructions quickly.
- As a user I want to be able to browse recipes so I can get an idea of what I would like to attempt to cook.
- As a user I want to be able to post recipes to share with others.

---
### unresolved issues and upcoming changes

I had a difficult time sending the correct post data to postgreSQL, it would work from postman, but not the browser, after changing all sorts of permissions in the backend, and modifying my views, I realized the issue was actually in a mistyped field value in one of my forms.

A search feature would have been nice, and is coming. I added a bunch of data points to the back end information to future proof the data, ensuring that different items can be called and the information parsed correctly and returned to the user. 
