# GraphQL Migration Demo

## Prerequisites

- Node v16+
- npm v7+

## Getting Started

There are 2 project folders in this repo under 'apps':

- server: Express.js API
- client: Next.js website

Before continuing, run `npm install` in both directories:

```bash
npm install
```

### Initialize the Database

The following command will initialize the database, create the new tables, and seed the data. When asked for a name call it anything you'd like for instance, "init seed"

```bash
npm run prisma:reset
```

### Copy `/apps/client/.env.sample` -> `/apps/client/.env`

`cp apps/client/.env.sample apps/client/.env`

### Run the server

```bash
npm run dev:server
```

### Run the client

```bash
npm run dev:client
```

### Run both for easy development

```bash
npm run dev
```

## Migration Steps

1. Setup your GraphQL Server
2. Define your schema
3. Create your resolvers using your preferred methodology
4. Setup your choice for GraphQL client
5. Update existing API calls with GraphQL calls
6. 🚢

## Testing

The focus is on testing the CRUD actions on the server side of the application.

```bash
npm test
```

This will

1. Execute Prisma Test _then_ Server Test
1. Prisma Test is going to do a couple things
   1. `dotenv -e .env.test -- npx prisma migrate reset --force`
   1. setup a clean test.sqlite and seed it with data
   1. run all migrations on it
1. Then after Prisma Test is complete `jest test` from the server directory is executed

## Working with Repo during workshop

The repo is broken down by tags

1. `git checkout tags/v1.0 -b v1.0-branch` Is the inital project with tested REST api.
   ...
1. `git checkout tags/v2.0 -b v2.0-branch` Is the final, finished project with GRAPHQL implemented along side the REST API

TODO: Repo needs to be progressivly enhanced from v1.0 -> v2.0 for each moudle adding in the code and tests along with objectives to cover from the instructor docs. Starting with [Commit](https://github.com/thisdot/rest-to-graphql/commits/main) cc783d701147d63a996c0f03eda48d9e2931797d is where gql deps are added and then work up the commits, and generate a tag `v1.1` before moving onto the next modlue. (at least that was the general plan)
