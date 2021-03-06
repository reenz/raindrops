# Raindrops

[![Build Status](https://travis-ci.org/reenz/raindrops.svg?branch=master)](https://travis-ci.org/reenz/raindrops)

## Task

Write a function that takes as its input a number (n) and converts it to a string, the contents of which depend on the numbers factors

- if the number has a factor of 3, output 'Pling'
- if the number has a factor of 5, output 'Plang'
- if the number has a factor of 7, output 'Plong'
- if the number does not have any of the above as a factor simply return the numbers digits

Examples:
- 28's factors are 1, 2, 4, 7, 14 and 28: this would be a simple 'Plong'
- 30's factors are 1, 2, 3, 5, 6, 10, 15, 30: this would be a 'PlingPlang'
- 34 has four factors: 1, 2, 17, and 34: this would be '34'

### Technologies

* Node
* Mocha/Chai

### Approach

* As the task is very simple and small I will make a command line app in Javascript and will test it with Mocha and Chai.
* I will take one case at a time like output 'Pling' if the number has a factor of 3 then output 'Plang' if the number has a factor of 5 and so on and will follow TDD to accomplish the task.
* Used Travis CI so that it runs my tests every time I push to GitHub and can discover quickly if my commit broke something, and fix it.
* To handle arguments other than number I made a private function validate that will raise an error if passed argument is not a number.

### Screenshot
![terminalimg](Images/raindrops.png)

### How to use

* git clone`git@github.com:reenz/raindrops.git`
* run `npm install` to download the dependencies
* run `npm test` to run the test
* run `node` , it will open node terminal and then follow steps in screenshot