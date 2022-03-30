# Changelog
All notable changes to this project will be documented in this file.

## [0.3.0] - 2022-03-30
 
Here we update the app to work with Parse and use React's Routing capabilities to build out 2 models.
In this version we have updated the app to utilize Parse User authentication which enabled individualized experiences for different users

### Added
- functioning login page
- functioning register page
- Auth service
- protected route (accessible only when logged in)

### Changed
- Profile cards are linked to the Users class of the Parse database and automatically load name and sign data instead of using a form

### Fixed
- continued to maintain styling
- fixed some protected routing issues that we were having with the feature 5 kickoff

## [0.2.0] - 2022-03-16
 
Here we update the app to work with Parse and use React's Routing capabilities to build out 2 models.
 
### Added
- Match feature that inputs two signs and outputs their compability
- Router is now in Components.js
- Parse services for both models

### Changed
- Html links are now React Links
 
### Fixed
- Awkward spacing and styling
- Folder structure based on Components