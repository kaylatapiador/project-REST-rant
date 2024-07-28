## REST-Rant

REST-Rant is an app where users can review restaurants. It provides functionalities to add, edit, and delete restaurant entries and user comments (rants) about those restaurants.

## Technologies
- Backend: Node.js, Express
- Database: MongoDB
- Frontend: EJS, HTML, CSS


## Technical Information
    
    ## Routes

| Method        |       Path    | Purpose  |
| ------------- | ------------- | -------- |
| GET           | /             | Home Page|
| GET           | /places       | Places index page  |
| Post          | /places       | Create a new place|
| GET           | /places/new   | Form page for creating a new place|
| GET           | /places/:id   | Details abot a particular place |
| PUT           | /places/:id   | Update a particular place |
| GET           | /places/:id/edit | Form a page for editing an exisitng page |
| DELETE        | /places/:id   | Delete a particular place |
| POST          | /places/:id/rant | Create a rant (comment) about a particular place |
| DELETE        | /places/:id/rant/:rantId | Delete a rant (comment) about a particular place |
| GET           | *              | 404 page (matches any route not defined above) |

### Data Model

- Name (string): Name of the resturant 
- City (string): City where the resturant is located
- State (string): State where the resturant is located
- Cuisines (string): Types of Cuisines offered by the resturant 
- Pic (string): URL of the resturant's picture

## Issues

*Some of the images when you view places are broken *

## Changelog