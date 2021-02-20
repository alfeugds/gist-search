# Gist Search App

## Considerations:

I've focused on creating a project structure with React + Redux + Thunk + Component tests + Test coverage that would enable the reuse and implementation of new features with TDD in mind.

What I could accomplish from the functional requirements:

- Search: When a user enters a username, it should be able to get a full list of
public Gists by that user
- Filetype: Convert the filetypes of the files in the gist into a tag/badge, (e.g, if the returned gist has list of files containing python and JavaScript files, the gist should have the respective tags/badges).

What I didn't implement due to time constraints:

- Fork: Username/Avatar of the last 3 users who forked it with avatar linking tothe fork.

### Side notes:
`npm audit` is failing due to a new security issue in one of the dependencies of create-react-app: https://github.com/facebook/create-react-app/issues/10578.

I've documented some TODO's in the code. I would resolve them using TDD. The test suite and the high code coverage would give confidence to the developer to implement the code while refactoring it if needed.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run test:watch`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run test -- --coverage`

Generates test coverage report

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

----

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
