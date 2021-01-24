# YelpCamp

A project that is a culmination of everything I learned in full-stack web application development. YelpCamp is a website where users can create an account to post campgrounds they've been to and experienced across the world. Users can also post reviews on campgrounds that other people have posted.

## Live Demo

* To see the web application in action go to [https://yelpcamp2021.herokuapp.com/](https://yelpcamp2021.herokuapp.com/)


## Features

### Authentication:
  
  * User login with username and password

### Authorization:

  * One cannot create campgrounds unless they're logged in

  * One cannot edit or delete campgrounds and reviews that created by other users

### Campgrounds:

  * Users can create, edit, and delete campgrounds they've posted and can leave reviews on other campgrounds

  * Photo uploading functionality to enhance visual activity for the user

  * Will show location of campground they've created on a map
  
  * Displays all campgrounds posted on the website on a big map

### User account creation/login system:

* YelpCamp will keep track of accounts created

* Also keeps track if user is still logged in through cookies and sessions


### Basic Security

* Prevents mongo injections and Cross Site Scripting (XSS) through sanitizing HTML


## Built with 

#### Front-End

* [EJS] - HTML templating
* [Mapbox] - Geocoding and fancy maps
* [Bootstrap] - Styling YelpCamp
* [Javascript/jQuery] - DOM manipulation and event listening

#### Middleware

* [Express.js] - Web framework
* [Passport.js] - Authentication and session tracking
* [multer] - Handling multipart/form-data (Mainly image uploading when creating/editing campgrounds
* [helmet.js] - Strengthening YelpCamp security by setting various HTTP headers
* [joi] - Validating data being sent to the backend and sanitizing HTML

#### Back-End

* [Node.js] - Server-side
* [MongoDB] - Database that stores all users, campgrounds, and reviews
* [Cloudinary] - Provided media APIs for YelpCamp and another cloud service to store images from YelpCamp




## Acknowledgments
* https://www.udemy.com/course/the-web-developer-bootcamp/  - Big code along project from this course on Udemy! All credit goes to the teacher of this course, Colt Steele.
