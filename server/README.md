# Server

## Tech Used

- Express.js
- Prisma ORM

## Getting started

```bash
cp .env.example .env
yarn
yarn dev
```

## Structure

- models: function wrappers around the prisma ORM
- prisma: contains the schema and auto-generated migration files
- routes: contains the configuration for all express routes
- utils: helper functions and classes

## Using the REST API

The REST API can be accessed directly at [`localhost:4000`](http://localhost:4000).

### `GET`

- `/dotters`: Fetch all Dotters
  - Query Params:
    - `page`: 1-index paging
    - `perPage`: # of results to return per page
    - `includeLocation`: Include the related location record
- `/dotters/:id`: Fetch a single Dotter by its `id`
  - Query Params:
    - `includeLocation`: Include the related location record
- `/locations`: Fetch all Locations
  - Query Params:
    - `page`: 1-index paging
    - `perPage`: # of results to return per page
    - `includeDotters`: Include the related Dotter records
- `/locations/:id`: Fetch a location by its `id`
  - Query Params:
    - `includeDotters`: Include the related Dotter records

### `POST`

- `/dotters`: Create a new Dotter
  - Body:
    - `firstName: String` (required): The firstName of the Dotter
    - `lastName: String` (required): The lastName of the Dotter
    - `title: String` (required): The title of the Dotter
    - `profilePic: String` (required): The profilePic of the Dotter
    - `city: String` (required): The city of the Dotter
    - `state: String` (optional): The state of the Dotter
    - `country: String` (required): The firstName of the Dotter

### `PUT`

- `/dotters/:id`: Update a Dotter by its `id`
  - Body:
    - `firstName: String` (required): The firstName of the Dotter
    - `lastName: String` (required): The lastName of the Dotter
    - `title: String` (required): The title of the Dotter
    - `profilePic: String` (required): The profilePic of the Dotter

### `DELETE`

- `/dotters/:id`: Delete a Dotter by its `id`
