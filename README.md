# Text-PWA-Editor

## Table of Contents
* [Description](#Description)
* [User Story](#User-Story)
* [Acceptance Criteria](#Acceptance-Criteria)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Credits](#credits)
* [Contributors](#contributors)
* [Report Bugs](#bugreport)

# Description
My task is to build a text editor that runs in the browser. The app will be a single-page application that meets the PWA criteria. Additionally, it will feature a number of data persistence techniques that serve as redundancy in case one of the options is not supported by the browser. The application will also function offline.

## User Story
```md
AS A developer
I WANT to create notes or code snippets with or without an internet connection
SO THAT I can reliably retrieve them for later use
```
## Acceptance Criteria
```md
GIVEN a text editor web application
WHEN I open my application in my editor
THEN I should see a client server folder structure
WHEN I run `npm run start` from the root directory
THEN I find that my application should start up the backend and serve the client
WHEN I run the text editor application from my terminal
THEN I find that my JavaScript files have been bundled using webpack
WHEN I run my webpack plugins
THEN I find that I have a generated HTML file, service worker, and a manifest file
WHEN I use next-gen JavaScript in my application
THEN I find that the text editor still functions in the browser without errors
WHEN I open the text editor
THEN I find that IndexedDB has immediately created a database storage
WHEN I enter content and subsequently click off of the DOM window
THEN I find that the content in the text editor has been saved with IndexedDB
WHEN I reopen the text editor after closing it
THEN I find that the content in the text editor has been retrieved from our IndexedDB
WHEN I click on the Install button
THEN I download my web application as an icon on my desktop
WHEN I load my web application
THEN I should have a registered service worker using workbox
WHEN I register a service worker
THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets
WHEN I deploy to Heroku
THEN I should have proper build scripts for a webpack application
```
## Installation
- Run `npm install` to install the npm package dependencies.

- Run `npm start dev` to run the app in localhost.

## Usage
Click on the url below: 
`https://text-pwa-editor007.herokuapp.com/`

### Application Screenshot:

## License 
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg) 

[Read more about MIT License here.](https://opensource.org/licenses/MIT)

## Credits
Columbia classes videos, documentations & some videos online

## Contributors
N/A

## BugReport
- [Github](https://github.com/miklos-petronia)
- [Email](mailto:miklos.petronia@hotmail.com)

## BugReport
- [Github](https://github.com/miklos-petronia)
- [Email](mailto:miklos.petronia@hotmail.com)
