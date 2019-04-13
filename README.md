# React Nights - Hynek Zemanec

This project is used as a training excercise for the STRV React Nights 2019.

The goal of this project is to build production-ready e-commerce app using [React](https://reactjs.org/).

## Setup

> Awesome `Create React App` described below ⬇ has been used to easily set up the project

## Project Structure

> The project follows **Group By Feature** architecture, bundling it's parts by functionality

The structure is following:

- `/components`
  - grouping all reusable components that are used among `pages`
- `/pages`
  - components with a specific use-case visible 👀 by the user 👤
- `/store`
  - code handeling global state
- `/api`
  - code seperating communication between the app and api used
  - a.k.a. bridge 🌉 between the View and the server
- `/config.js`
  - place for congigurations of code during runtime

## Styling

[Styled Components](https://www.styled-components.com/) have been used for styles as it brilliantly solves all scoping problems we have all previously struggled with.

just `npm install --save styled-components` 😎 and 🎊

### Tools

There is a number of code quality tools used in the project.

Those are:

- ESlint
  - to watch your buggy code
- Prettier
  - to format your ugly code
- Editorconfig
  - to make common coding rules for everyone
- Husky
  - to force you not to `git push` any embarassing code

### API

Dummy data resources are provided by [Commerce Layer](https://commercelayer.io/).

### VS Code extensions

If using VS Code Handful extensions are recommended:

- Prettier
- Babel JavaScript
- ESLint
- htmltagwrap
- Import Cost
- Indenticator
- Very Smart Select

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
