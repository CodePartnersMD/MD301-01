# Lab 11: Server-side templating with EJS

## Resources

- [Google Developer Tools](https://console.developers.google.com/)
- [EJS for server-side templating](http://ejs.co/)
- [ExpressJS docs - app.set](https://expressjs.com/en/4x/api.html#app.set)
- [HTML5 Forms](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form)
- [HTML5 Form Validation](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Form_validation#Using_built-in_form_validation)

- [Book app wireframes](./wireframes)
- Suggestion for a favicon: `https://www.freeiconspng.com/uploads/book-icon--icon-search-engine-6.png`

## Configuration

_Your repository must include the following config files:_

- `.env` - with your PORT. Make sure this file is included in your `.gitignore`
- `README.md` - with documentation regarding your lab and it's current state of development. Check the "documentation" section below for more details on how that should look **AT MINIMUM**
- `.gitignore` - with standard NodeJS configurations
- `.eslintrc.json` - with Code 301 course standards for the linter
- `package.json` - with all dependencies and any associated details related to configuration, including `express`, `ejs`, and `superagent`
- Note that the `package-lock.json` file is automatically created when dependencies are installed and ensures that future installations of the project use the same versions of the dependencies.

```sh
book_app (repository)
├──public
│  └── styles
│      ├── base.css
│      ├── fonts
│      │   ├── icomoon.eot
│      │   ├── icomoon.svg
│      │   ├── icomoon.ttf
│      │   └── icomoon.woff
│      ├── icons.css
│      ├── layout.css
│      ├── modules.css
│      └── reset.css
├──views
│  └── pages
│      ├── error.ejs
│      ├── index.ejs
│      └── searches
│          └── show.ejs
├── .env
├── .eslintrc.json
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
└── server.js
```

## User Acceptance Tests

### Overview

This week, you and your partner(s) will implement a basic full stack application for a book list which will include the ability to search the Google Books API, add books to a database, and then render those books from a PostgreSQL database. You will also add the ability to update the details of a book or remove it from the collection.

Today's portion of the application involves requesting books from the API. The client can submit a form to search for a book by title or author, and the search results will then be rendered as a list in the browser.

Your entire application will be deployed on Heroku.

### Repository Set-up

- Create a new repository on GitHub named `book_app`. Add your partner as collaborator. Clone this repository into your `codefellows/301` directory. You will be working in this same repository for labs 11 through 14.

### Heroku deployoment

- One person from your group should create an instance on Heroku. You will be working in this same instance for labs 11 thorugh 14.
  - Follow the naming convention of `<partner 1 initials>-<partner 2 initials>-booklist`. For example, Allie and Sam's instance would be named `https://ag-sh-booklist.herokuapp.com` 
- In the Deploy tab, connect your instance to your repository and enable automatic deploys from your master branch. Deploy your application and make sure there are no errors.
- From this point on, work on semantically-named non-master branches. Once your app is functioning correctly on your branch, make a PR to master and confirm functionality on your deployed site. Your deployed site **should not** contain any broken functionality.

### Feature 1: Server-side rendering

#### Why are we implementing this feature?

- As a user, I want my application to load quickly so that I have an enjoyable experience.

#### What are we going to implement?

Given that a user opens the application in the browser  
When the user navigates to the home page  
Then the index should load without a flash of unstyled content (FOUC)  

#### How are we implementing it?

- Create a basic `server.js` file. Make sure your server is listening for connections on a `PORT`. Remember to set the view engine and serve your static CSS files.
- Install any necessary NPM packages and ensure that they are documented as dependencies in your `package.json`.
- For server-side rendering, EJS looks for a folder called `views`. Create a `views` folder, with a `pages` subfolder. Within this subfolder, create a file called `index.ejs`. 
  - Note: with server-side rendering, `index.ejs` is analogous to the typical `index.html` file that you are used to, but will also allow EJS syntax for templating.
- Create a basic HTML scaffold in your `index.ejs` file which contains several elements that you can view in the browser, such as a heading element that says "Hello World". Also create a basic CSS file with several rules, such as an obvious background color. These will serve as our "proof of life" that the files are connected as expected, both locally and when deployed.
- For testing purposes, include a temporary route such as `app.get('/hello')` and render your `index.ejs` file. Turn on your server and validate that the HTML elements and basic CSS styles are being rendered as expected. This route will be useful in the future if you ever need to test your application without relying on data from a database.

### Feature 2: Search the Google Books API

#### Why are we implementing this feature?

- As a user, I want to search the Google Books API so that I can view the results of my search.

#### What are we going to implement?

Given that the user enters a seach query  
When the user submits the search form  
Then the search query should be included in a request to the Google Books API  

#### How are we implementing it?

- In your `index.ejs` file, create a search field. Add the ability for a user to indicate if they are searching by title or author, as demonstrated in class.
- This form should be displayed to the user on page load, so your corresponding endpoint should be `/`, the home route.

### Feature 3: Display search results

#### Why are we implementing this feature?

- As a user, I want to be able to browse the search results.

#### What are we going to implement?

Given that the user enters a seach query  
When the user submits the search form  
Then the first ten books should be displayed to the user   

#### How are we implementing it?

- Create a Book constructor function to model your data, based on the properties needed to build out the wireframes. The properties should utilize ternary operators or short circuit evaluation to include default values, in case the API does not return results for a given property.
- Install and require the `superagent` package from NPM; validate that it's listed as a dependency in your `package.json`.
- Add a route handler for a `POST` request to `/searches`. This route's callback will use Superagent to proxy a request to the Google Books API and return a list of ten books that match the search query.
  - Map over the array of results, creating a new Book instance from each result object. 
  - Render the newly constructed array of objects in a new view, such as `searches/show`.

### Feature 4: Error handling

#### Why are we implementing this feature?

- As a user, I want to view any error messages that occur during the usage of my book list application so that I know if something has gone wrong.

#### What are we going to implement?

Given that the application is not functioning properly  
When an error occurs  
Then the user should receive feedback that something has gone wrong  

#### How are we implementing it?

- Create an error view and render this view any time an error occurs.

### Feature 5: Style the book application

#### Why are we implementing this feature?

- As a user, I want a simple, clean looking UI so that my application is easy to navigate.

#### What are we going to implement?

Given that users access the application on multiple platforms  
When the user views the application  
Then the interface should deliver CSS to the browser

#### How are we implementing it?

- Employ CSS in a folder called `public` in your server heirarchy
- Ensure the proper use of SMACCS principles. You and your partner(s) may choose to use float-based layout, grid-based layout, Flexbox, or a combination of these.
- Style your site using a mobile-first approach. Make sure your site is responsive. Use the provided wireframes as a general guideline for the minimum styling requirements, while adding your own personal taste and color palette.
- Using the `express` static mechanism, point the static root at the public folder
- Link your CSS files so that they properly load into the browser

## MVP
Ensure that your application is foundationally ready for the week. Your entire team should be able to start the server locally, see data, and have a stable place to work on server code, templates, and styling. Deployment at this stage to Heroku is a must as this will set you up for a successful week.
- Express server application created that satisfies the use cases above
  - Everyone on the team can start the server, enter a search into the form, and view search results in the browser
- CSS delivered to the page via the Express static middleware.  This need not be "perfect", but it must be wired up so that CSS is there.
- Application deployed to Heroku
- A live Heroku URL exists that can be used to satisfy all of the requirements
 
## Stretch Goal

*As a developer, I want to completely style my website*
- Add a color palette and style guide as a separate file or in your `README.md` file
- Include at least two Google fonts
- Include icon fonts from a source such as Icomoon or FontAwesome for the social media icons you choose to include in the application
- Redeploy your application

## Documentation

_Your `README.md` must include:_

```md
# Project Name

**Author**: Your Name Goes Here
**Version**: 1.0.0 (increment the patch/fix version number if you make more commits past your first submission)

## Overview
<!-- Provide a high level overview of what this application is and why you are building it, beyond the fact that it's an assignment for a Code Fellows 301 class. (i.e. What's your problem domain?) -->

## Getting Started
<!-- What are the steps that a user must take in order to build this app on their own machine and get it running? -->

## Architecture
<!-- Provide a detailed description of the application design. What technologies (languages, libraries, etc) you're using, and any other relevant design information. -->

## Change Log
<!-- Use this area to document the iterative changes made to your application as each feature is successfully implemented. Use time stamps. Here's an examples:

01-01-2001 4:59pm - Application now has a fully-functional express server, with GET and POST routes for the book resource.

## Credits and Collaborations
<!-- Give credit (and a link) to other people or resources that helped you build this application. -->
-->
```

## Submission Instructions

- Complete your Feature Tasks for the day (below)
- Create a Pull Request (PR) back to the `master` branch of your repository
- On Canvas, submit a link to your PR and a link to your deployed application on Heroku. **Make sure to include the following:**
  - A question within the context of today's lab assignment
  - An observation about the lab assignment, or related 'Ah-hah!' moment
  - How long you spent working on this assignment
