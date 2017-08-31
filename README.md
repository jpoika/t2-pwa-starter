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

This app features components written to handle common problems. If you don't want
to use them the can be easilily swapped out.

### Directory Structure Notes
#### src/components/

Containes the reusable components of this starter app. Most of theses components
don't need to be edited but there are a couple exceptions:

#### src/components/AppRoutes.tsx

You will need to edit this file to include your own routes and views

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










