# Bird-Go

Bird-Go is a platform for bird enthusiasts, citizen scientists, and bird watchers to share information and foster a sense of community around our avian friends. Users can upload pictures of local birds, have their identification accuracy voted on, and engage with user posts about birds. The website is a valuable resource for learning more about the birds in your area and contributing to a growing database of species. Whether you're a seasoned birder or just starting out, our website is the perfect place to connect with other bird lovers and share your passion for these fascinating creatures.

## Bird Go Home Page

![Bird Go Home Page](https://i.imgur.com/eCxWTyT.jpg)

![Bird Go Home Page Rotating Images](https://i.imgur.com/wsKy0aK.png)

![Bird Go Home Page Latest 15 Posts](https://i.imgur.com/ROChQ2j.png)

When you visit Bird Go you'll be able to see the latest 15 posts submitted by the Bird Go community. The navigation bar will present the options to login and sign Up, or visit your profile and submit a new sighting depending on cookie-based session authentication.

## Sign Up & Login

![Sign Up](https://i.imgur.com/r6YFACg.png)
![Login](https://i.imgur.com/6a9QSB8.png)

Our website is built with bcrypt authentication and authorization. Knex.js is used in communication with our PostgreSQL server to validate sign up and login requests.

## Example Personal Profile

![Example Personal Profile ](https://i.imgur.com/AOsmof4.png)

When logged in you can visit your personal profile where all of your sightings will be consolidated. Here you'll have the opportunity to change your profile, as well as update and delete your posts.

## Submit a New Sighting

![Submit a New Sighting ](https://i.imgur.com/0K3VNSw.png)

Under _New Post_ you can submit a new sighting. For _Species_ you must include your best approximation of your bird's common, colloquial, or taxonomic name. Photo URL, date of sighting, and location are all required information to submit. Under _Identification Confidence Rating_ you must provide, on a scale of one to ten, how confident your accuracy is on the species identification.

## Example User Profile and Post

![Example User Post](https://i.imgur.com/cYnu4lQ.png)
![Example User Profile](https://i.imgur.com/E0d2cfj.png)

When exploring other posts you may also access the profile of the poster by clicking on their username.

## Community Identification Voting System

![Community Identification Voting System](https://i.imgur.com/hp375Cu.png)

The rating system is useful for validating the accuracy of species identification. Here is an example of an obvious misidentification, notice how the community can moderate it by submitting ratings.

# Development

## Entity Relationship Diagram

![Entity Relationship Diagram](https://i.imgur.com/jPFN5bb.png)

We created this ERD using Diagrams.net, check out our diagram [here.](https://drive.google.com/file/d/1vi7HrYvXM4G5lERWQ4KHmYBKdlmzpphB/view?usp=sharing)

## Mock Up

![Figma Mock Up](https://i.imgur.com/9TQfrZc.png)

We created this mock up using Figma, check out our diagram [here.](https://www.figma.com/file/djTaDZzUcz1znO7UJcmyvE/BirdGo?t=nMyT6JaoAdFSgT6L-1)
