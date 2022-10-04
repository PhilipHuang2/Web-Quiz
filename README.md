# Web-Quiz
A web page that tests you and on the basics of Web design.

# Description

This web page is a short quiz to test your basic knowledge of web design.  I want to build this website to test my javascript knowledge, specifically how to dynamically change the DOM.  I already know how to change the look of the sight through CSS and viewports but I can't really change what is on the page with just CSS.  In this page, I changed the page in two ways, through changing the display property on button click and through removing and inserting element tags through Javascript.  I felt particularly clever when i realized that I can just hide the questions and answers tags when the quiz hasn't started because the DOM structure stayed constant throughout the actual quiz.  Then I would removed the sections, and inserted a table when I wanted to show off the Score Board.  This assignment helped show me how to use Javascript for these kinda of projects, and when to use display:none which I thought was particularly useless before this assignment.  

https://philiphuang2.github.io/Web-Quiz/

# Upgrades

This section is sort of a what if section, of things that I should add when I have more time and more skills.

### More CSS

Nothing really needs to be said here.  My site looks pretty bad as it is, a better color scheme and more organic headers would go a long way.

### Responsive and Intuitive Timer

Something I've noticed after I was done with the project is that when you answer incorrectly, the timer does not get updated until the next second, so the time can drop unexpectedly.  I should add some code to make the timer drop at the time of the button drop, and i know that there is a way for the time to flash red to show that it is indeed dropping cause you got a question wrong.

### Refactor Javascript
I wrote this code pretty piece-meal, ie. I want to do this, and I want to do that, then I want something to combine these two functions.  But between the global variables and event listeners, my code really makes no logical sense, so in the future I want to take a long view approach and rewrite my code so that it takes the least amount of variables, and that that reading it from the top to bottom makes more sense.

### External Quiz Answersheet

Right now my quiz is three questions and stored in variables written directly in my javascript.  That really isn't good in both space and safety.  In python, I can read an external file, and import the json object for a quiz but I don't really know how to to do that currently.  Adding an external file reader would make expanding the quiz much easier.



#  License

MIT License

Copyright (c) 2022 Phiip Huang

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.