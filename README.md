## Install
First you need to install node.js
Then type "npm install":
```bash
$ npm install
```


## Run the server and start developing
```bash
$ gulp
```
1. Simply type gulp, and the server starts. The server is running at http://localhost:3000/test
2. Whenever you change/add scss files in the css directory or change/add jsx files in the.
3. The server runs a react jsx and scss compile of the jsx files to js and scss files to css.
4. Look at gulpfile.js for details.



## How to develop
### JSX
 You will not be required to do advanced changes requiring deep react knowledge, but http://facebook.github.io/react/docs/getting-started.html is a good reference.

What you should know is

1. The jsx files contain some simple react code, and when changing them the js file is compiled to js/_jsx/views. Don't change the files in js/_jsx !
2. The html you see is basically html, but there are some differences. THe most important in this task is that the html attribute class is written className




### Node server
You should not need to do any important changes to the server setup.

One thing that is good to know is that the gulp command starts it, and thanks to nodemon the server restarts and loads the changes when changing a file. It might take 1-2 seconds to reload changes depending on your setup.





## CSS
1. Style the navbar to use a Boostrap navbar. The logo should be on the left with the nav items following. Just use plain boostrap and don't do any attempts to make it really really pretty.

2. Center the article and set max width to 600px to avoid getting to long lines.

3. Make the main header in the text (H1) be font-size 26px, and the headers in the text (H2) be font-size 20px, whenever the screen width is less than 720px.

## Javascript
1. Rewrite the for loop in js/view/Navbar.jsx to use return a new array using map to iterate over the navBar array. Optionally use underscore.js

2. Change js/model/NavModel.getNavBarItems so that it sorts the items on title. Optionally use underscore.js.

3. Find a unit test framework of your liking and add a unit test for the js/model/NavModel.getNavBarItems. Ideally it should run automatically when changing the js files.


