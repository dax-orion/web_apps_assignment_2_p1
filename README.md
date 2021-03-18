# Web Application Development Assignment 2 Part 1
## Group:
+ Lora Kalthoff
+ Dax Hurley - 
---

## Tasks:
Assignment 2:
- Lora : [Part 2](https://github.com/LoraKalt/webapp_2021_project/tree/assignment-2) - Form Validation of Sign-up
- Dax : [Part 1](https://github.com/dax-orion/web_apps_assignment_2_p1) - Google Books Search API

## Description:

A simple website to search google books by keyword. Supports pagination and displays book thumbnails, title, author, publisher, published year, page count and categories.

## Usage:
Open index.html in any modern browser (Edge, Chrome, Firefox, etc).

OR view in github pages [github pages](https://dax-orion.github.io/web_apps_assignment_2_p1)

## Design Decisions

- Website uses a default image in case the image is undefined or missing.
- Field names are given for each field to indicate what data should be there in case the field is missing.
- Previous page button will be disabled on the first page.
- Since, after extensive testing we determined that the result counts returned by google are inaccurate, next page button will not be disabled on the 'last' page of results.
- For simplicity, request is made ever time the page is changed, results for already visited pages are not cached.
## Implementation:
Website uses [Bootstrap 5](https://getbootstrap.com/), html5, css3 and [Vue.js](https://vuejs.org/)

Built using the [google books search api.](https://developers.google.com/books)
