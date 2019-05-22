# NgxComponents
Reclamador angular component library
###### Project generated with [Angular CLI](https://github.com/angular/angular-cli) using [Nrwl Nx](https://nrwl.io/nx). 

The repository contains the libray (reclamitux) a test page app (demo-page) and a build enviroment for github pages.

## Demo
Visit our [demo page](https://reclamador.github.io/ngx-components/dist/apps/demo-page/).

## Development server
Run `ng serve --project=demo-page` to launch the demo-page server and navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Create new blocks
You can create add new components to the library with `ng g component COMPONENT-NAME --project=reclamitux` or some other block with `ng generate directive|pipe|service|class|guard|interface|enum|module --project=reclamitux`.

## Build

Run `ng build --project=myapp` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Documentation

The project demo page is served with github pages. The code is in the branch **gh-pages** and it's only suppose to keep the dist changes. The process to update the documentation should be like this:
* Deploy the changes to **master**
* Merge the **master** branch into **gh-pages**
* Build the new version of the page with the command `npm build-docs`
* Commit the changes and upload them to the repository

The github page updates instantly.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.
