![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

## Lab 27: React Testing and Deployment

### Author: Joseph Wolfe

### Links and Resources
* [repo](https://github.com/charmedsatyr-401-advanced-javascript/lab-27)
* [![Build Status](https://travis-ci.com/charmedsatyr-401-advanced-javascript/lab-27.svg?branch=master)](https://travis-ci.com/charmedsatyr-401-advanced-javascript/lab-27) 
* [netlify](https://loving-beaver-04c499.netlify.com/)
* [aws s3 (manual)](http://charmedsatyr-401d29-lab-27.s3-website-us-west-2.amazonaws.com/)
* [aws s3 (automated)](https://charmedsatyr-401d29-lab-401d29charmedsatyrlab27b-148qmzypc3n92.s3-us-west-2.amazonaws.com) *This one has permissions issues.*

#### Documentation
* [styleguide](styleguide/index.html)

### Modules
`./src/index.js`
`./src/app.js`
`./src/counter/counter.js`
`./src/header/header.js`
`./src/footer/footer.js`

#### `./src/index.js`
##### Exported Values and Methods
The entry point to the app. Exports `<Main/>`.

#### `./src/app.js`
##### Exported Values and Methods
Arranges interior components. Exports `<App/>`.

#### `./src/counter/counter.js`
##### Exported Values and Methods
The functional, stateful core of the app with a counter and increment/decrement links. Exports `<Counter/>`.

#### `./src/footer/footer.js`
##### Exported Values and Methods
A static footer. Exports `<Footer/>`.

#### `./src/header/header.js`
##### Exported Values and Methods
A static footer. Exports `<Header/>`.

### Setup
#### `.env` requirements
N/A

#### Running the app
* `npm start`
  
#### Tests
* How do you run tests?
  * npm run test
* What assertions were made?
  * Snapshot and functional tests for `Header`, `Footer`, and `Counter` components.
* What assertions need to be / should be made?
TBD

#### UML
N/A
