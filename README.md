# [NUSoptimeizer](http://nusoptimeizer.irvinlim.com/)

*Original submission for [Hack&Roll 2016](http://hacknroll.nushackers.org/2016/index.html), held on 23-24 Jan 2016.*

**Team Members:** Kenneth Loh, Jamos Tay, Irvin Lim

The following was our writeup submitted for the hackathon.

----

## Inspiration
Every semester, planning a timetable is usually an annoying task. Many considerations go into planning an efficient timetable. Have you ever asked yourself:

* Do I have time for meals?
* Can I get from SoC to UTown in time?
* Is my free day worth taking 6 hours straight of lessons?

If so, don't trouble yourself, this app is for you!

## What it does
NUSoptimizer allows the user to plan his timetable easily with just a few clicks. The user need only enter the modules he's taking, and the app will use the NUSMODS API to generate an efficient timetable, retrieving all lesson times and assigning them to slots, taking into account things like travel distance, length of day, breaks and free days.

## How we built it

The entire app is built upon Javascript and HTML/CSS.

We split the program into 3 different parts for each of the team members. The first part is the GUI, where the users can interact and plan their timetables. The second part is the API for capturing the various timetables of different modules that users request for. The last is the optimisation function.
 
The GUI was built similar to NUSMods.com's format, which is a timetable with all the lessons blocked out. We liked it since it was intuitive to understand the timetables assigned, so we adapted their style for our program. 

We made use of a bootstrap framework called [Foundation by Zurb](http://foundation.zurb.com), which combines Sass (the CSS preprocessor), jQuery, and Grunt together for really easy workflow. Javascript and Sass files are combined and minified on the go with the help of Grunt runner, to minimise HTTP requests and overhead. At the same time, we made extensive use of jQuery and jQuery UI with its powerful library to handle events and user interaction.
 
We also made extensive use of [NUSMods' API](https://github.com/nusmodifications/nusmods-api), to retrieve module information. 
 
Lastly, the optimisation function takes the module data, and chooses timetables based on certain heuristics, such as ease of travel, number of free days, as well as the amount of breaks. Instead of brute-forcing all the scenarios which will take a long time, we used a probabilistic method to find good-enough optimisations, allowing for acceptable timetables in a short time, rather than a marginally better one for a much longer time.

## Challenges we ran into

We ran into countless problems along the way, but we were glad to overcome/work around most of them. The biggest problem we faced was the asynchronous nature of AJAX requests, and working to make multiple AJAX calls simultaneously, while making sure that our code stayed elegant and not running into callback hell.

## Accomplishments that we're proud of

Being able to complete a full-blown project in just 24 hours!!! :)

## What we learned
In school assignments, we've always been learning how to program alone, in our own ways and styles. However, in this project, we all have different skills, such as experience with JQuery, or coming up with optimisation algorithms, and we have to bring all our skills together in one project. In this project, we had to learn how to program different parts of site such that it is easy to "assemble" as one coherent tool. There were some hitches along the way, for instance adapting procedural code into asynchronous code in JQuery, but overall we managed to make a working prototype for the project. 
 
## What's next for NUSoptimeizer
NUSoptimeizer is meant for all NUS students to help them save time in coming up with their semesters' timetables, as well as timetable contingency plans. Various heuristics such as free days, ease of travel and meal timings are all visualized to help students choose a timetable that is just right for them, minus the hassle of figuring it all out.
 
NUSoptimeizer is also coded in an adaptable format such that it is easy for other people to make use of the very same code to plan their own university timetables. We hope that NUSoptimeizer doesn't remain for NUS students alone, but becomes a platform for others to benefit from too.

## 
