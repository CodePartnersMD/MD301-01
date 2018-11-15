# Lab 12: Componentization and HTML5 Forms

## Configuration

_Your repository must include the following config files:_

- `.env` - with your PORT and DATABASE_URL. Make sure this file is included in your `.gitignore`
- `README.md` - with documentation regarding your lab and it's current state of development. Check the "documentation" section below for more details on how that should look **AT MINIMUM**
- `.gitignore` - with standard NodeJS configurations
- `.eslintrc.json` - with Code 301 course standards for the linter
- `package.json` - with all dependencies and any associated details related to configuration
- Note that the `package-lock.json` file is automatically created when dependencies are installed and ensures that future installations of the project use the same versions of the dependencies.
Use the following as a guide for your directory structure.

```sh
book_app (repository)
├──public
│  ├── js
│  │   └── app.js
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
│  ├── layout
│  │   ├── footer.ejs
│  │   ├── head.ejs
│  │   └── header.ejs
│  └── pages
│      ├── error.ejs
│      ├── index.ejs
│      ├── books
│      │   ├── detail.ejs
│      │   └── show.ejs
│      └── searches
│          ├── new.ejs
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

For today's assignment, you will be adding the ability for a user to select a book from the API search results and add it to their collection, which will be persisted in a PostgreSQL database. Then, when a user navigates to the home page of the application, all of the books will be retrieved from the database and displayed on the screen. The API search form will be accessible through the menu.

You will also be adding a detail view where a user can view the description, ISBN, and current bookshelf of a single book from the collection.

### Database configuration

- You will be creating a Collection in which to store each book added by the user. Create a schema for your books table.
- This schema should contain the following properties:
  - `id` 
  - `author`
  - `title`
  - `isbn`
  - `image_url`
  - `description`
  - `bookshelf`
- Use Postman to request book data from the Google Books API. For example, you can enter a search query at the end of this route: `https://www.googleapis.com/books/v1/volumes?q=`
- Use the search results to determine the data types of each field in your table. Note that the `bookshelf` value will be manually entered by the user and should not directly reflect a specific piece of data returned from the Google Books API.
- For reference, here is a sample from the API:
```json
  {
    "title": "Dune",
    "author": "Frank Herbert",
    "isbn": "ISBN_13 9780441013593",
    "image_url": "http://books.google.com/books/content?id=B1hSG45JCX4C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    "description": "Follows the adventures of Paul Atreides, the son of a betrayed duke given up for dead on a treacherous desert planet and adopted by its fierce, nomadic people, who help him unravel his most unexpected destiny."
  }
```
- Within your MLab account, create a new database named `books_app`.
- Execute the mongoose commands to create a new collection in your database called `books` according to your schema.
- Add at least two books to your database, with bookshelf info. 
- Make sure that your schema is properly documented in your book app repository's main `README.md` file. If you made a schema file, make sure it is added, commited, and pushed to GitHub.
- In your Heroku instance, provision a mongoDB database.
  
### Feature 1: Show all saved books when the application loads

#### Why are we implementing this feature?

- As a user, I want all of my saved books to be displayed on the home page so that I can view all of the books from my collection in a single view.

#### What are we going to implement?

Given that a user opens the application in the browser  
When the user navigates to the home page  
Then all of the books saved in the collection should be rendered on the page  

#### How are we implementing it?

- Now that your main page will render the books from the database in the index page, move your API search form to a new route. In the example file tree provided above, this file is named `/searches/new.ejs`. The search functionality should be unchanged, just accessed at a different URL.
- Refactor your `/` route that responds to a `GET` request. The new associated callback function should retrieve an array of book objects from the database, and render `index.ejs`.
- Build out your `index.ejs` file to utilize the database results when rendering the page. Follow correct EJS syntax to iterate over an array of book objects and render each one in a similar manner, according to the wireframes.
- Include a count of the total number of books that are currently in the database.
- Test locally to verify that the books are displayed as expected. Redeploy your application and verify that all books in your production database are displayed as expected.

### Feature 2: Book detail view

#### Why are we implementing this feature?

As a user, I want to request information about a single book so that I can view its additional details and share it by URL.

#### What are we going to implement?

Given that a user views the book collection  
When the user clicks on a "View details" button for an individual book  
Then the application should take the user to a book detail page where the book's details—including description, ISBN, and bookshelf—will be displayed  

Given that a user is viewing the details of a single book  
When the user clicks on a menu button  
Then the user will be returned to the main page where all of the books from the collection are rendered  

#### How are we implementing it?

- Add an endpoint for a `GET` request to `/books/:id`. The associated callback should allow the client to make a request for a singular book, which returns the details of that record from the database.
- Create a new view to display the details of a single book. This view should show the title, author, description, ISBN, bookshelf and image of the book. In the file tree provided above, this functionality is included in `views/pages/books/detail.ejs` and `views/pages/books/show.ejs`. The `detail.ejs` file is a partial file that contains just a `<section>` to render the details of a single book. Think of it as a resuable book component. The `show.ejs` file uses EJS syntax to include this partial.
- Keep your app DRY: Use this same book component partial to refactor your `index.ejs` file, so books look the same wherever they are displayed in the app. 
- Build in the ability for the user to return to the main list of all books, from a book detail page.
- Redeploy your application.

### Feature 3: Modifying API-provided book details

#### Why are we implementing this feature?

- As a user, I want the ability to change details of a single book from the search results so that I can write in my custom details and assign the book to a bookshelf.

#### What are we going to implement?

Given that a user views search results including a book with details they want to edit  
When the user clicks on a button to select a book  
Then the user should view a form to modify the details of the selected book  

#### How are we implementing it?

- Add a button under each book returned from the API search results. In the provided wireframes, this is shown as a button that says "Select this Book" in the file named `12-select.png`. The button will allow a user to select a specific book from the API results. 
- When the user clicks this button, a hidden form should be revealed, allowing a user to edit the details of the chosen book. 
- Include HTML5 form validation. Note that the user will need to manually add the name of a bookshelf. All other data should automatically be filled in from the API response.
- Your application must use jQuery to hide and show the form when the user clicks on the button. No exceptions.

### Feature 4: Saving a new book to the collection

#### Why are we implementing this feature?

- As a user, I want the ability to add new books to my application so that my collection continues to grow.

#### What are we going to implement?

Given that a user would like to expand their collection  
When the user clicks on a button to add a book to the database  
Then the user should submit the form to add a new book  

#### How are we implementing it?

- When the user completes the form, including manually adding the name of a bookshelf, they should click a button to add the book to their collection. In the provided wireframes, this is shown as a button that says "Add to Database" in the file named `12-add.png`.
- This button should submit the form data as a `POST` request to `/books` and the corresponding callback should include the necessary logic to add the book to the database.
- This callback should also run a second query to retrieve the newly-added book from the database. 
- Then, send a response to redirect to the detail view which displays the information for the book that was just added. 

### Feature 5: Consistent rendering

#### Why are we implementing this feature?

- As a user, I want the application to be designed in a consistent way so that I do not experience any down time or slow load times.

#### What are we going to implement?

Given that a user views the application  
When the user interacts with the application    
Then the application should load quickly and perform efficiently

#### How are we implementing it?

- If you have not already done so when writing your server file, move your mongoose queries and view rendering into callbacks. Reference the appropriate callback in each route.
- Move your error handling into a callback, if you have not already done so.
- Add a new folder called `layout` and create partials that encapsulate HTML components that are the same across each view. Include the partial files in each view as needed. Keeping each component to a single file ensures it's the same everywhere.

### Feature 6: Continue to style the application

#### Why are we implementing this feature?

- As a user, I want a simple, clean-looking UI so that my application is easy to navigate.

#### What are we going to implement?

Given that users access the application on multiple platforms  
When the user views the application  
Then the interface should be intuitive and visually pleasing  

#### How are we implementing it?

- Continue to style your site using a mobile-responsive approach. Use the provided wireframes as a general guideline for the minimum styling requirements, while adding your own personal taste and color palette.
- Ensure the proper use of SMACCS principles.
  - Your `modules.css` will probably become larger today, which means that you should exercise SMACSS further by modularizing that stylesheet into a `modules/` directory with a file for each partial component of your site.
- Continue to iterate on your styles. For example, begin to include standardized styles such as a color palette and defined font families.
- Redeploy your application.

## Stretch Goal

*As a developer, I want to explore further functionality so that I can continue to improve the user's experience.*

Given that the user views the application on a mobile device  
When the user clicks on the hamburger menu  
Then the navigation items will be visible  

- Implement the ability for your hamburger menu to operate without the use of JavaScript. You will need to research how to enable a 'pop-up/out' style menu with vanilla HTML and CSS.
- Consider any further UI/UX features which will allow a more friendly interface for your users.

*As a developer, I want to automatically populate the database so my application is functioning efficiently.*



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

- Continue working in the same repository from the previous class.
- Continue to work on semantically-named non-master branches.
- Complete your Feature Tasks for the day (below)
- Create a Pull Request (PR) back to the `master` branch of your repository
- On Canvas, submit a link to your PR and a link to your deployed application on Heroku. **Make sure to include the following:**
  - A question within the context of today's lab assignment
  - An observation about the lab assignment, or related 'Ah-hah!' moment
  - How long you spent working on this assignment
