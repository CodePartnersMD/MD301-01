# Lab 07: APIs (continued)

## Resources

[Yelp API Docs](https://www.yelp.com/developers/documentation/v3/business_search)

[The Movie DB API Docs](https://developers.themoviedb.org/3/getting-started/introduction)

## Configuration

- `.env` - with your PORT and API keys. Make sure this file is in your `.gitignore` so your keys are not pushed to GitHub.
- `README.md` - with documentation regarding your lab and its current state of development. Check the "documentation" section below for more details on how that should look **AT MINIMUM**
- `.gitignore` - with standard NodeJS configurations
- `.eslintrc.json` - with Code 301 course standards for the linter
- `package.json` - with all dependencies and any associated details related to configuration
- Note that the `package-lock.json` file is automatically created when dependencies are installed and ensures that future installations of the project use the same versions of the dependencies.

```sh
lab-07-repository
   ├── .env
   ├── .eslintrc.json
   ├── .gitignore
   ├── package-lock.json
   ├── package.json
   └── server.js
```

## User Acceptance Tests

### Overview

For this lab assignment, you will use the latitude and longitude to request information about movies filmed in the location and Yelp review for local restaurants.

### Repository set-up

- One person from your group should create a new repository on GitHub called `lab-07-back-end`. Add your partner(s) as collaborator(s). Clone your repository.
- Select one person's lab 6 code to use for today's lab. The person whose code is selected should copy their lab 6 solution into the lab 7 repository. From the command line, use the `cp` command to copy the `server.js` file and your `README.md` file. Initialize your project with Node and install the necessary packages; confirm in your `package.json` file. Add, commit, and push to your master branch.

### Code Review

- From this point on, work on semantically-named non-master branches. 
- The student whose lab 6 solution code was not selected should now be the driver. With your partner, identify three improvements. This should either be pieces of code that can be refactored or three sections of the code base to add verbose comments to. Note: you do not need to select one or the other. For example, you may select one section to comment on and two pieces of code that can be refactored, for a total of three improvements.
- Work on one improvement at a time, making sure to add, commit, and push the changes as each improvement is complete. These will serve as the first three commits which your TA will review during grading, so pay attention to your Git/GitHub workflow. Once all three improvements are complete, create and merge a pull request to your master branch.

### Heroku Deployment

- Once your app is functioning correctly on your master branch, deploy your back end to Heroku in the same manner as lab 6. Create a new Heroku instance with your new partner(s) today. Your deployed site **should not** contain any broken functionality. You may now begin your feature tasks for lab 7.
- As you continue to work on features, make sure to check out your master branch and pull the changes after each pull request is merged. Then, create a new branch from your master branch and continue working. Update your `README.md` file to reflect the changes you are making as you work through the feature tasks today.

### Feature #1: Consistently format data

#### Why are we implementing this feature?

- As a user, I want the application to provide properly formatted data so that I can view similar data for any location I choose.

#### What are we going to implement?

Given that a user enters a valid location in the input  
When the user clicks the "Explore!" button  
Then the data will be rendered in the same format every time  

#### How are we implementing it?

- A constructor function will ensure that each object is created according to the same format every time the server receives data from an API. Refactor your code base to use constructor functions, one per API response. 
- Refactor your `getWeather` callback to use `.map` and send the resulting array as your response to the client. Continue to use `.map` for the remainder of labs 7, 8, and 9.
- Redeploy your application.

### Feature #2: Retrieve restaurant information

#### Why are we implementing this feature?

- As a user, I want to request information about restaurants in the area so that users can view recommendations based on the search query.

#### What are we going to implement?

Given that a user enters a valid location in the input  
When the user clicks the "Explore!" button  
Then the first twenty restaurants in the area will be displayed in the browser  

#### How are we implementing it?

- Create a route with a method of `get` and a path of `/yelp`. The callback should make a Superagent-proxied request to the Yelp API using the necessary location information. Note: review the Superagent docs regarding setting authorization headers.
- Create a corresponding constructor function for the result.
- For each business of the result, return an object which contains the necessary information for correct client rendering. See the sample response, below.
- Use your existing error handler function.
- Redeploy your application.

Endpoint:
`/yelp`

Example Response:
```json
[
  {
    "name": "Pike Place Chowder",
    "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/ijju-wYoRAxWjHPTCxyQGQ/o.jpg",
    "price": "$$   ",
    "rating": "4.5",
    "url": "https://www.yelp.com/biz/pike-place-chowder-seattle?adjust_creative=uK0rfzqjBmWNj6-d3ujNVA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=uK0rfzqjBmWNj6-d3ujNVA"
  },
  {
    "name": "Umi Sake House",
    "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/c-XwgpadB530bjPUAL7oFw/o.jpg",
    "price": "$$   ",
    "rating": "4.0",
    "url": "https://www.yelp.com/biz/umi-sake-house-seattle?adjust_creative=uK0rfzqjBmWNj6-d3ujNVA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=uK0rfzqjBmWNj6-d3ujNVA"
  },
  ...
]
```

### Feature #3: Retrieve movie information

#### Why are we implementing this feature?

- As a user, I want to request information about movies that were set in the area so that users can learn more about the location.

#### What are we going to implement?

Given that a user enters a valid location in the input  
When the user clicks the "Explore!" button  
Then the top twenty movies set in the area will be displayed in the browser  

#### How are we implementing it?

- Create a route with a method of `get` and a path of `/movies`. The callback should make a Superagent-proxied request to The Movie Database API using the necessary location information.
- Create a corresponding constructor function for the result.
- For each movie of the result, return an object which contains the necessary information for correct client rendering. See the sample response, below.
- Use your existing error handler function.
- Redeploy your application.

Endpoint:
`/movies`

Example Response:
```json
[
  {
    "title": "Sleepless in Seattle",
    "overview": "A young boy who tries to set his dad up on a date after the death of his mother. He calls into a radio station to talk about his dad’s loneliness which soon leads the dad into meeting a Journalist Annie who flies to Seattle to write a story about the boy and his dad. Yet Annie ends up with more than just a story in this popular romantic comedy.",
    "average_votes": "6.60",
    "total_votes": "881",
    "image_url": "https://image.tmdb.org/t/p/w200_and_h300_bestv2/afkYP15OeUOD0tFEmj6VvejuOcz.jpg",
    "popularity": "8.2340",
    "released_on": "1993-06-24"
  },
  {
    "title": "Love Happens",
    "overview": "Dr. Burke Ryan is a successful self-help author and motivational speaker with a secret. While he helps thousands of people cope with tragedy and personal loss, he secretly is unable to overcome the death of his late wife. It's not until Burke meets a fiercely independent florist named Eloise that he is forced to face his past and overcome his demons.",
    "average_votes": "5.80",
    "total_votes": "282",
    "image_url": "https://image.tmdb.org/t/p/w200_and_h300_bestv2/pN51u0l8oSEsxAYiHUzzbMrMXH7.jpg",
    "popularity": "15.7500",
    "released_on": "2009-09-18"
  },
  ...
]
```

## Documentation

_Your `README.md` must include:_

```md
# Project Name

**Author**: Your Name Goes Here
**Version**: 1.0.0 (increment the patch/fix version number if you make more commits past your first submission)

## Overview
<!-- Provide a high level overview of what this application is and why you are building it, beyond the fact that it's an assignment for this class. (i.e. What's your problem domain?) -->

## Getting Started
<!-- What are the steps that a user must take in order to build this app on their own machine and get it running? -->

## Architecture
<!-- Provide a detailed description of the application design. What technologies (languages, libraries, etc) you're using, and any other relevant design information. -->

## Change Log
<!-- Use this area to document the iterative changes made to your application as each feature is successfully implemented. Use time stamps. Here's an examples:

01-01-2001 4:59pm - Application now has a fully-functional express server, with a GET route for the location resource.

## Credits and Collaborations
<!-- Give credit (and a link) to other people or resources that helped you build this application. -->
-->
```

## Submission Instructions

- Complete your Feature Tasks for the day
- Create a Pull Request (PR) back to the `master` branch of your repository
- On Canvas, submit a link to your PR and a link to your deployed application on Heroku. Add a comment in your Canvas assignment which includes the following:
  - A question within the context of today's lab assignment
  - An observation about the lab assignment, or related 'Ah-hah!' moment
  - How long you spent working on this assignment
