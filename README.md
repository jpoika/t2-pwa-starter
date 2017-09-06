# T2 Starter App

A boilerplate for creating Progressives Web Apps with React, TypeScript and Material-UI.

Boilerplate by [t2](https://github.com/Telehealth-and-Technology)

This boilerplate includes:
- [x] TypeScript 2.x
- [x] Redux, React-Redux
- [x] React-Router 4
- [x] Material-UI
- [x] Jest, Enzyme
- [x] Offline Plugin

## Prerequisites

Before starting you should be familiar with:

- [ReactJS](https://facebook.github.io/react/) 
- [Redux](http://redux.js.org/) 
- [Typescript](https://www.typescriptlang.org/) 
- [React-Router V4.x](https://reacttraining.com/react-router/core/guides/philosophy) 
- [Material UI](http://www.material-ui.com/#/) 

## Getting Started
Clone the project:

``git clone https://github.com/jlightfoot2/t2-pwa-starter``

Install dependencies:

``yarn``

Start the development server at <i>localhost:8080</i>

``yarn start``

Run tests

``yarn test``

Build the app

``yarn build``

## Demo App

The boilerplate is set up with a demo app of an online store. Run the demo app by starting the development server.

## Purpose

The purpose of this starter app is to help developers more quickly build SPA/PWA apps internally at [T2](https://github.com/Telehealth-and-Technology).

## For Developers

This app contains components written to handle common features/issues for apps at t2. If you don't want to use them they can be easilily swapped out with you're own custom solution.

### Directory Structure Notes
#### src/components/

Containes the reusable components of this starter app. Most of theses components
don't need to be edited but there are a couple exceptions:

#### src/components/AppRoutes.tsx

You will need to edit this file to include your own routes and views. In the future the routes
will likely be moved to a more logical location

#### src/components/StoreDemo

This is just a directory that houses the store demo components. I just wanted to keep
the demo related files separated from the rest of the project.


### Routing

One of the first places to look at to understand how an app like this works is to view
the top level routing. For this app this file is located here:

#### src/components/AppRoutes.tsx

This app uses react router version 4.

There are two components that basically utilize react-router v4 and add some features including the ability to:



- Set the page title
- Set the left and or right icons of the app bar
- Add a [Tab](http://www.material-ui.com/#/components/tabs) that links to the route
- Set the ink bar of a tab for a matched route


#### src/components/RouteGroup.tsx

The RouteGroup component does two primary things
- You can use it to establish the default properites of all RouteItem components nested.

```jsx
  <RouteGroup defaultProps={{title: 'Demo App!'}}>
    <RouteItem path="/" componentPage={<HomeComponent />} />
    <RouteItem exact path="/getstarted" componentPage={<GetStartedComponent />} />
    <RouteItem title={"Settings"} exact path="/setting" componentPage={<SettingsComponent />} />
  </RouteGroup>
```


#### src/components/RouteItem.tsx

RouteItem simply adds some features to the react-route v4 Route object. Plus adds some "goodie"
like creating tabs, hightlighting tabs, setting the title on for the app bar.

For example to create an app that has 3 routes and two tabs could be implemented with the code below.

```jsx
  <RouteGroup defaultProps={{title: 'Demo App!'}}>
    <RouteItem tab={0} title={"Home"} path="/" componentPage={<HomeComponent />} />
    <RouteItem tab={1} title={"Products"}exact path="/products" componentPage={<ProductsList />} />
    <RouteItem tabIndex={1} title={"Settings"} exact path="/product/:id" componentPage={<SettingsComponent />} />
  </RouteGroup>
```
The first two RouteItems create a tab merely by including a tab property and the desired tab index.
However notice that the 3rd route doesn't create a tab BUT when this route is active the "Products" tab will be 
active because we've included the tabIndex property which is passed an index number corresponding to the "Products"
tab.










