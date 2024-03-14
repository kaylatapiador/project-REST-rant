# Project REST-Rant

REST-Rant is an app where users can review resturants. 

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

### Data

- Name (string)
- City (string)
- State (string)
- Cuisines (string)
- Pic (string)