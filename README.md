# Rapp
#### The Recipe App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8. It serves as a simple receipe web applicaiton and was my introduction to using Angular and Typescript. It is inspired by [Mark Wandschneider's](https://github.com/marcwan) Learning Angular LiveLessons.

## Dependencies

* Node.js (v8.11.3) - go to [NodeJS Downloads](https://nodejs.org/en/download/ ) for the latest release for your system
* Typescript (v2.9.2) - `npm install -g typescript` and make sure the `tsc` (typescript compiler) command works
* Bootstrap (Version 3) - on the [Bootstrap Website](http://getbootstrap.com/) go the v3.3.7 and download
* Angular 4 - commands to install can be seen at the [Angualr CLI Website](https://cli.angular.io/)

## Development server

Run `ng serve` for a dev server (this might take several seconds). Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Recipe App server

Rapp uses an extremely simple HTTP server on localhost:8080 which can be found [here](https://github.com/marcwan/angularrecipeserver).  It stores recipes in a JSON file.  After cloning the git repository, run `npm install` from inside the newly cloned directory to download the dependencies in the package.json. Then inside the `app/` directory run the `run.sh` script. If you wish to skip the database refresh preformed in `run.sh`, you can simple run `node server.js` from the same directory. Recipes can be hard coded into the `recipes.json.start` file for `run.sh` or `recipes.json` for `server.js`.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
