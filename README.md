﻿# J.A.T.E. - Just Another Text Editor
## Description
J.A.T.E. is a Progressive Web Application (PWA) text editor designed for offline and online use. It utilizes Webpack, IndexedDB, and service workers to offer a fast and reliable user experience. Whether you're online or offline, J.A.T.E. ensures your data is saved and synchronized when a connection is available. This project is bundled with Webpack and can be easily deployed to various platforms.

## Features
- Progressive Web App (PWA): Installable on any device, works offline with full functionality.
- IndexedDB: Stores text input locally using the idb library, making the app data persistent across sessions, even without internet access.
- Service Workers: Ensures fast loading times and offline capabilities by caching important assets.
- Responsive Design: Adaptable to any screen size for both desktop and mobile usage.
- Webpack Bundling: Optimized asset bundling for efficient loading and minimal file size.

## Table of Contents

* Installation
* Usage
* Technologies
* Installation

# Installation 
## Requirements
To run J.A.T.E. locally, ensure you have the following:

Node.js installed on your machine
npm (comes with Node.js)

## Steps
1. Clone the repository:
git clone https://github.com/your-username/jate.git
cd jate

2. Install dependencies:
   npm install

3. Build:
   npm run build

4. Start app
   npm start

5. To build the PWA for production:
   npm run build
   
## Usage

* Online Use: Simply open the app in your browser and start typing. All your changes will be saved automatically.
* Offline Use: Install the app as a PWA and use it offline. Your work will be stored using IndexedDB and synced once you're back online.
* Deployment: To deploy the app, you can use platforms such as Render, Netlify, or any other service that supports Node.js.

## Technologies
* Node.js: Backend runtime environment.
* Express: Web framework to serve the application.
* Webpack: Module bundler to optimize assets.
* IndexedDB (idb): Database for local storage.
* Service Workers: Manages caching and offline support.
* Babel: JavaScript compiler for cross-browser compatibility.
* PWA: Enhances the app with offline capabilities and installability.
