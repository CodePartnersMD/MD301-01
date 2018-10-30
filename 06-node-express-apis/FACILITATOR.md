# Class 06: Node, npm, Express, and APIs

## Overview

Class 6 is the first day where students will be working with a static client. Throughout labs 6-9 they will write the `server.js` file, as well as database schemas for labs 8 and 9. 

Students will be able to view the code base for the static client, but will not be able to modify it in any way. 

The source code for the front end is available in the `curriculum/static-client` folder.
The deployed front end is available here: https://codefellows.github.io/city_explorer/

To test locally: students should enter `http://localhost:3000` in the input of the deployed City Explorer website. Note that this is over http, not https.

To test their deployed back end: students should enter their deployed URL in the input, with the trailing forward slash removed.

The overarching takeaway for labs 6 through 9 is the concept of front ends and back ends existing as two separate entities. The only relationships that exist between them are the relationships we create. In the context of these labs, the client is built to render specific data. The job of the server is the obtain that data, initially from individual APIs and eventually from a SQL database.

Students will work with a new partner for each of these four labs, deploying each back end to Heroku. The `LAB.md` for lab 7 has detailed instructions about the process of working with a new partner for each of the four labs.

Refer students to the demonstration of the Heroku deployment process from the workshop in lecture 5. Allow students to work through the deployment during lab time for the practice. By lab 9, they should feel much more confident in the speed and ease of deploying an application to Heroku. 

## How do I prep for today?

- Prepare a 10-15 demonstration to introduce the topic of today's code challenges.

Review the code base for the static client. Be prepared to review this code with students for approximately 15 minutes during lecture. Certain topics, like Handlebars, will not be new. However, `$.get` is brand new, so be prepared to discuss the web request-response cycle and the difference between the front end and the back end.

Review the demo code for today. There are several comments throughout the file, so feel free to use those as guidance as you like. Note: provide function signature for `getWeather`, but not the route.

Orient yourself with Postman as a tool. Make sure to request API keys for all of the necessary APIs for the week. Most are issued within a few minutes to hours, but it is better to request them all up front.

For reference, here are the docs for all of the APIs being used in labs 6-9.

- [Google Geocoding API Docs](https://developers.google.com/maps/documentation/geocoding/start)
- [Dark Sky API Docs](https://darksky.net/dev/docs)
- [Yelp API Docs](https://www.yelp.com/developers/documentation/v3/business_search)
- [The Movie DB API Docs](https://developers.themoviedb.org/3/getting-started/introduction)
- [Meetup API Docs](https://www.meetup.com/meetup_api/)
- [Hiking Project API Docs](https://www.hikingproject.com/data)

## What changed from the previous class?

Students are now working in the back end with no control over the client. 

## What might students struggle with today?

It will likely take time for students to adjust to the syntax of working with ExpressJS. As much as possible, remind them that they already have experience working with arrays and object literals, this is just a different approach. The more you can minimize their anxiety, the better. 

## What bugs, issues, or surprises have come up in the past for this class?

## General comments

Today is the first time students will be writing code in a `server.js` file, as well as the first time working with npm, Superagent, third-party APIs, environment variables, and ExpressJS. There is a lot of content to cover, so try to give as much context and "Why" to each topic as possible. 

## Lecture

Use Postman to demonstrate the request to a third-party API, specifically the Google Geocoding API. Collapse the response object and systematically drill down into the individual properties. Remind students that these are strings, numbers, Booleans, arrays, and objects, all of which they have been working with since 201.

Demonstrate how to request information from the API and only respond with the data the client is expecting. They can view the client code base to determine what the response should include. Emphasize the fact that they are sending JSON to the client, which will then be rendered with Handlebars.

Demonstrate how to add environment variable to a terminal session. For example, `export PORT=3000` will add the port as a local environment variable for the duration of the terminal session. Then, demonstrate how to store environment variables in a `.env` file, utilizing the dotenv package from npm. Make a point to tell students that this file needs to be included in their `.gitignore` file.

## Code skeleton

## Whiteboard diagrams
