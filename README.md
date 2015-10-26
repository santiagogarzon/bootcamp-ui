
#HTML5 Boot Camp

##The future of Web Applications is here!
####Are you ready for it?

###Index

1. [Objective](#objective)

2. [Who Should Attend](#who-should-attend)

3. [Duration](#duration)

4. [Technical Assistance](#technical-assistance)

5. [Performance Measurement](#performance-measurement)

6. [Handling advanced Developers](#handling-advanced-developers)

7. [Materials](#materials)

8. [General Guidelines](#general-guidelines)

9. [Learning Days](#learning-days)

    * [Topic 1: HTML & CSS Basics](#topic-1-html--css-basics)

    * [Topic 2: JavaScript Intro and jQuery](#topic-2-javascript-intro-and-jquery)

    * [Topic 3: Design Patterns and OOP in JavaScript](#topic-3-design-patterns-and-oop-in-javascript)

    * [Topic 4: NodeJS, NPM, and JavaScript Modules](#topic-4-nodejs-npm-and-javascript-modules)

    * [Topic 5: MVC - Backbone](#topic-5-mvc---backbone)

    * [Topic 6: MVC - AngularJS](#topic-6-mvc---angularjs)

    * [Topic 7: HTML5 APIs](#topic-7-html5-apis)

10. [Your First Project Starts Now!](#your-first-project-starts-now)

###Objective

This course teaches the basics of modern Web UI development. We want to help you create the best of breed user experiences, gaming, and mobile applications.

→ [index](#index)

###Who Should Attend

The training will start at a low level, and does not require in depth knowledge of the platform in question. Desirable participant profile: trainees and outside Globant candidates. A basic knowledge on HTML, CSS, and JavaScript is desired, though.

→ [index](#index)

###Duration

Five weeks total.

Three weeks for guided learning and two weeks for app development.

→ [index](#index)

###Technical Assistance

You can contact other bootcamp participants or any available tutor if you need technical assistance. We will create one chat for boot camp members only, and another one for boot camp members and tutors when boot camp starts.

###Performance Measurement

1. Code review after each practice and sprint

2. Checkpoint completion after Learning stage with your assigned tutor

→ [index](#index)


###Handling Advanced Developers

Developers that move faster than average can go ahead and complete as much exercises as wanted.

→ [index](#index)

###Tools

1. At least, three different browsers installed on the developer machine. Example, Chrome, Firefox, and the Android browser using Android's emulator.

2. The IDE to use is [SublimeText](http://www.sublimetext.com/).

3. Skype Account + headset (audio calls)

4. Create your own[ GitHub](https://github.com/) account. Follow this[ guideline](https://help.github.com/articles/set-up-git) to setup your account.

5. Install your own NodeJS server.
  * Download [NodeJS](http://nodejs.org/)
  * Install `http-server` globally, by running `npm install -g http-server`
  * To start the server, from a command line interface, run `http-server` in the directory where you will clone the startup repo
  * Open your web browser and point to localhost:PORT (the `http-server` should have outputted the number of PORT you should use)

6. Fork this repo to use as a base to host the project code.

→ [index](#index)



###General Guidelines

The boot camp is organized in the following way:

1. The first three weeks will be used for intensive self learning. Each topic will have reading and practices parts. Tutors will be available to answer technical questions on a given chat room.

2. The next two weeks will be used to develop an application following a life process.

3. The project manager will coordinate learning days encouraging team communication in daily meetings.

4. The project manager will gather information regarding individual progress so we can look for alternative assistance where needed.

5. The project manager will lead the boot camp sprints as if it were a real project using SCRUM agile methodology.

6. Two boot camp chats will be created for feedback and technical assistance:

    1. Bootcamp HTML - ALL
Every person participating in the bootcamp is present here (students, tutors and PMs). Here is the place to ask for technical assistance!

    2. Bootcamp HTML - Assistants
Here you will reach just your boot camp fellows for asking question sharing knowledge.

7. Team play is encouraged but the work will be evaluated per person.

8. Sprint duration will be 1 week.

9. The instructions will be vague as they generally are in real life projects. You must look for support and guidance from your PM, teammates and tutors.

10. All code and documentation must be in English.

11. Code must adhere to Globant’s UI [HTML](https://github.com/globant-ui/html-style-guide), [CSS](https://github.com/globant-ui/css-style-guide) and [JavaScript](https://github.com/globant-ui/JavaScript-style-guide) coding guidelines.

→ [index](#index)

###Learning Days###

Each day you will grab the fundamentals of the key building blocks for the next generation mobile apps; yeah, web apps! Web apps powered by the latest, and coolest toolkits, and techniques.

On each learning day you will have to:

1. ####Read:####
We will provide you with documentation related with current sprint content so you can have a background reference, guide and examples to complete the following practice.

2. ####Practice:####
You will implement the previously gathered knowledge in simple coding activities.
Most important task numbers are listed in the "*Key Points*" section for each day and they should get most of your attention; if you feel you don’t have enough time to complete all tasks, start with these ones when possible.

3. ####Commit:####
You will commit all your code on a daily basis, when you finish your practice.

###Introduction

At high level you could see the keys as:

![technologies logos](images/html5-css-javascript.png "The platform")

HTML describes the content semantics and structure of a web page. It was designed as a markup language, if you know XML, you could consider HTML as a subset of XML with a predefined semantic.

On the other hand, CSS allows to define the look and feel of the content. It's used to set colors on HTML elements, customize sizes, define the layout of the document content, among others. (e.x. "The following list of elements must be shown as a menu", "The main title of the page should use this particular font").

JavaScript is a programming language that runs in all Web Browsers. Using JavaScript we can create full-fledge web applications.

Now that you know which are the three pilars of a web application's UI, it's time to dive into them.

#Topic 1: HTML & CSS Basics

##1. HTML

For an introduction to HTML please see [WebPlatform](http://docs.webplatform.org/wiki/html/tutorials).

W3C's HTML5 specification can be found here: [http://www.w3.org/TR/html5/](http://www.w3.org/TR/html5/)

Through the rest of this section you will create a basic HTML document. After finishing this section you will: 

* be able to create HTML documents that displays text, images, tables, lists
* understand how to structure HTML documents, and what the basic building blocks are
* understand best practices to write valid, accessible, and semantic HTML markup.

###Exercises

1. **The Basics of HTML:** 
    1. Create a basic `.html` file with a header displaying "Hello World".
    2. Change the `header` to "My todo list".
    3. Add a `list` of "todo items" for your daily chores.
    4. Create another `.html` file. Create a table for your expenses.
    5. Create another `.html` file. Add an image, a video, and a sound.
        * You may find this book useful: [http://diveintohtml5.info/](http://diveintohtml5.info/)       
    6. Create a "sign up" form with fields for: first name, last name, email, birthday, a dropdown to choose your favourite sport, and a text-area to include a small bio for the user. Add a button at the end to submit the form, and another one to clear the form. Add relevant validation rules for all fields (like required fields, valid email).
    7. Test your HTML files in at least Firefox, Chrome, IE, and Chrome for Android or iOS Safari.
2. **Doctypes & Metatags:** 
    1. Learn how to write valid, and semantic markup:
        * [HTML Validation](https://docs.webplatform.org/wiki/guides/html_validation)
        * [WHAT DOES IT ALL MEAN?](http://diveintohtml5.info/semantics.html)
    2. Add `doctype` to the previously created HTML documents. See what happens if you remove it.
    3. Add metatags to the document.
    4. Add the [meta viewport tag](http://www.quirksmode.org/mobile/metaviewport/). Check what happens in a mobile browser with or without it.
    4. Validate your markup: [W3C Validator](http://validator.w3.org/)
    5. Finally, check out [The HTML5 Boilerplate](https://github.com/h5bp/html5-boilerplate), to see a best-practice HTML document.
3. **Accessibility** 
    * Understand **why** accessibility is important:
        * [W3C Accessibility](http://www.w3.org/standards/webdesign/accessibility)
    * Understand **how** to make web document accessible:
        * [508 checklist](http://webaim.org/standards/508/checklist)
        * [BBC Accessibility Guideline](http://www.bbc.co.uk/guidelines/futuremedia/accessibility/html/).
        * [Leverage HTML5 features to improve accessibility](http://www.w3.org/Talks/2014/0317-HTML5-A11Y/)
        * [Accessibility: The Missing Ingredient](http://alistapart.com/article/accessibility-the-missing-ingredient)
    * **Validate** your markup to see if it is accessible:
        * Install a screen reader like [ChromeVox](https://chrome.google.com/webstore/detail/chromevox/kgejglhpjiefppelpmljglcjbhoiplfn?hl=en), and test your HTML document.
        * Install [Accessibility Developer Tools](https://chrome.google.com/webstore/detail/accessibility-developer-t/fpkknkljclfencbdbgkenhalefipecmb?hl=en), and perform an audit on your markup.

By now, you should have several `html` files with different examples of how to create lists, tables, add images, headers, etc. All the markup is syntactically valid, is semantic, passes the HTML validator, and is accessible.

##2. CSS
In this section you will learn how to use CSS to modify the look & feel, and the layout of HTML documents.

For a short introduction to HTML & CSS please go to: [http://learn.shayhowe.com/html-css/](http://learn.shayhowe.com/html-css/)

W3C's CSS specifications can be found [here](http://www.w3.org/TR/css-2010/).

###2.1 Basics

Exercises

1. Create a basic [index.html](https://raw.githubusercontent.com/h5bp/html5-boilerplate/master/src/index.html) file (example provided).
2. Create an empty style.css file and link it to the index.html using [the link tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link#Examples).
3. Learn why is a best-practice to use a `reset stylesheet` [here](http://meyerweb.com/eric/tools/css/reset/). Then include [normalize.css](http://necolas.github.io/normalize.css/) before linking your style.css.
4. Add a basic page structure using HTML as depicted by the following picture:

![alt text](images/html5-structure.png "HTML5 structure")

###2.2 Selectors and properties
Learn how to create CSS rules.
![alt text](images/anatomy-of-a-css-rule.gif "Anatomy of a CSS rule")

* [Brief of CSS selectors](http://www.sitepoint.com/web-foundations/css-selectors/)
* [CSS3 selectors sheet](http://www.w3.org/TR/css3-selectors/)
* Play a little [game](http://flukeout.github.io/) to consolidate your knowledge
* Bookmark the following list of properties for future reference [http://ref.openweb.io/CSS/](http://ref.openweb.io/CSS/)
* Bookmark a reference of CSS Vocabulary [http://pumpula.net/p/apps/css-vocabulary/](http://pumpula.net/p/apps/css-vocabulary/)
* 
Exercises:
    1. Add background to the header, footer, aside and nav.
    2. Add a global font definition (at html element) with a value of 14px, using a font-family you like.
    3. Center the header and footer text.

###2.3 Specificity
Learn about CSS Specificity (basically how rules override one each others) [http://www.w3.org/TR/CSS21/cascade.html#specificity](http://www.w3.org/TR/CSS21/cascade.html#specificity)

Exercises:

1.  Experiment with specificity right now using CSS3 selectors [http://specificity.keegan.st/](http://specificity.keegan.st/)
2. Now add the following classes to the document created in section 2.1:
    * To &lt;header&gt;  add class .header
    * To &lt;footer&gt;  add class .footer
    * To &lt;section&gt;  add class .content
    * To &lt;nav&gt;  add class  .navigation
    * To &lt;aside&gt;  add class  .sidebar
3. Using the new added classes figure out how to override:
    * .header must have a font size of 46px
    * .footer must have a font size of 10px
    * .content must have a font size of 14px
    * .navigation must have a font size of 12px
    * .sidebar must have a font size of 10px
4. If the class attribute finishes with **r (example header, footer)**, the background must be magenta.
5. If the class attribute contains an **a (example nav)** but do NOT finish with r, the background must be blue.
6. How could you add weight to the global font definition to win over the classes added by point 3?
7. Imagine there is a declaration like class=”oh-no-inline-styles” style=”background:red” and you need to change the background to green without changing the inline style. How could you accomplish this?

###2.4 The Box Model
* Learn about the Box Model (how the browser calculates boxes size): [http://www.w3.org/TR/CSS21/box.html](http://www.w3.org/TR/CSS21/box.html)
* Experiment with the box-model here by changing width / margin / padding / box-sizing [http://dabblet.com/gist/2986528](http://dabblet.com/gist/2986528)
* Learn how to alter the box model calculations: [box-sizing](http://quirksmode.org/css/user-interface/boxsizing.html)
* More on [box-sizing](http://adamschwartz.co/magic-of-css/chapters/1-the-box/)
* Use the playground provided above to change *box-sizing* and see the changes.

###2.5 Layout

####2.5.1 The display property
* Learn how to handle the display property (block, inline, inline-block, none) [http://learnlayout.com/display.html](http://learnlayout.com/display.html)
* Read about the display property [here](http://adamschwartz.co/magic-of-css/chapters/2-layout/)

Exercises

1. Now modify your CSS to reach something similar to the initial layout asked.

####2.5.2 Layout systems
* Learn how to create your own layout system [Grid Systems](http://www.adamkaplan.me/grid/)
* Learn how to float elements [CSS Floats](http://alistapart.com/article/css-floats-101)
* Learn about [CSS units](http://alistapart.com/article/love-the-boring-bits-of-css)
* Using your own layout system, implement an HTML page based on the following `mock-up` (only desktop).
  ![alt text](images/example-layout.png)
* If the user hovers one of the boxes, a new box must be shown. The new box must include text describing the section that box represents. In addition, it must be positioned at the top of the parent box, and must have a transparent background.
    * Example: [http://codepen.io/mofeenster/full/qtkKy/](http://codepen.io/mofeenster/full/qtkKy/)     
    * To accomplish this [Learn about CSS position](http://learnlayout.com/position.html).

###2.6 Media queries
* [Learn Media Queries](http://css-tricks.com/css-media-queries/) and adapt your previous exercises to work on mobile screens. Use the following design as guide [example](http://mediaqueri.es/ity/).

#Topic 2: JavaScript Intro and jQuery

##Reading:

1. Beginners: Eloquent JavaScript [basic tutorial](http://eloquentjavascript.net/) (in case you need it!)

2. Beginners: Have fun with [Codecademy](http://www.codecademy.com/courses/jquery-and-the-dom) (more experienced devs might find it fun!).

3. Recommended: [jQuery Fundamentals](http://jqfundamentals.com/)

4. Explore [jQuery documentation](http://docs.jquery.com/Main_Page)

5. JavaScript Prototypes: [http://www.slideshare.net/Dmitry.Baranovskiy/demystifying-prototypes-6183470](http://www.slideshare.net/Dmitry.Baranovskiy/demystifying-prototypes-6183470)

##Extra documentation:

* Web Platform Documentation Project: [http://www.webplatform.org/](http://www.webplatform.org/)

* MDN JavaScript Reference: [https://developer.mozilla.org/en/JavaScript/Reference](https://developer.mozilla.org/en/JavaScript/Reference)

* Annotated ECMAScript 5.1: [http://es5.github.com/](http://es5.github.com/)

* JSONP and CORS: [http://json-p.org/](http://json-p.org/) - [http://www.html5rocks.com/en/tutorials/cors/](http://www.html5rocks.com/en/tutorials/cors/)

* Using Chrome console to debug JavaScript [https://developer.chrome.com/devtools/docs/console](https://developer.chrome.com/devtools/docs/console)

##Practice:

1. Open your IDE, create a new file text, save it as index.html. Add the correct doctype, and a few tags with random content. Add jQuery's latest version.

2. Add a stylesheet to the index.html. Use the stylesheet to center the text of all ```section``` elements of the page.

3. Add a hidden ```section``` with the following text inside: "Hello world".

4. Add a button below the ```section``` to your index.html.

5. When the page has finished loading the section must fade in.

6. Add a textbox with the class "alias", and put the cursor inside it right after the ```section``` fades in.

7. Attach an event to the created button which calls a function that gets a response from [http://bootcamp.aws.af.cm/welcome/yourname](http://bootcamp.aws.af.cm/welcome/yourname)

8. Write the response to the ```section``` element.

9. Show ```section``` content in red when a server error occurs.

10. Take some free air and then create a function to highlight your name in the server response content. Call it right after setting the response inside the div.

11. AJAX: get the response from [https://api.spotify.com/v1/search](https://api.spotify.com/v1/search) with parameters data "q = 'Rolling Stones', type = 'album'"
First log the service response in Chrome's console to analyze data (see provided link on Chrome console), then display albums inside another section in the right side of the screen. The ```article``` element must be used to contain the album data.
For each album show: name, type, image, release_date, and a link to spotify for that album.

12. Add an input type="text", and reuse the code for exercise 11, so the user can perform search for any artist albums.

13. Validate your page using W3C validator: [https://addons.mozilla.org/en-US/firefox/addon/web-developer/](https://addons.mozilla.org/en-US/firefox/addon/web-developer/)

###Key Points:

1, 5, 7, 11, 13

###Mobile Test:

Test your code in a mobile device or in Android emulator.

Hint: A good option to test your code in a mobile device is to use Genimotion Android Emulator [http://www.genymotion.com/], which is one of the most fast and easy mobile emulators to install.

###Commit:

Commit your practice code.

→ [index](#index)

#Topic 3: Design Patterns and OOP in JavaScript

##Reading:

1. Understand JavaScript Prototypes: [http://javascriptweblog.wordpress.com/2010/06/07/understanding-javascript-prototypes/](http://javascriptweblog.wordpress.com/2010/06/07/understanding-javascript-prototypes/)

2. Understand JavaScript OO: [http://javascriptissexy.com/oop-in-javascript-what-you-need-to-know/](http://javascriptissexy.com/oop-in-javascript-what-you-need-to-know/)

3. Read [this](http://addyosmani.com/resources/essentialjsdesignpatterns/book/) article about JavaScript design patterns by Addy Osmani

##Extra documentation:

* [JavaScript Patterns Collection](http://shichuan.github.com/javascript-patterns/)

* [A fresh look at JavaScript Mixins](http://javascriptweblog.wordpress.com/2011/05/31/a-fresh-look-at-javascript-mixins/). Pay attention on the section about the ```extend```function. That function is one of the *MOST* used patterns in JavaScript for code reusability.

##Practice:

1. Create a Movie object:

    <table>
        <tr>
            <td>Movie</td>
        </tr>
        <tr>
            <td>-attributes : hashmap</td>
        </tr>
        <tr>
            <td>+ play() <br />+ stop()<br />+ set(attr:string, value)<br />+ get(attr:string)</td>
        </tr>
    </table>

2. Instantiate some of your favorite movies and play with them in the console.

3. Add a MovieObserver class that listens for "*playing*" and “*stopped*” events.

4. Publish "*playing*" event on Movie.play(). You should be able to do something like this in the console:

    ```js
    var terminator = new Movie();
    terminator.set('title', 'Terminator');
    // ...
    terminator.play(); // output: Playing Terminator...
    ```

5. Publish "*stopped*" event on Movie.stop().

6. Log to console when each event is fired.

7. Refactor Movie class as a Module keeping your previous code for reference.

8. Create a DownloadableMovie that extends from Movie adding a download method. Here you will have to set the correct ```prototype``` to DownloadableMovie.

9. Create a  mixin object called Social with the methods: share(friendName) and like().

10. Apply the mixin to Movie object and play with the console output. You should be able to do something like this in the console:

    ```js
    var ironman2 = new Movie();
    ironman2.set('title', 'Iron Man 2');
    // ...
    ironman2.share('V. Rivas'); // output: Sharing Iron Man 2 with V. Rivas
    ```

11. Create an Actor class and create some actors from one of your favorite movies.

12. Show how you would add an array of actors to a Movie object.

###Key Points:

3, 4, 8, 10

###Commit:

Commit your practice code.

→ [index](#index)

#Topic 4: NodeJS, NPM, and JavaScript Modules
There are three ways to write modules in JavaScript: AMD, CommonJS, and ES6 Modules. In this topic, you will learn how to write CommonJS modules. CommonJS is the module format used by NodeJS, and through the use of browserify they can be used in a browser. ES6 modules will be the standard way to write JavaScript in the future, once the major browsers finish to add that feature.

##Reading:

1. For a good introduction to JavaScript Modules [Modules::Eloquent JavaScript](http://eloquentjavascript.net/10_modules.html)

2. Read about AMD, CommonJS, and ES6 Modules [Writing Modular JavaScript](http://addyosmani.com/blog/writing-modular-javascript/)

3. Read on how to use Browserify [Browserify Handbook](https://github.com/substack/browserify-handbook)

##Practice:

1. Create a new directory for this topic, and add a package.json. Tip: use ```npm init```.

2. Install browserify globally in your environment. Tip: ```npm install -g browserify ```.

3. Create the same Movie class as in the previous practice, but inside a CommonJS module. Tip: use ```module.exports```.

4. Create a Director class inside a module and set it as a dependency on the Movie module. Tip: use ```require```.

5. Create a movies.js file using browserify. Add that script to an index.html. Check that it works opening it in the browser.

6. Add name:string, a quotes:array properties, and a speak() method to Director; calling speak() will return director’s quotes.

7. Add a Director to a Movie. Implement the following API:
```
var alien = new Movie();
var ridleyScott = new Director(‘Ridley Scott’);
ridleyScott.set('quotes', ['Cast is everything.', 'Do what ...']);
alien.set('director', ridleyScott);
alien.get('director').speak(); //output: Ridley Scott says: 'Cast is...'
```

8. Add jQuery as a module.

9. Using jQuery show Director quotes.


###Key Points:

2, 3

###Commit:

Commit your practice code.

→ [index](#index)

#Topic 5: MVC - Backbone

##Reading:

1. Read about the [MVC design pattern](http://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller)

2. [MVC Architecture for JavaScript Applications](http://michaux.ca/articles/mvc-architecture-for-javascript-applications)

3. Learn the basics of [Backbone.js](http://documentcloud.github.com/backbone/); [https://github.com/addyosmani/backbone-fundamentals](https://github.com/addyosmani/backbone-fundamentals)

4. Learn about [Handlebars.js](http://handlebarsjs.com/)

5. Become familiar with [Jasmine](http://jasmine.github.io/2.1/introduction.html) syntaxis to write testing specs. Learn how to use Jasmine to test Backbone.js applications: [http://addyosmani.github.io/backbone-fundamentals/#jasmine](http://addyosmani.github.io/backbone-fundamentals/#jasmine)


##Practice:

1. Write one Handlebars template to show the details of a movie (name, year, description or plot, genre, etc). Use [imdb](http://www.imdb.com/) or [Netflix](http://www.netflix.com/) for inspiration.

2. Create a second template to render a list of movies.

3. Using Backbone, create a movie listing with your favorite movies. Data shall be persisted in localhost.

4. Show movie details in a separate details view.

5. Allow to add / edit / remove movies from the list.

6. Add Jasmine tests for the different views and models.

Tips:
* Create a Model that represents a movie.
* Create a Collection to represent a list of movies.
* Create one view to render a movie, and another to render a list of movies.

###Key Points:

1, 2, 3

###Commit:

Commit your practice code.

→ [index](#index)

#Topic 6: MVC - AngularJS

##Reading:

1. [Ultimate guide to learn Angular.js in one day](http://toddmotto.com/ultimate-guide-to-learning-angular-js-in-one-day/).

2. Read Angular.js's [Developers Guide](https://docs.angularjs.org/guide).

3. Check your code to comply with Angular.js's [Best Practices](https://github.com/angular/angular.js/wiki/Best-Practices).

4. Check your code to avoid Angular.js's [Anti-patterns](https://github.com/angular/angular.js/wiki/Anti-Patterns)

5. Learn how to create unit tests for your angular.js applications [https://docs.angularjs.org/guide/unit-testing](https://docs.angularjs.org/guide/unit-testing)

##Practice:

1. Create a movie listing with your favorite movies. Data shall be persisted in localhost.

2. Show movie details in a separate details view.

3. Allow to add / edit / remove movies from the list.

4. Configure Karma and write tests for the controllers of your application.

Tips:
* Learn how to use ng-repeat (to render a list of movies).
* Use [templateCache](https://docs.angularjs.org/api/ng/service/$templateCache) to access your templates.
* Write a controller to add/edit/remove the movies. Create another controller to show details.
* Use ng-router to access the movie listing as a default route. Create a route for the details view.

###Key Points:

1, 2, 3

###Mobile Test:

Test your code in a mobile device or in Android emulator.

###Commit:

Commit your practice code.

→ [index](#index)


#Topic 7: HTML5 APIs

##Reading:

1. Take a glimpse into HTML5 APIs: [http://www.html5rocks.com/en/](http://www.html5rocks.com/en/)

    1. Storage APIs: [http://www.html5rocks.com/en/features/storage](http://www.html5rocks.com/en/features/storage)

    2. Graphic APIs: [http://www.html5rocks.com/en/features/graphics](http://www.html5rocks.com/en/features/graphics)

    3. Connectivity APIs: [http://www.html5rocks.com/en/features/connectivity](http://www.html5rocks.com/en/features/connectivity)

    4. Drag & Drop API: [http://html5doctor.com/native-drag-and-drop/](http://html5doctor.com/native-drag-and-drop/)

    5. File APIs: [http://www.html5rocks.com/en/features/file_access](http://www.html5rocks.com/en/features/file_access)

2. Now, take a deep dive into HTML5: [http://diveintohtml5.info/](http://diveintohtml5.info/) (optional)

3. Use [http://playground.html5rocks.com/](http://playground.html5rocks.com/) to play a little bit with them.

##Practice:

1. Create a page with a textarea and a save button. Save textarea content's when the user clicks on save. Use both localStorage and IndexedDB.

2. Add a clear button to erase saved content.

3. Add drag and drop support to load text files.

4. Open a web socket and test it against [this echo service](http://websocket.org/echo.html).

5. Create a web page with a canvas element. Upon page load draw basic geometric figures with random colors and strokes.

6. Using the Canvas API animate a rectangle's position on the screen. Make sure not to use setTimeout but requestTimeFrame to perform the animation.

7. Create a web page with a SVG element to show a vector graphic. Make sure you understand when is better to use SVG instead of bitmaps, and viceversa.

###Key Points:

1, 3, 6

###Commit:

Commit your practice code.

→ [index](#index)

#Your First Project Starts Now!
[Twitter Based App] (https://github.com/nicolasronsmansglobant/Bootcamp-UI-final-project)

→ [index](#index)


Thanks for reading!
