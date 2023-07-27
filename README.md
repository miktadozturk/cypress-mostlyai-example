### Objective:
The objective of this function is to perform automated testing on the Mostly.ai website using Cypress. The function tests the visibility of bookmarks, searches for a keyword and verifies the error message, and fills out and validates a contact form.

### Inputs:
- mostlyAiPage: an object containing methods to interact with the Mostly.ai website
- testData: a JSON file containing test data such as search text, error message, and contact form input values

### Flow:
1. Before each test, navigate to the Mostly.ai website
2. Test the visibility of bookmarks by iterating through each bookmark element, logging its index and text, and verifying its visibility and text content
3. Search for a keyword by clicking on the search icon, typing in the search text, and pressing enter. Verify the error message and search text in the search results.
4. Fill out and validate the contact form by hovering over the Company bookmark, clicking on Contact, and filling out the form fields with test data. Verify that the form is filled out correctly.

### Outputs:
- Console logs of bookmark index and text
- Verification of bookmark visibility and text content
- Verification of error message and search text in search results
- Verification of correct input values in contact form

### Additional aspects:
- The function uses the Page Object Model design pattern to interact with the Mostly.ai website
- The function uses the faker.js library to generate random test data for the contact form
- The {testIsolation:false} option is used to disable test isolation, allowing tests to share state and run faster.


## Usage

Installation Cypress: Open the terminal and type

```
npm install cypress --save-dev
```

After the installation is complete

Then type the terminal

```
npx cypress open
```

If you can get an error message please try with: 

```
node ./node_modules/cypress/bin/cypress open
```

Installation FakerJs:

```
npm install --save-dev @faker-js/faker
```

## 
Please make sure to update tests as appropriate.
