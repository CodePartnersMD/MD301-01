# Lab 02: jQuery Selectors and Events

## Configuration

_Your repository must include the following config files:_
- `README.md` - with an overview of the project for a new visitor to your repo
- `.gitignore` - with standard NodeJS configurations (see the provided `.gitignore` file)
- `.eslintrc.json` - with Code 301 course standards for the linter (see the provided `.eslintrc.json` file)

- Organize your files into folders as you see fit. Here is an example file tree:

```sh
lab-02-repository
├── .eslintrc.json
├── .gitignore
├── css
│   ├── reset.css
│   └── styles.css
├── data
│   └── page-1.json
├── index.html
├── js
│    └── app.js
└── README.md
```

## User Acceptance Tests

### Overview

In labs 2 and 3, you and your partner(s) will be using the provided JSON files to create a photo gallery. You will style it using floats.

You have the option of using the provided `index.html` file, but it is not a requirement. 

### Feature #1: Display images

#### Why are we implementing this feature?

- As a user, I want to view the images on the page so that I can browse the photo collection.

#### What are we going to implement?

Given that a user opens the application in the browser  
When the user naviates to the home page  
Then the photo gallery should display all of the images in the gallery  

#### How are we implementing it?

- Use AJAX, specifically `$.get()`, to read the provided JSON file.
- Each object should become a new instance of a constructor function. Refer to the data to determine the necessary properties.
- Use jQuery to make a copy of the HTML template of the photo component. For each object, fill in the duplicated template with its properties, then append the copy to the DOM.

### Feature #2: Filter images

#### Why are we implementing this feature?

- As a user, I want to be able to filter the images so that I can view only images that match a keyword.

#### What are we going to implement?

Given that a user clicks on the dropdown menu  
When the user selects one of the options  
Then only the images whose keyword matches the option should be displayed  

#### How are we implementing it?

- Create a `<select>` element which contains unique `<option>` elements extracted dynamically from the JSON file, one for each keyword.
- Use an event handler to respond when the user chooses an option from the select menu. Hide all of the images, then show those whose keyword matches the option chosen.

### Feature #3: Style the application

#### Why are we implementing this feature?

- As a user, I want a simple, clean looking UI so that my photo gallery clearly displays the images in a gridlike pattern.

#### What are we going to implement?

Given that a user opens the application in the browser  
When the user navigates to the home page  
Then the images should be displayed in rows across the screen  

#### How are we implementing it?

- Style your application using floats.
- Utilize at least one Google font.

## Submission Instructions

- Complete your Feature Tasks for the day
- Create a Pull Request (PR) back to the `master` branch of your repository
- On Canvas, submit a link to your PR and a link to your deployed application on GitHub pages. Add a comment in your Canvas assignment which includes the following:
  - A question within the context of today's lab assignment
  - An observation about the lab assignment, or related 'Ah-hah!' moment
  - How long you spent working on this assignment
