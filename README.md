# Learning Javascript
A 12 week introduction to JavaScript curriculum for weekly JavaScript Discussion Group sessions.
## Syllabus
### Core Reading
-  [Learning JavaScript, 3rd edition](https://www.amazon.com/Learning-JavaScript-Essentials-Application-Development/dp/1491914912/) (2016)
-  [You Don't Know JavaScript](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/README.md) (2019) and/or [You Don't Know JavaScript Yet](https://github.com/getify/You-Dont-Know-JS) (2020-2021, in progess)
-  [JavaScript: The Good Parts](https://www.amazon.com/JavaScript-Good-Parts-Douglas-Crockford/dp/0596517742) (2008)
-  [JavaScript Patterns](https://www.amazon.com/JavaScript-Patterns-Better-Applications-Coding/dp/0596806752) by Stoyan Stefanov (2010)
-  [Learning JavaScript Design Patterns](https://www.amazon.com/Learning-JavaScript-Design-Patterns-Developers/dp/1449331815) by Addy Osmani (2012)
    - See also [patterns.dev](https://www.patterns.dev/) by Addy Osmani
- [Composing Software](https://medium.com/javascript-scene/composing-software-the-book-f31c77fc3ddc) by Eric Erikson (2019)

### Additional Reading
-  [JavaScript: the Definitive Guide, 7th edition](https://www.amazon.com/JavaScript-Definitive-Most-Used-Programming-Language-dp-1491952024/dp/1491952024/) (2020)
-  [Eloquent JavaScript](https://www.amazon.com/dp/B07C96Q217/) (2018)
-  [Beginning JavaScript, 5th edition](http://www.amazon.com/gp/product/1118903331/) (2015)

### Learning Tips
-   Skim the chapter headers, read quickly, and then read again more throughoughly.
-   Don't skim over the code examples. Read all the code and try to understand how it works.
-   Have an open JavaScript console nearby to test the code that you're reading.
-   Watch videos at faster than normal speed, up to &times;2 speed.
-   Take Coursera&rsquo;s [Learning How to Learn](https://www.coursera.org/learn/learning-how-to-learn/home/welcome) course.

### Programming Tips
-   If you have to do something more than three times, find a way to automate it.
-   If you find yourself copying and pasting code within your application, consider creating shared code (a shared Array, Object, or Function).

## Table of Contents
1.  [Preparation](#preparation)
1.  [Data Types, Control Flow, and Loops](#data-types-control-flow-and-loops)
1.  [Basic Debugging](#basic-debugging)
1.  [Functions](#functions-objects-and-the-bom)
1.  [Arrays and Objects](#arrays-and-objects)
1.  [Strings, Date/Time, Math](#strings-time-html-forms-windows-frames)
1.  [The BOM, DOM, and Handling Events](#the-bom-dom-events-and-handling-events)
1.  [Introduction to Node JS](#node-js)
1.  [Working with Data](#working-with-data)
1.  [ES6+ and Shorthand JS](#es6+-and-shorthand-js)
1.  [Programming Paradigms](#programming-paradigms)
1.  [Programming Design Patterns](#programming-design-patterns)
1.  [Projects](#projects)

<hr />

## Preparation
1.  Get the books.
1.  Create a [Codepen](https://codepen.io/) account.
1.  Create a [GitHub](https://github.com/) account.
1.  Download [VS Code](https://code.visualstudio.com/) or use your favorite IDE.

### Introductory Lessons
1.  [A Dao of Web Design](http://alistapart.com/article/dao)
1.  Watch: [Enhance! by Jeremy Keith](https://vimeo.com/134260131) [1:03:13]
1.  Watch: [The Long Web by Jeremy Keith](https://vimeo.com/118146193) [56:31]
1.  Work through the [JavaScript Primer](#)
    1.  JS in the console
    1.  JS on the web (CodePen)
    1.  JS in files (.js files)
    1.  JS in the terminal (Node.js)
1.  Learning JavaScript
    1.  Your First Application [1-14]
    1.  JavaScript Development [15-24]
1.  JavaScript: The Good Parts
    1.  Good Parts


## Data Types, Control Flow, and Loops
    [90 minutes reading]
1.  [You Don't Know JS Yet: Get Started](https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/get-started/README.md)
1.  Learning JavaScript
    1.  Literals, Variables, Constants, and Data Types [25-46]
    1.  Control Flow [47-70]
    1.  Expressions and Operators [71-92]
1.  JavaScript: The Good Parts
    1.  Grammar
1.  Beginning JavaScript
    1.  Chapter 1 (Introduction to JavaScript and the Web) [1-16]
    1.  Chapter 2 (Data Types and Variables) [17-55]
    1.  Chapter 3 (Decisions and Loops) [56-86]

### Exercises
In the JavaScript console:
1.  Store a variable.
1.  Write code that counts down from 10 to 1.
1.  Write code that outputs a tetraktys.
Write into the page:
1.  &lt;script&gt;
1.  &lt;link&gt;


## Functions
    [90 minutes reading + 1 article + 4? hour practice]
1.  Learning JavaScript
    1.  Functions [93-106]
    1.  Learning JavaScript: Scope [107-120]
1.  Beginning JavaScript: Chapter 4 (Functions and Scope) [87-98]
    1.  Callbacks
    1.  Closures
    1.  Recursion
1.  JavaScript: The Good Parts
    1.  Functions
1.  [You Don't Know JS Yet: Scope & Closures](https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/scope-closures/README.md)
1.  JavaScript Patterns by Stoyan Stefanov: Chapter 4 (Functions)

### Exercises
1.  Write and run a function that takes two numbers and adds them together.


## Basic Debugging
    [30 minutes reading + 22 minutes video + 3 articles]
1.  Article: [Code Conventions for the JavaScript Programming Language](http://javascript.crockford.com/code.html)
1.  Beginning JavaScript: Chapter 18 (Common Mistakes, Debugging, and Error Handling) [549-583]
1.  [10 Mistakes That JavaScript Beginners Often Make](http://tutorialzine.com/2014/04/10-mistakes-javascript-beginners-make/)
1.  [Debugging JavaScript: Understanding JavaScript Error Messages](http://www.webreference.com/programming/javascript/rg31/index.html)
1. Debugging in the Browser
      -  Watch: Google Chrome Debugging: [Debugging JavaScript using Breakpoints with the Google Chrome Developer Tools](https://www.youtube.com/watch?v=htZAU7FM7GI) [11:24]
      -  Watch: Firefox Debugging: [Debugging JavaScript by Using Breakpoints (in Firefox/Firebug)](https://www.youtube.com/watch?v=k_G2kHiqU60) [10:43]
      -  Internet Explorer Debugging: [How to use F12 Developer Tools to Debug your Webpages](https://msdn.microsoft.com/en-us/library/gg589507(v=vs.85).aspx)


## Arrays and Objects
    [90 minutes reading]
1.  Learning JavaScript: 
    1.  Arrays and Array Processing [121-136]
    1.  Objects and Object-Oriented Programming [137-152]
1.  Beginning JavaScript: Chapter 5 (JavaScript --- An Object-Based Language) [99-152]
1.  JavaScript: The Good Parts
    1.  Objects
    1.  Arrays
1.  [You Don't Know JS: this & Object Prototypes](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/this%20&%20object%20prototypes/README.md#you-dont-know-js-this--object-prototypes)
    1.  Chapter 1: this Or That?
    1.  Chapter 2: this All Makes Sense Now!
    1.  Chapter 3: Objects
1.  JavaScript Patterns by Stoyan Stefanov: Chapter 5 (Object Creation Patterns)

### Exercises
1. Write and run a function ....


## Strings, Date/Time, Math
    [90 minutes reading + 5 hour practice time]
1.  Learning JavaScript:
    1.  Date and Time [209-218]
    1.  Math [219-226]
1.  JavaScript: The Good Parts
    1.  Regular Expressions
    1.  Methods
1.  Beginning JavaScript
    1.  Chapter 6 (String Manipulation) [153-192]­
    1.  Chapter 7 (Date, Time, and Timers) [193-204]

### Exercises
1.  Write a function that outputs a reverse string.
1.  Write a function that counts the number of times a single letter is in a word.
1.  Write a function the identifies if a word is a plaindrome.
1.  Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”.


## The BOM, DOM, and Handling Events
    [90 minutes reading + 2 articles + project time]
1.  Learning JavaScript: JavaScript in the Browser [247-265]
1.  Beginning JavaScript
    1.  Chapter 8 (Programming the Browser) [205-228]
    1.  Chapter 9 (DOM Scripting) [229-270]
    1.  Chapter 10 (Events) [271-334]
    1.  Chapter 11 (HTML Forms: Interacting with the User) [335-390]
1.  JavaScript Patterns by Stoyan Stefanov: Chapter 8 (DOM and Browser Patterns)

### Project
1.  [Create a Carousel](#create-a-carousel)


## Introduction to Node JS
1.  Learning JavaScript: Node [265-282]
1.  Additional: [100 Days of Node](https://github.com/nelilly/100-days-of-node)

### Exercises
1.  Install Node, npm

## Working with Data
    [70 minutes reading + 2 articles]
1.  Learning JavaScript: Asynchronous Programming [189-208]
1.  Beginning JavaScript
    1.  Chapter 12 (JSON) [391-402]
    1.  Chapter 13 (Data Storage) [403-434]
    1.  Chapter 14 (Ajax) [435-462]
1.  [Working with HTML5 data attributes](http://www.abeautifulsite.net/working-with-html5-data-attributes/)

### Project
1.  [Create a Quiz](#create-a-quiz)
1.  [Improve Your Quiz](#improve-your-quiz)
1.  [Create a ToDo list](#create-a-todo-list)


## ES6+ and Shorthand JS
1.  [JavaScript --- Just another introduction to ES6](https://medium.com/sons-of-javascript/javascript-an-introduction-to-es6-1819d0d89a0f#.1cznhttm0) [5:00]
1.  [Toolsday.io: Solved by ES6](http://toolsday.io/episodes/es1.html) (ES2015) [19:41]
1.  [How to simplify your codebase with map(), reduce(), and filter() in JavaScript](https://itnext.io/15-useful-javascript-examples-of-map-reduce-and-filter-74cbbb5e0a1f)
1.  [25+ JavaScript Shorthand Coding Techniques](https://www.sitepoint.com/shorthand-javascript-techniques/)

### Exercises
1.  Rewrite “FizzBuzz” to be as short as possible.


## Programming Paradigms
    [4 articles + additional reading + project work]
1.  [Introduction to Object-Oriented JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript)
1.  [Prototypal Inheritance in JavaScript](http://javascript.crockford.com/prototypal.html)
1.  JavaScript: The Good Parts
    1.  Inheritance
1.  Learning JavaScript: Functions and the Power of Abstract Thinking [173-188]
1.  [You Don't Know JS: this & Object Prototypes](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/this%20&%20object%20prototypes/README.md#you-dont-know-js-this--object-prototypes)
    1. Chapter 4: Mixing (Up) "Class" Objects
    1. Chapter 5: Prototypes
    1. Chapter 6: Behavior Delegation
1.  JavaScript Patterns by Stoyan Stefanov: Chapter 6 (Code Reuse Patterns)
1.  Prototypal Inheritance: [The Two Pillars of JavaScript --- Part 1: How to Escape the 7th Circle of Hell](https://medium.com/javascript-scene/the-two-pillars-of-javascript-ee6f3281e7f3)
1.  Functional Programming: [The Two Pillars of JavaScript --- Pt 2: Functional Programming](https://medium.com/javascript-scene/the-two-pillars-of-javascript-pt-2-functional-programming-a63aa53a41a4) [14:00]

### Exercise
1.  Rewrite one of the projects using Classes
1.  Rewrite one of the projects using Functional programming concepts
1.  Rewrite one of the projects using Prototypal Objects-linking-to-other-Objects


## Programming Design Patterns
    [1 book + additional reading + project work]
1.  JavaScript Patterns by Stoyan Stefanov: Chapter 7 (Design Patterns)
1.  [Learning JavaScript Design Patterns](https://addyosmani.com/resources/essentialjsdesignpatterns/book/)
1.  Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript: Chapter 4

<hr />

## Projects
### Create an Accordion
Requirements:
1.  Create an accordion widget that you can open and close.
1.  It should be closed on page load.
1.  The initial button should contain text.
1.  It should open to reveal a few paragraphs of text.

### Create a Carousel
Requirements:
1.  Build a Carousel with previous slide and next slide buttons.
1.  The Carousel could contain any number of slides.
1.  Display a slide number.
1.  Each slide should be able to contain any HTML markup.
1.  Toggle classes to animate the slide motion.

### Create a Quiz
Requirements:
1.  Create a simple multiple choice quiz that has radio button choices.
1.  The quiz could show any number of questions and any number of choices.
1.  Use an array to store all the questions. Each question, along with its choices and correct answer, should be stored in an object. The array of questions should look similar to this (Notice that only one question is in this example array; you will add many questions):
    `var allQuestions = [{question: "Who is the strongest Avenger?", choices: ["Hulk", "Thor", "Point Break", "Iron Man"], correctAnswer: 0}];`
1.  Dynamically remove the current question and add the next question, when the user clicks the "Next" button. The Next button will be the only button to navigate this version of the quiz.
1.  Tally the user's score and display the final score on the last page. The last page will only show the score, so remove the last question.

### Improve Your Quiz
Requirements:
1.  Add client-side data validation: make sure the user answers each question before proceeding to the next question.
1.  Add a "Back" button to allow the user to go back and change her answer. The user can go back up to the first question. For the questions that the user has answered already, be sure to show the radio button selected, so that the user is not forced to answer the questions again, which she has completed.
1.  Add animation (fade out the current question and fade in the next question).
1.  Test the quiz on all browsers and fix any bugs. This will give you a good workout
1.  Store the quiz questions in an external JSON file.
1.  Add user authentication: allow users to log in, and save their login credentials to local storage (HTML5 browser storage).
1.  Use a `cookie` to remember the user, and show a "Welcome, 'First Name'" message when the user returns to the quiz.

### Create a To Do List
Requirements:
1.  Prepopulate an array with a list of items.
1.  Display the list of items.
1.  An input field should allow the user to add an item to the list.
1.  A delete button should allow the user to remove an item from the list.
1.  An edit button should allow the user to update a list item.
1.  Use `local-session` storage to maintain the state in the browser.
